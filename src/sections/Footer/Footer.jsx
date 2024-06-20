import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import styles from "./Footer.module.css";
import MediaLink from "../../ui/MediaLink";

function Footer() {
  return (
    <section id="footer" className={styles.footer}>
      <div>
        <div>
          <div className={styles.linksContainer}>
            <ul>
              <li>
                <span>About</span>
              </li>
              <li>Products</li>
              <li>About Us</li>
              <li>FAQ</li>
            </ul>

            <ul>
              <li>
                <span>Services</span>
              </li>
              <li>Terms Of Services</li>
              <li>Privacy Policy</li>
              <li>Store</li>
            </ul>

            <ul>
              <li>
                <span>Help Center</span>
              </li>
              <li>Return</li>
              <li>Purches Us</li>
            </ul>

            <ul>
              <li>
                <span>Contact Us</span>
              </li>
              <li>Email</li>
              <li>Phone Us</li>
              <li>Address</li>
            </ul>
          </div>

          <div className={styles.mediasContainer}>
            <MediaLink
              to="https://www.linkedin.com/in/mateusz-ropek-45b782258/"
              icon={faLinkedinIn}
            />{" "}
            <MediaLink to="https://github.com/M3fjuLeo" icon={faGithub} />
            <MediaLink to="" icon={faFacebook} />
          </div>

          <div className={styles.logo}>
            <img src="/Images/logo.png" alt="" />
            <h3>Golden Hive Honey</h3>
          </div>

          <p className={styles.copyrights}>
            Designed By Elinaui9 <br />
            Copyright © 2023 Golden Hive Honey. All Rights Reserved.
          </p>
        </div>
        <img className={styles.footerImg} src="/Images/footerpic.png" alt="" />
      </div>
    </section>
  );
}

export default Footer;
