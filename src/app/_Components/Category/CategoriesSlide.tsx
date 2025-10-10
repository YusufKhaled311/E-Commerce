import React from 'react'
import { getAllCategory } from '../../_Services/Category.service'
import MySwipper from '../MySwipper/MySwipper'

export default async function CategoriesSlide() {

 const allCategories = await   getAllCategory()

 if (allCategories == null ) 
 {
    return
 }

  return (
 
<MySwipper
  height={200}
  slidesPerView={5}
  imageList={allCategories.map(category => category.image)}
/>  )
}
