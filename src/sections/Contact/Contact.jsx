import { faBell } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Button from "../../ui/Button";
import styles from "./Contact.module.css";

function Contact() {
  const [mail, setMail] = useState("");

  function handleSubscribe() {
    setMail("");
  }

  function handleChange(e) {
    setMail(e.target.value);
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.separator}>
          <span></span>
          <h2 className={styles.title}>
            Subscribe To Our Newsletter, Discounts And Promotions
          </h2>
          <span></span>
        </div>

        <div className={styles.inputContainer}>
          <FontAwesomeIcon className={styles.icon} icon={faBell} />
          <input
            value={mail}
            onChange={handleChange}
            type="text"
            placeholder="Your Email Address"
          />
        </div>

        <Button text="Subscribe" onClick={handleSubscribe} />
      </div>
    </section>
  );
}

export default Contact;
