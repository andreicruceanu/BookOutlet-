import styles from "./stylesBadges.module.css";
function Badges({ badges }) {
  return (
    <div className={styles.badgesWrap}>
      {badges?.map((iteam) => (
        <div className={styles.badge} key={iteam.id}>
          <p className={styles.badgeText}>{iteam.displayName}</p>
        </div>
      ))}
    </div>
  );
}

export default Badges;
