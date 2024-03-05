import { useEffect, useState } from "react";
import booksApi from "../api/modules/books";

export function useBookDetails(id) {
  const [book, setBook] = useState(null);
  const [error, setError] = useState(undefined);

  async function loadBookDetails() {
    const { response, err } = await booksApi.bookDetails({ id });

    if (response) {
      setBook(response);
    }
    if (err) {
      setError(err.message);
    }
  }

  useEffect(() => {
    loadBookDetails();
  }, [id]);

  return { book, error };
}
