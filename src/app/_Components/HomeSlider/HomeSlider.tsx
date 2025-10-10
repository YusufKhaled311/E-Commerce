import React from 'react'
import MySwipper from '../MySwipper/MySwipper'
import Image from 'next/image'


import image1 from '@images/imgi_28_product-single-img-4.jpg';
import image2 from '@images/imgi_55_slider-image-1.jpg';
import image3 from '@images/imgi_56_slider-image-2.jpg';
import blog1 from '@images/imgi_57_ad-banner-1.jpg'
import blog2 from '@images/imgi_58_ad-banner-2.jpg'



export default function HomeSlider() {
  return (
    <div className=" flex">

  <div className="w-3/4 h-[400px]">
    <MySwipper  imageList={[image1.src, image2.src, image3.src]} height={400} />
  </div>


  <div className=" flex flex-col">
    <div >
      <Image src={blog1} alt="blog1" className="w-full h-[200px] p-2 rounded rounded-xl" />
    </div>
    <div >
      <Image src={blog2} alt="blog2" className="w-full h-[200px] p-2 rounded rounded-xl" />
    </div>
  </div>
</div>

  )
}
