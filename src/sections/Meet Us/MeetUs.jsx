import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Separator from "../../ui/Separator";
import styles from "./MeetUs.module.css";

function MeetUs() {
  return (
    <section id="meet us">
      <Separator text="Meetu Us" />

      <div className={styles.container}>
        <div className={styles.descriptionContainer}>
          <h2>The Arto Of Beekeeping</h2>
          <h3>The Arto Of Beekeeping</h3>
          <p>
            We invite you to join us on a virtual tour of our honey farm to see
            firsthand how we produce our premium honey. Our video showcases the
            daily work of our beekeepers and the care they give to our bees.
            You'll see how we carefully harvest the honey, ensuring that our
            bees are not harmed and that our honey is of the highest quality.{" "}
          </p>
        </div>

        <div className={styles.videoContainer}>
          <img className={styles.img} src="/Images/video-pic.png" alt="" />
          <span className={styles.playIcon}>
            <FontAwesomeIcon className={styles.arrowIcon} icon={faPlay} />
          </span>
        </div>
      </div>
    </section>
  );
}

export default MeetUs;
