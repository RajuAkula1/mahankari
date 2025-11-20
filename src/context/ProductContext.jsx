import React, { createContext, useContext, useState } from "react";
import * as allproductsData from "../components/ProductsData";

const ProductContext = createContext();

const fabrics = [
  "Chennur Silk",
  "Kota Doriya",
  "MulMul Cotton",
  "120 Count Pure Cotton",
  "Bengal Soft Cotton",
  "Kota Cotton",
];

export const ProductProvider = ({ children }) => {
  const [productsData, setProductsData] = useState(allproductsData);
  const [isRangeSelected, setIsRangeSelected] = useState({
    rangeSelected: false,
    selectedRanges: [],
  });

  return (
    <ProductContext.Provider
      value={{
        productsData,
        setProductsData,
        fabrics,
        isRangeSelected,
        setIsRangeSelected,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
