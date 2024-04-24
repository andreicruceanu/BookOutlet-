import publicClient from "../../api/client/public.clinet";
import endpoints from "../../api/endpoints";

const getBooks = async () => {
  const response = await publicClient.get(endpoints.books);

  return response;
};

const booksService = {
  getBooks,
};

export default booksService;
