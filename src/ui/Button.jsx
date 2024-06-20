import styles from "./Button.module.css";

function Button({ text, onClick }) {
  return (
    <div className={styles.button} onClick={onClick}>
      <img className={styles.buttonFrame} src="public/Images/buttonFrame.png" />
      <div className={styles.honeycombCell}>
        <span className={styles.buttonText}>{text}</span>
      </div>
    </div>
  );
}

export default Button;
