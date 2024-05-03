import { useState } from "react"

import Thumbnail1 from '/images/image-product-1-thumbnail.jpg'
import Thumbnail2 from '/images/image-product-2-thumbnail.jpg'
import Thumbnail3 from '/images/image-product-3-thumbnail.jpg'
import Thumbnail4 from '/images/image-product-4-thumbnail.jpg'

function ImageSlider({ images, setImageSlider }) {
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
    <div id="slide-wrapper" className="  overflow-x-hidden relative flex flex-col gap-4">
      <div id="img-wrapper" className="flex  relative  ">
        {/* {images.map(({ url, alt }) => (
          <img src={url} alt={alt} style={{ translate: `${-100 * imageIndex}%` }} />
        ))} */}
        <img onClick={() => setImageSlider(true)} id="img-img" src={images[imageIndex]} />
      </div>
      <div id="left-btn" onClick={showNextImage} className=" cursor-pointer rounded-[9999px] top-[50%] right-[1rem] absolute bg-white  box-content flex justify-center items-center h-[26px] w-[26px] p-[4px]">
        <svg width="8" height="12" viewBox="0 0 13 18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="5" fill="none" fill-rule="evenodd" /></svg>
      </div>
      <div id="right-btn" onClick={showPrevImage} className=" cursor-pointer rounded-[9999px] top-[50%] left-[1rem] absolute bg-white  box-content flex justify-center items-center h-[26px] w-[26px] p-[4px]" >
        <svg width="8" height="11" viewBox="0 0 13 18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="5" fill="none" fill-rule="evenodd" /></svg>
      </div>

      <div id="thumbnails">
        <main className={`${imageIndex === 0 && 'selected'}`}>
          <img className={`${imageIndex === 0 && 'img-selected'}`}  onClick={() => setImageIndex(0)} src={Thumbnail1} />
        </main>


        <main className={`${imageIndex === 1 && 'selected'}`}>
          <img className={`${imageIndex === 1 && 'img-selected'}`} onClick={() => setImageIndex(1)} src={Thumbnail2} />
        </main>

        <main className={`${imageIndex === 2 && 'selected'}`} >
          <img className={`${imageIndex === 2 && 'img-selected'}`} onClick={() => setImageIndex(2)} src={Thumbnail3} />
        </main>
        <main className={`${imageIndex === 3 && 'selected'}`}>
          <img className={`${imageIndex === 3 && 'img-selected'}`} onClick={() => setImageIndex(3)} src={Thumbnail4} />
        </main>


      </div>

    </div>



  )
}

export default ImageSlider
