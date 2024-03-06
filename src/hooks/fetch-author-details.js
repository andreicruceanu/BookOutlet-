import { useEffect, useState } from "react";
import authorApi from "../api/modules/author.api";

export function useAuthorDetails({ id }) {
  const [author, setAuthor] = useState(null);
  const [error, setError] = useState(undefined);

  async function loadAuthorDetails() {
    const { response, err } = await authorApi.authorDetails(id);

    if (response) {
      setAuthor(response);
    }
    if (err) {
      setError(err.message);
    }
  }

  useEffect(() => {
    loadAuthorDetails();
  }, [id]);

  return { author, error };
}
