import React, { useState, useEffect } from "react";
import ItemList from "../itemList/ItemList";
import styles from "./ItemListContainer.module.css";
import { useParams } from "react-router-dom";
import { getDocs, collection, query } from "firebase/firestore";
import { db } from "../../firebase/client";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const q = query(collection(db, "products"));
        const querySnapshot = await getDocs(q);
        const dataFiltrada = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        const finalData = categoryId
          ? dataFiltrada.filter(
              (prod) =>
                prod.category &&
                prod.category.toLowerCase() === categoryId.toLowerCase()
            )
          : dataFiltrada;

        setProducts(finalData);
      } catch (error) {
        console.error("Error obteniendo productos:", error);
      }
    };

    getProducts();
  }, [categoryId]);

  return (
    <div className={styles.productGallery}>
      {products.length > 0 ? (
        <ItemList productos={products} />
      ) : (
        <p className={styles.loading}>Cargando...</p>
      )}
    </div>
  );
};

export default ItemListContainer;
