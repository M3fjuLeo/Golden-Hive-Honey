import styles from "./ProductCard.module.css";
import Button from "../../ui/Button";

function ProductCard({ product }) {
  return (
    <div className={styles.contentContainer}>
      <div className={styles.imgContainer}>
        <img src="/Images/jar.png" alt="" />
        <h3>{product.name}</h3>
      </div>

      <div className={styles.descriptionContainer}>
        <p>
          <span>Flavour : </span>Fireweed honey has a delicate, sweet flavor
          with subtle floral notes. It has a smooth and creamy texture that
          melts in your mouth.
          <br />
          <span>Health Benefits :</span> Fireweed honey is rich in antioxidants,
          vitamins, and minerals. It has antibacterial and anti-inflammatory
          properties, making it a natural remedy for sore throats, coughs, and
          colds.
        </p>

        <div className={styles.aboutDescriptionContainer}>
          <div className={styles.sizeContainer}>
            <span>Size :</span>
            <div className={styles.jarContainer}>
              <img className={styles.jar1} src="/Images/big-jar.png" alt="" />
              <img className={styles.jar2} src="/Images/big-jar.png" alt="" />
              <img className={styles.jar3} src="/Images/big-jar.png" alt="" />
            </div>
          </div>

          <span className={styles.separator}></span>

          <div className={styles.informations}>
            <p>
              <span>Color : </span> Amber
            </p>
            <p>
              <span>Region : </span> Forest Areas Of India
            </p>
            <p>
              <span>Price : </span> {product.price}
            </p>
          </div>

          <Button text="Add To Cart" />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
