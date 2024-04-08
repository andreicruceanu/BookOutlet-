import { useEffect, useMemo, useRef, useState } from "react";
import publicClient from "../api/client/public.clinet";
import axios from "axios";
import { getItem, setItem } from "../utils/localStorage";

const STALE_TIME = 5 * 60 * 1000; // 5 minutes

const useFetch = (id, options) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const storageKey = useMemo(() => "booksFetched", []);
  const [booksFetched] = useState(getItem(storageKey) || []);

  const abortControllerRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const currentTime = new Date().getTime();
      const cachedData = booksFetched;

      const findBookCached = cachedData.find(
        (el) => el.data._id.toString() === id.toString()
      );

      if (
        findBookCached &&
        currentTime - findBookCached.lastFetched < STALE_TIME
      ) {
        setData(findBookCached.data);
        setIsLoading(false);
        return;
      }

      abortControllerRef.current = new AbortController();

      setError(null);
      setIsLoading(true);
      try {
        const response = await publicClient.get(`book/${id}`, {
          ...options,
          signal: abortControllerRef.current?.signal,
        });
        setData(response);
      } catch (error) {
        if (axios.isCancel(error)) {
          return;
        }
        setError("Something went wrong. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();

    return () => {
      abortControllerRef.current?.abort();
    };
  }, [options, booksFetched, id]);

  useEffect(() => {
    if (!data) return;

    const newData = { data, lastFetched: new Date().getTime() };

    const existingBook = booksFetched.find(
      (book) => book.data._id.toString() === data._id.toString()
    );

    const updatedBooks = existingBook
      ? booksFetched.map((el) =>
          el.data._id.toString() === newData.data._id.toString() ? newData : el
        )
      : [...booksFetched, newData];

    setItem(storageKey, updatedBooks);
  }, [data, storageKey, booksFetched]);

  return { data, error, isLoading };
};
export default useFetch;
