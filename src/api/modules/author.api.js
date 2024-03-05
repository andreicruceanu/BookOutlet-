import publicClient from "../client/public.clinet";

const authorEndpoints = {
  authorImportance: "/author/importance",
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
};

export default authorApi;
