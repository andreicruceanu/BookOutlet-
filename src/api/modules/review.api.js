import privateClient from "../client/private.client";
import publicClient from "../client/public.clinet";

const reviewEndpoints = {
  list: ({ bookId }) => `book/${bookId}/reviews`,
  add: ({ bookId }) => `book/${bookId}/addreview`,
};

const reviewApi = {
  getList: async ({ bookId }) => {
    try {
      const response = await publicClient.get(reviewEndpoints.list({ bookId }));

      return { response };
    } catch (err) {
      return { err };
    }
  },

  addReview: async ({ bookId, Rating, Text, Title }) => {
    try {
      const response = await privateClient.post(
        reviewEndpoints.add({ bookId }),
        { Rating, Text, Title }
      );

      return { response };
    } catch (err) {
      return { err };
    }
  },
};

export default reviewApi;
