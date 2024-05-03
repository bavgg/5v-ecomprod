import React, { useContext } from 'react'

import { CartProductsContext } from './CartProductsContext'

import Thumbnail1 from '/images/image-product-1-thumbnail.jpg'
import Delete from '/images/icon-delete.svg'

function CartModal() {
  const { products, setProducts } = useContext(CartProductsContext);

  function handleDeleteItems(id) {
    const productsCopy = [...products]
    // console.log(productsCopy)
    const indexToRemove = productsCopy.findIndex(p => p.id === id)

    productsCopy.splice(indexToRemove, 1);
    setProducts(productsCopy);



    localStorage.setItem('cartProducts', productsCopy);
  }
  return (

    <div id='cart-section' className='  z-50 shadow-[0_5px_40px_rgba(0,0,0,.4)] flex flex-col top-[74px] left-[10px] right-[10px] absolute bg-white rounded-[8px]  '>
      <h1 className=' m-[16px] font-[700]'>Cart</h1>
      <hr />
      {
        products.length === 0 && (
          <div className=' flex items-center justify-center h-[124px]'>
            <p className='text-[var(--dark-grayish-blue)] text-[15px] font-[700]'>Your cart is empty.</p>
          </div>

        )
      }


      {
        products.map((product) => (
          <div>
            <hr />
            <div className='text-[14px] font-[500] text-[var(--dark-grayish-blue)] p-[20px] flex gap-[14px] items-center'>
              <img className=' rounded-[4px] w-[44px] h-[44px]' src={Thumbnail1} />
              <div className='mr-auto'>
                <p>{product.name}</p>
                <p>${product.price} x {product.qty} <span className='text-[var(--black)] font-[700]'>${product.price * product.qty}</span></p>
              </div>
              <img onClick={() => handleDeleteItems(product.id)} className=' cursor-pointer' src={Delete} />
            </div>

          </div>
        ))

      }
      <div className='text-[var(--light-grayish-blue)] m-[20px] mt-0 cursor-pointer flex  justify-center gap-4 items-center rounded-[12px] bg-[var(--orange)] p-[14px]'>
        <span className=' text-[14px] font-[700]'>Checkout</span>
      </div>



    </div>


  )
}

export default CartModal
