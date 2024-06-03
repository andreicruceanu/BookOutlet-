import privateClient from "../client/private.client";
import publicClient from "../client/public.clinet";
import endpoints from "../endpoints";

const reviewApi = {
  getList: async ({ bookId }) => {
    try {
      const response = await publicClient.get(
        endpoints.getListReviews({ bookId })
      );
      return { response };
    } catch (err) {
      return { err };
    }
  },
  addReview: async ({ bookId, ...values }) => {
    try {
      const response = await privateClient.post(
        endpoints.addReview({ bookId }),
        { ...values }
      );

      return { response };
    } catch (err) {
      return { err };
    }
  },
};

export default reviewApi;
