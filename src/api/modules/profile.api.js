import privateClient from "../client/private.client";
import endpoints from "../endpoints";

const profileApi = {
  getProfile: async () => {
    try {
      const response = await privateClient.get(endpoints.userProfile);
      return { response };
    } catch (err) {
      return { err };
    }
  },
  updateProfile: async (values) => {
    try {
      const response = await privateClient.put(
        endpoints.userProfileUpdate,
        values
      );
      return { response };
    } catch (err) {
      return { err };
    }
  },
};

export default profileApi;
