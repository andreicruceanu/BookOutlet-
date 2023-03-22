import { useEffect, useRef, useState } from "react";
import styles from "./readMore.module.css";

function ReadMore({ text, maxHeight }) {
  const [myClass, setMyClass] = useState("");
  const divRef = useRef(null);
  const [height, setHeight] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  console.log(typeof text);

  useEffect(() => {
    if (divRef.current.clientHeight > maxHeight) {
      setMyClass("notExpanded");
      setHeight(divRef.current.clientHeight);
    }
  }, []);

  const handleClass = () => {
    setIsExpanded(!isExpanded);
    setMyClass(isExpanded ? "notExpanded" : "");
  };

  return (
    <>
      <div
        ref={divRef}
        className={`${styles.authorText} ${myClass ? styles[myClass] : ""}`}
        dangerouslySetInnerHTML={{ __html: text }}
      ></div>
      {!!height && (
        <span className={styles.viewMoreBtn} onClick={handleClass}>
          {isExpanded ? "Vezi mai putin" : "Vezi mai mult"}
        </span>
      )}
    </>
  );
}

export default ReadMore;
