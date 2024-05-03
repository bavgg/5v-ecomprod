
import React, { createContext, useState } from 'react';

export const CartProductsContext = createContext();



export const CartProductsProvider = ({ children }) => {

  // convert the localstorage string array objects into json
  const retrievedString = localStorage.getItem('cartProducts');
  const myArrayAgain = retrievedString !== null &&  retrievedString !== ''? JSON.parse(retrievedString) : [];

  const [products, setProducts] = useState( myArrayAgain);

  const addCartProducts = (newProduct) => {
    setProducts((currentProducts) => {
      const existingCurrentProductIndex = currentProducts.findIndex( cp => cp.id === newProduct.id )
      if(existingCurrentProductIndex !== -1){
        currentProducts[existingCurrentProductIndex].qty += newProduct.qty;

        // convert the array objects into string to save to localstorage
        const jsonString = JSON.stringify([...currentProducts]);

        localStorage.setItem('cartProducts', jsonString)
        return [...currentProducts]
      }else{  
        // convert the array objects into string to save to localstorage
        const jsonString = JSON.stringify([...currentProducts, newProduct]);

        localStorage.setItem('cartProducts', jsonString)
        return [...currentProducts, newProduct];
      }
      
    })
  };

  const cartProductsValue = {
    products,
    addCartProducts,
    setProducts,
  };

  return (
    <CartProductsContext.Provider value={cartProductsValue}>
      {children}
    </CartProductsContext.Provider>
  );
};