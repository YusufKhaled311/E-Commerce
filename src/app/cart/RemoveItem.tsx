'use client'
import React from 'react'
import { RemoveProductFromCart } from './RemoveItem.actions'
import { toast } from 'sonner'

export default function RemoveItem({ id }: { id: string }) {





    async function RemoveItemFromCart() {


        const result = await RemoveProductFromCart(id)

        if (result === true) {
            toast.message('Product Removed Successfully ', { position: 'top-center' })
        }

        else {
            toast.message('Error Please Try Again! ', { position: 'top-center' })
        }
    }



    return (
        <>

            <button onClick={RemoveItemFromCart} className="text-red-500 text-sm cursor-pointer bg-gray-200 px-3 py-1  rounded rounded-xl">
                <i className="fa-solid fa-trash-can"></i>
            </button>


        </>
    )
}
