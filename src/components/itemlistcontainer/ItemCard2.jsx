import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ItemListContainer.module.css"; 

const ItemCard = ({ product }) => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = (e) => {
    e.stopPropagation();
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = (e) => {
    e.stopPropagation();
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleInputChange = (e) => {
    e.stopPropagation();
    let value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 1 && value <= product.stock) {
      setQuantity(value);
    } else if (value < 1) {
      setQuantity(1);
    } else if (value > product.stock) {
      setQuantity(product.stock);
    }
  };

  return (
    <div className={styles.card} onClick={() => navigate(`/detail/${product.id}`, { state: { product } })}>
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>

      <div className={styles.counterContainer}>
        <button className={styles.counterBtn} onClick={decreaseQuantity}>−</button>
        <input
          className={styles.counterInput}
          type="number"
          value={quantity}
          onChange={handleInputChange} // Permitir ingreso manual
          min="1"
          max={product.stock}
        />
        <button className={styles.counterBtn} onClick={increaseQuantity}>+</button>
      </div>

      <button className={styles.addToCart} onClick={(e) => e.stopPropagation()}>
        Agregar al carrito
      </button>

      <div className={styles.stockInfo}>Stock: {product.stock}</div>
    </div>
  );
};


export default ItemCard;
