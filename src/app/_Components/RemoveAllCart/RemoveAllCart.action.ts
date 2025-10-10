'use server'

import { getUserToken } from "_/app/utils/utils"
import { revalidatePath } from "next/cache";


export async function clearCart()
{

    const realToken = await getUserToken() ;

   const res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart`,{
        method:'delete',
        headers:{
            token:realToken as string ,
        } ,
        
    })

    const final = await res.json() ;
    revalidatePath('cart')

    console.log('clear Cart Response: ', final)
}