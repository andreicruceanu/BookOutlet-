export const calculateDiscountPercentage = (oldPrice, price) => {
  const reducere = ((oldPrice - price) / oldPrice).toFixed(3) * 100;
  return Number.isInteger(reducere) ? reducere : reducere.toFixed(1);
};
