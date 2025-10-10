'use server'

import { revalidatePath } from "next/cache";
import { getUserToken } from "../utils/utils"


export  async function RemoveProductFromCart( id: string) {



   const userToken = await  getUserToken()
    try {


     const res =   await  fetch(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{

            method:'delete',
            headers:{
                token:userToken as string 
            }
        })


        await res.json() ;

        revalidatePath('/cart')

       return true

    } catch (error) {

        console.log('ERROR', error)
        

    }
}