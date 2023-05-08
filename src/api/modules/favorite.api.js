import privateClient from "../client/private.client";

const favoriteEndpoints = {
  list: "user/favorite",
  add: "user/addFavorite",
  remove: ({ favoriteId }) => `user/favorite/${favoriteId}`,
};

const favoriteApi = {
  getList: async () => {
    try {
      const response = await privateClient.get(favoriteEndpoints.list);
      return { response };
    } catch (err) {
      return { err };
    }
  },
  add: async ({ bookId, mainImageUrl, price, oldPrice, title, url }) => {
    try {
      const response = await privateClient.post(favoriteEndpoints.add, {
        bookId,
        mainImageUrl,
        price,
        oldPrice,
        title,
        url,
      });

      return { response };
    } catch (err) {
      return { err };
    }
  },
  remove: async ({ favoriteId }) => {
    try {
      const response = await privateClient.delete(
        favoriteEndpoints.remove({ favoriteId })
      );
      return { response };
    } catch (err) {
      return { err };
    }
  },
};

export default favoriteApi;
