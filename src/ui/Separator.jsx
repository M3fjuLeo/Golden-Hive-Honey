import styles from "./Separator.module.css";

function Separator({ text }) {
  return (
    <div className={styles.separatorContianer}>
      <img className={styles.beeImg} src="/Images/bee.png" alt="" />
      <h1 className={styles.title}>{text}</h1>
      <span className={styles.line}></span>
    </div>
  );
}

export default Separator;
