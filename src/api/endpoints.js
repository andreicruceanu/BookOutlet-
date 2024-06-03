const endpoints = {
  users: "/api/users",
  userProfile: "/profile",
  userProfileUpdate: "/updateProfile",
  posts: "/api/posts",
  books: "/books",
  userFavorite: "/user/favorite",
  sliders: "/sliders/all",
  authorsAll: "/author/all",
  featuredAuthors: "/author/importance",
  saveAddress: "/saveAddress",
  updateAddress: "/updateAddress",
  authorDetails: (id) => `/author/${id}`,
  deleteAddress: (id) => `/deleteAddress/${id}`,
  getAttributes: (bookId) => `/${bookId}/getattributes`,
  removeFavorite: ({ favoriteId }) => `user/favorite/${favoriteId}`,
  getListReviews: ({ bookId }) => `book/${bookId}/reviews`,
  addReview: ({ bookId }) => `book/${bookId}/addreview`,
  listFavorite: "user/favorite",
  addToFavorite: "user/addFavorite",
};

export default endpoints;
