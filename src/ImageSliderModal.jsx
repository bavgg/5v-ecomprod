

import { useState } from "react"

import Thumbnail1 from '/images/image-product-1-thumbnail.jpg'
import Thumbnail2 from '/images/image-product-2-thumbnail.jpg'
import Thumbnail3 from '/images/image-product-3-thumbnail.jpg'
import Thumbnail4 from '/images/image-product-4-thumbnail.jpg'

function ImageSliderModal({ images, setImageSlider }) {
  const [imageIndex, setImageIndex] = useState(0)

  function showNextImage() {
    setImageIndex(index => {
      if (index === images.length - 1) return 0
      return index + 1
    })
  }

  function showPrevImage() {
    setImageIndex(index => {
      if (index === 0) return images.length - 1
      return index - 1
    })
  }
  return (
    <>
      <div onClick={() => setImageSlider(false)} id="lightbox-overlay" className=' z-[4] inset-0 h-[100vh] absolute bg-[rgba(0,0,0,0.75)]'></div>
      <div id="lightbox-container" className="  absolute inset-[0] flex justify-center ">
        <section id="lightbox-section" className="   overflow-x-hidden relative flex flex-col gap-4">

          <svg onClick={() => setImageSlider(false)} className=" cursor-pointer absolute right-0 top-[-25px]" width="14" height="15" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fill="#ffffff" fill-rule="evenodd" />
          </svg>

          <img id="img-img" src={images[imageIndex]} />

          <div id="arrow-right" onClick={showNextImage} className=" cursor-pointer rounded-[9999px] absolute bg-white  box-content flex justify-center items-center h-[26px] w-[26px] p-[4px]">
            <svg width="8" height="12" viewBox="0 0 13 18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="5" fill="none" fill-rule="evenodd" /></svg>
          </div>
          <div id="arrow-left" onClick={showPrevImage} className=" cursor-pointer rounded-[9999px]  absolute bg-white  box-content flex justify-center items-center h-[26px] w-[26px] p-[4px]" >
            <svg width="8" height="11" viewBox="0 0 13 18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="5" fill="none" fill-rule="evenodd" /></svg>
          </div>

          <div id="thumbnails">
            <main className={`${imageIndex === 0 && 'selected'}`}>
              <img className={`${imageIndex === 0 && 'img-selected2'}`} onClick={() => setImageIndex(0)} src={Thumbnail1} />
            </main>


            <main className={`${imageIndex === 1 && 'selected'}`}>
              <img className={`${imageIndex === 1 && 'img-selected2'}`} onClick={() => setImageIndex(1)} src={Thumbnail2} />
            </main>

            <main className={`${imageIndex === 2 && 'selected'}`} >
              <img className={`${imageIndex === 2 && 'img-selected2'}`} onClick={() => setImageIndex(2)} src={Thumbnail3}  />
            </main>
            <main className={`${imageIndex === 3 && 'selected'}`}>
              <img className={`${imageIndex === 3 && 'img-selected2'}`} onClick={() => setImageIndex(3)} src={Thumbnail4}  />
            </main>


          </div>

        </section>
      </div>


    </>

  )
}

export default ImageSliderModal



