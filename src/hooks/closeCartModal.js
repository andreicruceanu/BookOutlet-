import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../features/modalCart/modalCartSlice";

const useCloseCartModal = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeModal());
  }, [dispatch, id]);
};

export default useCloseCartModal;
