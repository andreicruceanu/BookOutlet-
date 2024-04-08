import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";
import React from "react";
import styles from "./styles.module.css";
import ModalMyAccount from "../../modal-my-account/modal-my-account";
import ModalWish from "../../modal-wish/modal-wish";
import { useSelector } from "react-redux";
import { ACTIONS } from "../../../constants/actions";

function Action(props) {
  const { icon, name, arrow, href, link, action } = props;

  const [openModalMyAccount, setOpenModalMyAccount] = useState(false);
  const [openModalWish, setOpenModalWish] = useState(false);
  const { listFavorite } = useSelector((state) => state.auth);
  const { cart } = useSelector((state) => state.cart);

  const totalQuantity = cart
    ? cart.reduce((total, item) => Number(total) + Number(item.quantity), 0)
    : 0;

  return (
    <div className={styles.container}>
      {link ? (
        <Link to={href} className={styles.actionLink}>
          {icon}
          {totalQuantity > 0 && (
            <span className={styles.navNotificationCart}>{totalQuantity}</span>
          )}
          <div className={styles.actionLinkText}>
            <span>{name}</span>
          </div>
        </Link>
      ) : (
        <button
          onClick={
            action === ACTIONS.myAccount
              ? () => setOpenModalMyAccount(true)
              : () => setOpenModalWish(true)
          }
          className={`${styles.actionBtn}`}
        >
          <div className={styles.actionIcon}>
            {icon}
            {action === ACTIONS.favorites && listFavorite?.length > 0 && (
              <span className={styles.navNotificationFavorite}>
                {listFavorite.length}
              </span>
            )}
          </div>
          <div className={styles.actionBtnText}>
            <span>{name}</span>
            {arrow && <MdKeyboardArrowDown className={styles.iconArrowDown} />}
          </div>
        </button>
      )}
      {openModalMyAccount && (
        <ModalMyAccount onClose={() => setOpenModalMyAccount(false)} />
      )}
      {openModalWish && <ModalWish onClose={() => setOpenModalWish(false)} />}
    </div>
  );
}

export default Action;
