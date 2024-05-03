import Logo from '/images/logo.svg'
import Menu from '/images/icon-menu.svg'
import Cart from '/images/icon-cart.svg'
import Close from '/images/icon-close.svg'
import Avatar from '/images/image-avatar.png'

import { CartProductsContext } from './CartProductsContext'
import { useState } from 'react'
import { useContext } from 'react'

function Header({ setCartModal }) {
  const { products } = useContext(CartProductsContext);
  let totalQty = 0;
  products.map((product) => {
    totalQty += product.qty;
  })
  return (
    <>
      <header id='header' className='flex items-center gap-4 px-5 h-[64px]'>


        <input type='checkbox' id='check' />
        <label htmlFor='check' >
          <img id='menu' className=' cursor-pointer' src={Menu} />
        </label>

        <img id='logo' className='mr-auto' src={Logo} />


        <div id='wrapper'>
          <label htmlFor='check' >
            <div id='overlay' className=' z-[1] inset-0 absolute bg-[rgba(0,0,0,0.75)]'></div>
          </label>

          <nav id='navbar' className=' z-[2] p-[20px] absolute left-0 top-0 h-[100vh] flex flex-col bg-white w-[220px] text-[var()] font-[var(--bold)]'>

            <label id='close' htmlFor='check' >
              <img className=' cursor-pointer w-[14px] h-[15px] mb-[32px]' src={Close} />
            </label>


            <div id='navlinks' className='flex flex-col gap-6'>
              <div>
                Collections
              </div>
              <div>
                Men
              </div>
              <div>
                Women
              </div>
              <div>
                About
              </div>
              <div>
                Contact
              </div>
            </div>
          </nav>
        </div>



        <div className='relative'>
          {
            totalQty > 0 && (
              <div className=' top-[-4px] right-[-3px] absolute flex items-center justify-center bg-[var(--orange)] px-[6px] text-[var(--light-grayish-blue)] text-[8px] rounded-[8px] font-[700]'>
                {totalQty}
              </div>
            )

          }

          <svg onClick={() => setCartModal((current) => {
            return !current
          })} className=' cursor-pointer ' width="22" height="20" viewBox="0 0 22 20" xmlns="http://www.w3.org/2000/svg"><path className='fill-[var(--very-dark-blue)]' d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fill-rule="nonzero" /></svg>

        </div>

        <img className=' mr-[1rem] h-6 w-6' src={Avatar} />
      </header>
      <hr id='hr' className=' mx-[36px]'/>
    </>

  )
}

export default Header
