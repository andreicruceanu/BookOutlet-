import privateClient from "../client/private.client";

const addressEndpoints = {
  saveAddress: "/saveAddress",
  updateAddress: "/updateAddress",
  deleteAddress: (id) => `/deleteAddress/${id}`,
};

const addressApi = {
  saveAddress: async (data) => {
    try {
      const response = await privateClient.post(
        addressEndpoints.saveAddress,
        data
      );
      return { response };
    } catch (err) {
      return { err };
    }
  },
  updateAddress: async (data) => {
    try {
      const response = await privateClient.put(
        addressEndpoints.updateAddress,
        data
      );
      return { response };
    } catch (err) {
      return { err };
    }
  },
  deleteAddress: async (id) => {
    try {
      const response = await privateClient.delete(
        addressEndpoints.deleteAddress(id)
      );
      return { response };
    } catch (err) {
      return { err };
    }
  },
};

export default addressApi;
