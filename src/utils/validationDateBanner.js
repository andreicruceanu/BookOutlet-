export const validationDateBanner = function (date) {
  return (
    new Date() >= new Date(`${date.dateStart}`) &&
    new Date() <= new Date(`${date.dateStop}`)
  );
};
