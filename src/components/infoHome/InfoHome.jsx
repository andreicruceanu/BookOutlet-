import { API_URL_IMG } from "../../api/api-img";
import styles from "./styles.module.css";

const iteams = [
  {
    imgSrc: "/infoDetails/livrare-internationala.svg",
    name: "Livrare internațională",
    textHover: "Cărțile ajung oriunde în lume",
  },
  {
    imgSrc: "/infoDetails/dovada-calitatii.svg",
    name: "Dovada calității",
    textHover: "Peste 300.000 de clienți mulțumiți",
  },
  {
    imgSrc: "/infoDetails/platesti-in-siguranta.svg",
    name: "Plătești în siguranță",
    textHover: "Comunicaţii securizate prin SSL",
  },
  {
    imgSrc: "/infoDetails/ajutori-prin-telefon.svg",
    name: "Ajutor prin telefon",
    textHover: "De luni până vineri 08:30 - 17:30",
  },
  {
    imgSrc: "/infoDetails/30-zile-retur.svg",
    name: "Retur în 30 zile",
    textHover: "De la data primirii produselor",
  },
];

function InfoHome() {
  return (
    <div className={styles.container}>
      <div className={styles.infoWrap}>
        {iteams.map((el, i) => (
          <div className={styles.infoIteam} key={i}>
            <img
              width={60}
              height={60}
              src={`${API_URL_IMG}/${el.imgSrc}`}
              alt={el.name}
            />
            <div className={styles.textWrap}>
              <p className={styles.title}>{el.name}</p>
              <div className={styles.hoverWrap}>
                <img
                  src={`${API_URL_IMG}/infoDetails/triangle.png`}
                  alt="triangle"
                />
                <div className={styles.hoverText}>
                  <p>{el.textHover}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default InfoHome;
