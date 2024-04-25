const endpoints = {
  users: "/api/users",
  posts: "/api/posts",
  books: "/books",
  userFavorite: "/user/favorite",
  sliders: "/sliders/all",
  authorsAll: "/author/all",
  featuredAuthors: "/author/importance",
  authorDetails: (id) => `/author/${id}`,
};

export default endpoints;
