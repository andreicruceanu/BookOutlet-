export const getItem = (key, type) => {
  const item = localStorage.getItem(key);

  if (item) {
    return JSON.parse(item);
  } else {
    switch (type) {
      case "object": {
        return {};
      }
      case "array": {
        return [];
      }
      default: {
        return null;
      }
    }
  }
};
