import { useEffect, useState } from "react";
import authorApi from "../api/modules/author.api";

export function useAuthorAll() {
  const [author, setAuthor] = useState([]);
  const [error, setError] = useState(undefined);

  async function loadAuthor() {
    const { response, err } = await authorApi.getAuthorsAll();

    if (response) {
      setAuthor(response);
    }
    if (err) {
      setError(err.message);
    }
  }

  useEffect(() => {
    loadAuthor();
  }, []);

  return { author, error };
}
