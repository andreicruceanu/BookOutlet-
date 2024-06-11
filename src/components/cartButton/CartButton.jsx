import styles from "./styles.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";

function CartButton({ addToCart }) {
  return (
    <>
      <button className={styles.btnCart} onClick={addToCart}>
        <AiOutlineShoppingCart />
      </button>
    </>
  );
}

export default CartButton;
