import { Suspense , lazy} from 'react'

import ProductCard from './_Components/ProductCard/ProductCard';

import { getAllProducts } from './_Services/Product.service';

import HomeSlider from './_Components/HomeSlider/HomeSlider';
import LoadingPage from './_Components/Loading/LoadingPage';

 const CategorySlide = lazy(() => import('./_Components/Category/CategoriesSlide'))

export default async function Home() {




  const allProducts = await getAllProducts()




  return (
    <>
      <HomeSlider  />


      <div className='py-10 text-xl text-gray-700 font-bold'>
        <p>Category  </p>
     <Suspense fallback={<>
      <LoadingPage/>
      
      
      </>}>

      <CategorySlide/>

     </Suspense>

      </div>





      <div className='py-8 text-xl text-gray-700 font-bold'>
        <p > Products  </p>

      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 ">
        {allProducts?.map((product) => (
        
            <ProductCard product={product} key={product.id} />
        ))}
      </div>





    </>
  )
}
