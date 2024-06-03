import privateClient from "../client/private.client";
import endpoints from "../endpoints";

const favoriteApi = {
  getList: async () => {
    try {
      const response = await privateClient.get(endpoints.listFavorite);
      return { response };
    } catch (err) {
      return { err };
    }
  },
  add: async ({
    bookId,
    mainImageUrl,
    price,
    oldPrice,
    title,
    url,
    subtitle,
  }) => {
    try {
      const response = await privateClient.post(endpoints.addToFavorite, {
        bookId,
        mainImageUrl,
        price,
        oldPrice,
        title,
        subtitle,
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
        endpoints.removeFavorite({ favoriteId })
      );
      return { response };
    } catch (err) {
      return { err };
    }
  },
};

export default favoriteApi;
