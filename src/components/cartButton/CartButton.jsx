import styles from "./styles.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
function CartButton() {
  return (
    <span className={styles.wrap}>
      <AiOutlineShoppingCart />
    </span>
  );
}

export default CartButton;
