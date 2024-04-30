import { useEffect, useRef, useState } from "react";
import axios from "axios";
import privateClient from "../api/client/private.client";
import { getError } from "../utils/getError";

const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);

  const abortControllerRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      abortControllerRef.current = new AbortController();

      setError(null);
      setIsLoading(true);
      try {
        const response = await privateClient.get(url, {
          ...options,
          signal: abortControllerRef.current?.signal,
        });
        setData(response);
      } catch (error) {
        if (axios.isCancel(error)) {
          return;
        }
        setError(getError(error));
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();

    return () => {
      abortControllerRef.current?.abort();
    };
  }, [options, url]);

  return { data, error, isLoading };
};
export default useFetch;
