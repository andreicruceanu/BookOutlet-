import { useEffect } from "react";

const useScrollTop = (param) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [param]);
};

export default useScrollTop;
