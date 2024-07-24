export const checkBookCart = (array, id) => {
  console.log(array, id);
  return array.some((book) => book._id.toString() === id);
};
