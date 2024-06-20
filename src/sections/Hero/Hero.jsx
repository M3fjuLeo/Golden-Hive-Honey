import { Link } from "react-scroll";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <section id="home" className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.title}>Golden Hive Honey</h1>
        <img src="/Images/Hero-pic.png" className={styles.heroImg} alt="" />
        <img className={styles.bgImg} src="/Images/Bg-Pic.png" alt="" />
        <Link to="shop" smooth={true} duration={500}>
          <div className={styles.shopButton}>
            <img src="/Images/HeroPolygon.png" alt="" />
            <h2 className={styles.buttonText}>Shop</h2>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default Hero;
