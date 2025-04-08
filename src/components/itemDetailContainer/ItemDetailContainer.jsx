import { useLocation, useParams, Link } from "react-router-dom";
import { useState } from "react";
import { useCart } from '../../context/CartContext'; 
import styles from "./ItemDetailContainer.module.css";
import ItemCount from "../itemCount/ItemCount";

const ItemDetailContainer = () => {
  const { id } = useParams(); 
  const { state } = useLocation();
  const { addItem } = useCart(); 

  const product = state?.product;
  const [itemsAgregados, setItemsAgregados] = useState(0);

  if (!product) return <div>No se encontró el producto.</div>;

  const handleAdd = (cantidad) => {
    setItemsAgregados(cantidad);
    addItem(product, cantidad); 
  };

  return (
    <div className={styles.detailContainer}>
      <div className={styles.cardDetail}>
        <div className={styles.cardImage}>
          <img src={product.imageId} alt={product.title} />
        </div>

        <div className={styles.cardContent}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p className={styles.productPrice}>Precio: ${product.price}</p>

          {itemsAgregados === 0 ? (
            <ItemCount
              stock={product.stock}
              initial={1}
              onAdd={handleAdd}
            />
          ) : (
            <Link to="/cart">
              <button className={styles.addToCart}>Terminar mi compra</button>
            </Link>
          )}

          <div className={styles.stockInfo}>Stock: {product.stock}</div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailContainer;

