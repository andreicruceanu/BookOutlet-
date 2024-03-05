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
      return { err };
    }
  },
  bookDetails: async ({ id }) => {
    try {
      const response = await publicClient.get(booksEndpoints.bookDetails(id));

      return { response };
    } catch (err) {
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
