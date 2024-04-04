import { useEffect, useState } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { BiBarcode, BiUserPin } from "react-icons/bi";
import { FaRegEdit } from "react-icons/fa";
import { GoBook } from "react-icons/go";
import { IoBookOutline } from "react-icons/io5";
import styles from "./styles.module.css";
import booksApi from "../../../../api/modules/books";
import { toast } from "react-toastify";

function BookAttributes({ bookName, bookId }) {
  const [attributes, setAttributes] = useState([]);

  const icons = [
    { attributeId: 202, icon: <IoBookOutline /> },
    { attributeId: 367, icon: <GoBook /> },
    { attributeId: 2619, icon: <FaRegEdit /> },
    { attributeId: 2622, icon: <BiUserPin /> },
    { attributeId: 2640, icon: <AiOutlineCalendar /> },
    { attributeId: 0, icon: <BiBarcode /> },
  ];

  function getAttrIconById(icons, attributeId) {
    const myIcon = icons.find((icon) => icon.attributeId === attributeId);
    return myIcon?.icon;
  }

  useEffect(() => {
    const fetchData = async () => {
      const { response, err } = await booksApi.getAttributes({ bookId });
      if (response) {
        setAttributes(response.attributes);
      }
      if (err) {
        toast.error(err.errorMessage);
      }
    };
    fetchData();
  }, [bookId]);

  return (
    <>
      {attributes.length > 0 && (
        <div className={styles.container}>
          <h2>Specificații {bookName}</h2>
          <div className={styles.productDetails}>
            {attributes?.map((attr) => (
              <div
                className={styles.productDetailsIteam}
                key={attr.attributeId}
              >
                <div className={styles.productDetailsIteamTop}>{attr.name}</div>
                <div className={styles.productDetailsIteamMiddle}>
                  {getAttrIconById(icons, attr.attributeId)}
                </div>
                {attr.value.map((el, index) => (
                  <div className={styles.productDetailsIteamBottom} key={index}>
                    {el.name}
                    {index < attr.value.length - 1 && ", "}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default BookAttributes;
