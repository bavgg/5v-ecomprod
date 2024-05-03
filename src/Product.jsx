import Minus from '/images/icon-minus.svg'
import Plus from '/images/icon-plus.svg'

import ImageSlider from "./ImageSlider"
import CartModal from './CartModal'

import Product1 from '/images/image-product-1.jpg'
import Product2 from '/images/image-product-2.jpg'
import Product3 from '/images/image-product-3.jpg'
import Product4 from '/images/image-product-4.jpg'
import { useContext, useState } from 'react'

const images = [{ url: Product1, alt: "Product 1" }, { url: Product2, alt: "Product 2" }, { url: Product3, alt: "Product 3" }, { url: Product4, alt: "Product 4" },]
const imageUrls = [Product1, Product2, Product3, Product4]

import { CartProductsContext } from './CartProductsContext'

function Product({ product, setCartModal, setImageSlider }) {
  const [qty, setQty] = useState(0);


  const { addCartProducts } = useContext(CartProductsContext);

  function handleAddCart() {
    const productToCart = {
      id: product.id,
      name: product.name,
      price: product.price * product.discount,
      qty: qty,

    }
    setQty(0);
    if (qty > 0) {
      addCartProducts(productToCart);
    }



  }




  return (
    <main id='product-main' onClick={() => setCartModal(false)}>




      <ImageSlider setImageSlider={setImageSlider} images={imageUrls} />

      <div id="wrapper-2" className="flex flex-col gap-3 p-[20px]">
        <p className="tracking-[1.5px] text-[12px] font-[var(--bold)] text-[var(--orange)]">SNEAKER COMPANY</p>

        <h1 id='product-name' className="text-[var(--very-dark-blue)] leading-[1.2] font-[var(--bold)] text-[1.75rem]">{product.name}</h1>

        <p className=" pb-[8px] text-[var(--dark-grayish-blue)] text-[14px] font-[var(--regular)]">
          {product.description}
        </p>

        <div className=" flex gap-4 items-center mb-2">
          <h1 className="text-[var(--very-dark-blue)] leading-[1.2] font-[var(--bold)] text-[1.75rem]">{'$' + (product.price * product.discount) + '.00'}</h1>
          <div className="px-[6px] bg-[var(--pale-orange)] text-[var(--orange)] font-[var(--bold)] rounded-[6px] mr-auto">50%</div>
          <span className="relative strikethrough text-[14px] font-[700] text-[var(--grayish-blue)]">{'$' + product.price + '.00'}</span>
        </div>


        <div id='bottom-btn' className=' flex flex-col gap-3' >
          <div id='plusminus-btn' className='flex justify-between items-center bg-[var(--light-grayish-blue)] rounded-[8px] p-[12px]'>
            <div onClick={() => setQty((prevQty) => {
              if(prevQty > 0){
                return prevQty - 1
              }else {
                return 0;
              }
            })} className='cursor-pointer flex items-center justify-center h-[22px] w-[22px]'>
              <img className='  h-[4px] w-[12px]' src={Minus} />
            </div>

            <div className=' outline-none font-[700] bg-[var(--light-grayish-blue)]' >{qty}</div>
            <div onClick={() => setQty(prevQty => prevQty + 1)} className='cursor-pointer flex items-center justify-center h-[22px] w-[22px]'>
              <img className='  h-[12px] w-[12px]' src={Plus} />
            </div>


          </div>

          <div id='addcart-btn' onClick={handleAddCart} className=' cursor-pointer flex  justify-center gap-4 items-center rounded-[12px] bg-[var(--orange)] p-[14px]'>
            <svg className='fill-[var(--light-grayish-blue)]' width="18" height="16" viewBox="0 0 22 20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#ffffff" fillRule="nonzero" /></svg>
            <span className='text-[var(--light-grayish-blue)] text-[14px] font-[700]'>Add to cart</span>
          </div>
        </div>



      </div>





    </main>
  )
}

export default Product
