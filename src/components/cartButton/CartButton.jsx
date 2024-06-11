import Modal from "../modal/Modal";
import PopupCart from "../popupCart/PopupCart";
import styles from "./styles.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
function CartButton({ addToCart, isOpenModal }) {
  return (
    <>
      <button className={styles.btnCart} onClick={addToCart}>
        <AiOutlineShoppingCart />
      </button>
      <Modal isOpen={isOpenModal} title="Produsul a fost adăugat în coș ">
        <PopupCart />
      </Modal>
    </>
  );
}

export default CartButton;
