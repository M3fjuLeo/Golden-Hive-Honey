import styles from "./Shop.module.css";
import Separator from "../../ui/Separator";
import ProductCard from "./ProductCard";
import { useState } from "react";

const products = [
  { id: 1, name: "Fireweed Blossom Honey", price: "$100" },
  { id: 2, name: "Product 2", price: "$200" },
  { id: 3, name: "Product 3", price: "$300" },
  { id: 4, name: "Product 4", price: "$400" },
  { id: 5, name: "Product 5", price: "$500" },
];

function Shop() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="shop" className={styles.shop}>
      <Separator text="Shop" />

      <div className={styles.container}>
        <ProductCard
          key={products[currentIndex].id}
          product={products[currentIndex]}
        />

        <div className={styles.dots}>
          {products.map((_, index) => (
            <div
              key={index}
              className={currentIndex === index ? styles.activeDot : styles.dot}
              onClick={() => handleDotClick(index)}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Shop;
