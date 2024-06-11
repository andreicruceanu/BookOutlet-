import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../features/modalCart/modalCartSlice";

const useCloseCartModal = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeModal());
  }, [dispatch]);
};

export default useCloseCartModal;
