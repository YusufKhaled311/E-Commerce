'use client'
import { addProductToCart } from '_/app/cart/cart.actions'
import React from 'react'
import { toast } from 'sonner'

export default function AddToCartBtn({productId}: {productId : string}) {


    async function handelAddToCart()
    {
     const AddToCartResponse = await   addProductToCart(productId)

          if(AddToCartResponse.status==='success')
          {
            toast.success(AddToCartResponse.message , {position:'top-center'})
          }
          else
          {
            toast.error('Error adding product to cart:', {position:"top-center"})
          }
    }
  return (
   <>


    <button onClick={handelAddToCart} className="w-full py-2 cursor-pointer bg-green-600 text-white text-sm rounded-lg font-medium hover:bg-green-700 transition">
        Add to Cart
      </button>
   
   
   </>
  )
}
