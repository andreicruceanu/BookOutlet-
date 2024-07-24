import axios from "axios";
import { useEffect, useMemo, useRef, useState } from "react";

import { getItem, setItem } from "../utils/localStorage";
import publicClient from "../api/client/public.clinet";

const STALE_TIME = 5 * 60 * 1000; // 5 minutes

const useFetchCached = (url, options) => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const abortControllerRef = useRef(null);

  const storageKey = useMemo(() => {
    if (!options?.params) {
      return url;
    }

    return url + "?" + JSON.stringify(options.params);
  }, [options, url]);

  useEffect(() => {
    const fetchData = async () => {
      const currentTime = new Date().getTime();
      const cachedData = getItem(storageKey);

      if (cachedData && currentTime - cachedData.lastFetched < STALE_TIME) {
        setData(cachedData.data);
        setIsLoading(false);
        return;
      }

      abortControllerRef.current = new AbortController();

      setError(null);
      setIsLoading(true);

      try {
        const response = await publicClient.get(url, {
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
  }, [options, storageKey, url]);

  useEffect(() => {
    if (!data) return;

    setItem(storageKey, {
      lastFetched: new Date().getTime(),
      data,
    });
  }, [data, storageKey]);

  return { data, error, isLoading };
};

export default useFetchCached;
