import { useLocation, useParams } from "react-router-dom";
import { useState } from "react";
import styles from "./ItemDetailContainer.module.css";


const ItemDetailContainer = () => {
  const { id } = useParams(); 
  const { state } = useLocation(); // Obtenemos el producto desde la navegación

  const product = state?.product; // Accedemos al producto desde el estado
  const [quantity, setQuantity] = useState(1);

  if (!product) return <div>No se encontró el producto.</div>;

  const increaseQuantity = () => {
    if (quantity < product.stock) {
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
    if (!isNaN(value) && value >= 1 && value <= product.stock) {
      setQuantity(value);
    } else if (value < 1) {
      setQuantity(1);
    } else if (value > product.stock) {
      setQuantity(product.stock);
    }
  };

  return (
    <div className={styles.detailContainer}>
      <div className={styles.cardDetail}>
        <div className={styles.cardImage}>
          <img src={product.image} alt={product.title} />
        </div>
  
        <div className={styles.cardContent}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p className={styles.productPrice}>Precio: ${product.price}</p>
  
          <div className={styles.counterContainer}>
            <button className={styles.counterBtn} onClick={decreaseQuantity}>−</button>
            <input className={styles.counterInput} type="number" value={quantity} onChange={handleInputChange} />
            <button className={styles.counterBtn} onClick={increaseQuantity}>+</button>
          </div>
  
          <button className={styles.addToCart}>Agregar al carrito</button>
          <div className={styles.stockInfo}>Stock: {product.stock}</div>
        </div>
      </div>
    </div>
  );
  
};

export default ItemDetailContainer;
