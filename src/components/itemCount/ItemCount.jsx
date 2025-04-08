import { useState } from "react";
import styles from "./ItemCount.module.css";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increaseQuantity = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleInputChange = (e) => {
    let value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 1 && value <= stock) {
      setQuantity(value);
    } else if (value < 1) {
      setQuantity(1);
    } else if (value > stock) {
      setQuantity(stock);
    }
  };

  return (
    <div className={styles.counterContainer}>
      <button className={styles.counterBtn} onClick={decreaseQuantity}>−</button>
      <input
        className={styles.counterInput}
        type="number"
        value={quantity}
        onChange={handleInputChange}
      />
      <button className={styles.counterBtn} onClick={increaseQuantity}>+</button>
      <button className={styles.addToCart} onClick={() => onAdd(quantity)}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
