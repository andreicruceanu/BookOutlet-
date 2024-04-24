import axios from "axios";
import publicClient from "../client/public.clinet";

const booksEndpoints = {
  getAllBooks: "/books",
  bookDetails: (id) => `/book/${id}`,
  getAttributes: (bookId) => `/${bookId}/getattributes`,
};

const booksApi = {
  getAllBooks: async () => {
    try {
      const response = await publicClient.get(booksEndpoints.getAllBooks);

      return { response };
    } catch (err) {
      if (axios.isCancel(err)) {
        return;
      }
      return { err };
    }
  },
  bookDetails: async ({ id, signal }) => {
    try {
      const response = await publicClient.get(
        booksEndpoints.bookDetails(id),
        signal
      );
      return { response };
    } catch (err) {
      if (axios.isCancel(err)) {
        return;
      }
      return { err };
    }
  },
  getAttributes: async ({ bookId }) => {
    try {
      const response = await publicClient.get(
        booksEndpoints.getAttributes(bookId)
      );

      return { response };
    } catch (err) {
      return { err };
    }
  },
};

export default booksApi;
