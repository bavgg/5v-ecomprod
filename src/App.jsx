import Header from "./Header"
import Product from "./Product"
import CartModal from "./CartModal"
import ImageSliderModal from "./ImageSliderModal"

import Product1 from '/images/image-product-1.jpg'
import Product2 from '/images/image-product-2.jpg'
import Product3 from '/images/image-product-3.jpg'
import Product4 from '/images/image-product-4.jpg'

import { HashRouter, Routes, Route } from "react-router-dom"
import { useEffect } from "react"

const imageUrls = [Product1, Product2, Product3, Product4]
const PRODUCT1 = {
  id: 1,
  name: "Fall Limited Edition Sneakers",
  description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
  price: 250,
  discount: 0.5,
}
  
import { CartProductsProvider } from "./CartProductsContext"
import { useState } from "react"
function App() {
  const [cartModal, setCartModal] = useState(false);
  const [imageSlider, setImageSlider] = useState(false);

  useEffect(() => {
    const body = document.querySelector('body');
    if (imageSlider) {
      body.style.overflow = 'hidden'
    } else {
      body.style.overflow = 'auto'
    }
  }, [cartModal]);

  return (
    <div id="all" className=" relative" >


      <CartProductsProvider>
        {
          cartModal && (
            <>
              <div onClick={() => setCartModal(false)} id="bodylike" className=" absolute inset-0"></div>
              <CartModal />
            </>

          )
        }

        {
          imageSlider && (
            <>
              <ImageSliderModal setImageSlider={setImageSlider} images={imageUrls} />
            </>
          )
        }
        <Header setCartModal={setCartModal} />
        <Product setImageSlider={setImageSlider} setCartModal={setCartModal} product={PRODUCT1} />


      </CartProductsProvider>




    </div>
  )
}

export default App
