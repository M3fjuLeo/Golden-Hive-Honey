import ProductTile from "../../ui/ProductTile";
import Separator from "../../ui/Separator";
import styles from "./Products.module.css";

function Products() {
  return (
    <section id="products" className={styles.products}>
      <Separator text="Products" />
      <div className={styles.container}>
        <ProductTile text="honey" mainImg="/Images/Product1.png" />
        <ProductTile text="baked goods" mainImg="/Images/Product2.png" />
        <ProductTile text="honey" mainImg="/Images/Product3.png" />
        <ProductTile text="honey flake" mainImg="/Images/Product4.png" />
        <ProductTile text="syrup" mainImg="/Images/Product5.png" />
        <ProductTile text="pollen" mainImg="/Images/Product6.png" />
        <ProductTile text="beeswax" mainImg="/Images/Product7.png" />
      </div>
    </section>
  );
}

export default Products;
