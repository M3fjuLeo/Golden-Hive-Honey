import styles from "./MediaLink.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MediaLink({ to, icon }) {
  return (
    <a href={to} className={styles.mediaLink}>
      <img src="/Images/mediaPolygon.png" alt="" />
      <FontAwesomeIcon icon={icon} className={styles.icon} />
    </a>
  );
}

export default MediaLink;
