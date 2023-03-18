import styles from "./styles.module.css";
import EasyBoxImg from "../../images/easybox-banner.jpg";
import { AiOutlineClose } from "react-icons/ai";
function ModalEasyBox({ open, onClose }) {
  if (!open) return null;
  return (
    <div className={styles.overlay}>
      <div className={styles.containerModal}>
        <div className={styles.wrapImg}>
          <img src={EasyBoxImg} alt="easybox" />
          <AiOutlineClose className={styles.closeIcon} onClick={onClose} />
        </div>
        <div className={styles.text}>
          <h2>Livrări comenzi prin Easybox</h2>
          <p>
            Plasează comanda și noi o livrăm la un Easybox apropiat de tine.
            Poți să ridici comanda non-stop din momentul în care primești
            notificarea că Easybox-ul a fost alimentat.
          </p>
          <p>
            Coletul tău te așteaptă în Easybox până la 36 de ore în timpul
            săptămânii și până la 72 ore în week-end.
          </p>
          <h2>Cum funcționează?</h2>
          <p>
            În ziua în care comanda ta ajunge la Easybox, primești un SMS cu un
            cod PIN și un e-mail cu un QR code cu care poți deschide Easybox-ul.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ModalEasyBox;
