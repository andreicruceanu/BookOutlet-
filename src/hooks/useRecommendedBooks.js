import { useEffect, useRef, useState } from "react";
import publicClient from "../api/client/public.clinet";
import axios from "axios";

const useRecommendedProducts = (id, options) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const abortControllerRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      abortControllerRef.current = new AbortController();

      setError(null);
      setIsLoading(true);
      try {
        const response = await publicClient.get(`/book/recommended/${id}`, {
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
  }, [options, id]);
  return { data, error, isLoading };
};
export default useRecommendedProducts;
