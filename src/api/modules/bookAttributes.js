import publicClient from "../client/public.clinet";
import endpoints from "../endpoints";

const bookAttributes = {
  getAttributes: async ({ bookId }) => {
    try {
      const response = await publicClient.get(endpoints.getAttributes(bookId));
      return { response };
    } catch (err) {
      return { err };
    }
  },
};

export default bookAttributes;
