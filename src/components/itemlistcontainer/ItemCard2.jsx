import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ItemListContainer.module.css"; 

const ItemCard = ({ product }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/detail/${product.id}`, { state: { product } });
  };

  return (
    <div className={styles.card}>
      {product.imageId && (
        <img
          src={product.imageId}
          alt={`Imagen de ${product.title}`}
          className={styles.productImage}
        />
      )}
      <h3>{product.title}</h3>
      <p className={styles.price}>${product.price}</p>
      <button className={styles.viewMoreBtn} onClick={handleViewDetails}>
        Ver detalles
      </button>
      <div className={styles.stockInfo}>Stock: {product.stock}</div>
    </div>
  );
};

export default ItemCard;
