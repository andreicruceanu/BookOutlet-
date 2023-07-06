import privateClient from "../client/private.client";

const profileApi = {
  getProfile: async () => {
    try {
      const response = await privateClient.get("/profile");

      return { response };
    } catch (err) {
      return { err };
    }
  },
};

export default profileApi;
