import Separator from "../../ui/Separator";
import styles from "./About.module.css";
import Button from "../../ui/Button";

function About() {
  return (
    <section id="about" className={styles.about}>
      <Separator text="About us" />

      <div className={styles.container}>
        <div className={styles.descriptionContainer}>
          <p className={styles.desription}>
            At Golden Hive Honey, we are passionate about providing our
            customers with the finest quality honey products straight from our
            beekeeping farms. Our journey began years ago when our founders, a
            group of dedicated beekeepers, set out to create a company that not
            only provides exceptional honey but also supports sustainable
            beekeeping practices.
          </p>
          <div className={styles.buttonContainer}>
            <Button text="More" />
          </div>
        </div>

        <div className={styles.imagesContainer}>
          <img className={styles.bg} src="public/Images/about-bg.png" alt="" />
          <img className={styles.light} src="public/Images/light.png" alt="" />
          <img
            className={styles.bee}
            src="public/Images/about-bee.png"
            alt=""
          />
          <img
            className={styles.jar}
            src="public/Images/about-jar.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default About;
