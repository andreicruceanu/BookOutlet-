import { useEffect, useState } from "react";
import booksApi from "../api/modules/books";

export function useBooks() {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(undefined);
  async function loadBooks() {
    const { response, err } = await booksApi.getAllBooks();

    if (response) {
      setBooks(response);
    }
    if (err) {
      setError(err.message);
    }
  }

  useEffect(() => {
    loadBooks();
  }, []);

  return { books, error };
}
