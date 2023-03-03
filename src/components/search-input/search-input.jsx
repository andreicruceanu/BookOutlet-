import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { MdOutlineClear } from "react-icons/md";
import styles from "./styles.module.css";

function SearchInput() {
  const [title, setTitle] = useState("");

  return (
    <form className={styles.form}>
      <div className={styles.wrapper}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          id="title"
          name="title"
          type="text"
          className={styles.input}
          placeholder="Cauta un titlu aici"
        />
      </div>
      <div className={styles.actions}>
        {title.length > 0 && (
          <button className={styles.clearIcon}>
            <MdOutlineClear onClick={() => setTitle("")} />
          </button>
        )}
        <button type="submit" className={styles.searchIcon}>
          <CiSearch />
        </button>
      </div>
    </form>
  );
}

export default SearchInput;
