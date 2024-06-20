import Button from "../../ui/Button";
import Separator from "../../ui/Separator";
import styles from "./Beauty.module.css";

function Beauty() {
  return (
    <section id="beauty" className={styles.beauty}>
      <Separator text="Beauty" />

      <div className={styles.container}>
        <div className={styles.descriptionContainer}>
          <p className={styles.description}>
            Honey is not only a delicious treat, but it also has many benefits
            for your skin. At our honey online shop, we offer a wide range of
            beauty products made from honey to help you achieve healthy, radiant
            skin.
          </p>
          <div className={styles.buttonContainer}>
            <Button text="More" />
          </div>
        </div>

        <img className={styles.jarImg} src="/Images/beauty-pic.svg" alt="" />
      </div>
    </section>
  );
}

export default Beauty;
