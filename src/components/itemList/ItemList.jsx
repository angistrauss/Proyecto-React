import React from "react";
import ItemCard from "../itemlistcontainer/ItemCard2";

const ItemList = ({ productos }) => {
  return (
    <>
      {productos.map((product) => (
        <ItemCard key={product.id} product={product} />
      ))}
    </>
  );
};

export default ItemList;
