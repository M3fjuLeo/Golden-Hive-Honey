import { Link } from "react-scroll";
import styles from "./Ul.module.css";

function Ul({ hamburgerContainer, handleHamburgerMenu }) {
  return (
    <ul
      className={`${styles.menu} ${
        hamburgerContainer ? styles.hamburgerMenu : styles.menu
      }`}
    >
      <Link
        className={styles.link}
        onClick={handleHamburgerMenu}
        to="home"
        smooth={true}
        duration={500}
      >
        Home
      </Link>
      <Link
        onClick={handleHamburgerMenu}
        className={styles.link}
        to="about"
        smooth={true}
        duration={500}
      >
        About Us
      </Link>
      <Link
        onClick={handleHamburgerMenu}
        className={styles.link}
        to="products"
        smooth={true}
        duration={500}
      >
        Products
      </Link>
      {/* <Link className={styles.link} to="gallery" smooth={true} duration={500}>
        Gallery
      </Link> */}
      <Link
        onClick={handleHamburgerMenu}
        className={styles.link}
        to="contact"
        smooth={true}
        duration={500}
      >
        Contact
      </Link>
    </ul>
  );
}

export default Ul;
