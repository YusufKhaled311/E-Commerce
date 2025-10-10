'use server'

import { revalidatePath } from "next/cache"
import { getUserToken } from "../utils/utils"

export async function updateCountOfItems(id: string, count: number) {
  const userToken = await getUserToken()

  try {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, {
      method: 'put',
      headers: {
        token: userToken as string,
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ count })
    })

    const finalResultFromUpdate = await res.json()
    console.log('finalResultFromUpdate:', finalResultFromUpdate)

    revalidatePath('/cart')

    
  } catch (error) {
    console.log('ERROR', error)
   


  }
}
