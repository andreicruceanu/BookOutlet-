import { FaPhoneAlt, FaTruck, FaUsers } from "react-icons/fa";
import styles from "./styles.module.css";
import content from "../../../../constants/content";
import EasyboxImg from "../../../../images/easybox-square.jpg";
import { useState } from "react";
import ModalEasyBox from "../../../../components/modal-EasyBox/ModalEasyBox";
import { IoInformationCircleSharp } from "react-icons/io5";

const InfoDelivery = () => {
  const [isOpen, setIsOpen] = useState(false);

  const data = [
    {
      icon: <FaPhoneAlt />,
      title: content.phoneOrder,
      subtitle: content.numberOrder,
      program: content.storeProgram,
      isImage: false,
    },
    {
      icon: <FaTruck />,
      title: content.shippingRomania,
      subtitle: content.shippingDays,
      isImage: false,
      color: "green",
    },
    {
      icon: EasyboxImg,
      title: content.shippingEasybox,
      subtitle: content.shippingDays,
      isImage: true,
      iconInfo: true,
      color: "green",
    },
    {
      icon: <FaUsers />,
      title: `${Math.floor(Math.random() * 19) + 2} ${content.numberPeople}`,
      subtitle: content.hurry,
      isImage: false,
      colorTitle: "red bold",
    },
  ];

  return (
    <>
      <div className={styles.infoDeliveryWrap}>
        {data.map((item, index) => (
          <div key={index} className={styles.infoDeliveryIteam}>
            {item.isImage ? (
              <>
                <img className={styles.easyBoxImg} src={item.icon} alt="Icon" />
                <div className={styles.infoWrap}>
                  <p className={styles.title} onClick={() => setIsOpen(true)}>
                    {item.title}
                    <span>
                      <IoInformationCircleSharp />
                    </span>
                  </p>
                  <p className={`${styles.subtitle} ${[item?.color]}`}>
                    {item.subtitle}
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className={styles.iconContainer}>{item.icon}</div>
                <div className={styles.infoWrap}>
                  <p className={item?.colorTitle}>{item.title}</p>
                  <p className={`${styles.subtitle} ${[item?.color]}`}>
                    {item.subtitle}
                  </p>
                </div>
                {item?.program && (
                  <span className={styles.infoProgram}>
                    <p>{item.program}</p>
                  </span>
                )}
              </>
            )}
          </div>
        ))}
      </div>
      <ModalEasyBox open={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default InfoDelivery;
