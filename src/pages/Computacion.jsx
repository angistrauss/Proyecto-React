import React, { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import ItemCard from "../components/itemlistcontainer/ItemCard2";
import styles from "../components/itemlistcontainer/ItemListContainer.module.css";


const Computacion = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "products");

    getDocs(itemsCollection).then((snapshot) => {
      const filtered = snapshot.docs
        .map((doc) => ({ id: doc.id, ...doc.data() }))
        .filter((prod) => prod.categoryId === "computacion");

      setProducts(filtered);
    });
  }, []);

  return (
    <div className={styles.productGallery}>
      {products.length > 0 ? (
        products.map((product) => (
          <ItemCard key={product.id} product={product} />
        ))
      ) : (
        <p className={styles.loading}>Cargando...</p>
      )}
    </div>
  );
};

export default Computacion;
