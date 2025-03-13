import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard2.jsx";
import styles from "./ItemListContainer.module.css";


const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const filteredProducts = data.filter((product) => 
          product.category.toLowerCase().includes("electronics")
        );

        const productsWithStock = filteredProducts.map((product) => ({
          ...product,
          stock: Math.floor(Math.random() * 46) + 5, 
        }));

        setProducts(productsWithStock);
      })
      .catch((error) => console.error("Error al cargar productos:", error));
  }, []);

  return (
    <div className={styles.productGallery}>
      {products.length > 0 ? (
        products.map((product) => (
          <ItemCard key={product.id} product={product} />
        ))
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default ItemListContainer;
