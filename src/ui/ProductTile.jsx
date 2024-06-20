import styles from "./ProductTile.module.css";

function ProductTile({ text, mainImg }) {
  return (
    <div className={styles.productContainer}>
      <img className={styles.bgImg} src="/Images/Polygon.png" alt="" />
      <img className={styles.mainImg} src={mainImg} alt="" />
      <h2 className={styles.description}>{text}</h2>
    </div>
  );
}

export default ProductTile;
