import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-scroll";
import Button from "../../ui/Button";
import Ul from "../../ui/Ul";
import styles from "./Navbar.module.css";

function Navbar() {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  const [hamburgerContainer, setHamburgerContainer] = useState(false);

  useEffect(() => {
    function handleResize() {
      const screenWidth = window.innerWidth;
      setHamburgerMenu(screenWidth < 1000);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleHamburgerMenu() {
    setHamburgerContainer((prevState) => !prevState);
  }

  return (
    <>
      {hamburgerContainer ? (
        <div className={styles.hamburgerMenuContainer}>
          <Ul
            hamburgerContainer={hamburgerContainer}
            handleHamburgerMenu={handleHamburgerMenu}
          />
        </div>
      ) : (
        <nav>
          <Link to="home" duration={500} smooth={true}>
            <h3 className={styles.title}>Golden Hive Honey</h3>
          </Link>
          {hamburgerMenu ? (
            <Button text="Menu" onClick={handleHamburgerMenu} />
          ) : (
            <div className={styles.frameDiv}>
              <img className={styles.frame} src="/Images/frame.png" alt="" />
              <Ul />
            </div>
          )}

          <div className={styles.buttonsContainer}>
            <Button text="Sign In" />
            <Button text="Sign Up" />
          </div>
        </nav>
      )}
    </>
  );
}

export default Navbar;
