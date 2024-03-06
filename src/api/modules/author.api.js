import publicClient from "../client/public.clinet";

const authorEndpoints = {
  authorImportance: "/author/importance",
  authorsAll: "/author/all",
  authorDetails: (id) => `/author/${id}`,
};

const authorApi = {
  getAuthorImportance: async () => {
    try {
      const response = await publicClient.get(authorEndpoints.authorImportance);

      return { response };
    } catch (err) {
      return { err };
    }
  },
  getAuthorsAll: async () => {
    try {
      const response = await publicClient.get(authorEndpoints.authorsAll);
      return { response };
    } catch (err) {
      return { err };
    }
  },
  authorDetails: async (id) => {
    try {
      const response = await publicClient.get(
        authorEndpoints.authorDetails(id)
      );
      return { response };
    } catch (err) {
      return { err };
    }
  },
};

export default authorApi;
