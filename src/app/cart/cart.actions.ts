'use server'

import { revalidatePath } from "next/cache"
import { getUserToken } from "../utils/utils"

export async function addProductToCart(productId: string) {
  const RealUserToken = await getUserToken()

  if (!RealUserToken) {

    return null
  }

  try {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart`, {
      method: "POST",
      headers: {
        token: RealUserToken as string,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productId }),
      cache:'force-cache' 
    })

    const text = await res.text()
     

    try {
      const finalResult = JSON.parse(text)

    

      revalidatePath('/cart')
      return finalResult
    } catch {
      console.error(" Response is not JSON:", text)
      return null
    }
  } catch (error) {
    console.error(" Error adding product to cart:", error)
    return null
  }
}




