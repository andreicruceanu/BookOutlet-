import privateClient from "../client/private.client";
import endpoints from "../endpoints";

const addressApi = {
  saveAddress: async (data) => {
    try {
      const response = await privateClient.post(endpoints.saveAddress, data);
      return { response };
    } catch (err) {
      return { err };
    }
  },
  updateAddress: async (data) => {
    try {
      const response = await privateClient.put(endpoints.updateAddress, data);
      return { response };
    } catch (err) {
      return { err };
    }
  },
  deleteAddress: async (id) => {
    try {
      const response = await privateClient.delete(endpoints.deleteAddress(id));
      return { response };
    } catch (err) {
      return { err };
    }
  },
};

export default addressApi;
