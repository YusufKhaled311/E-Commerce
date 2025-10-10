'use client'
import React from 'react'
import { clearCart } from './RemoveAllCart.action'

export default function RemoveAllCart() {


   async function handelClearAllCart()
    {
       await clearCart()
    }
    return (
        <>
            <button  onClick={handelClearAllCart} className="mt-6 w-full cursor-pointer bg-red-600 text-white py-3 rounded-xl hover:bg-red-700 transition">
                Remove All Cart
            </button>

        </>
    )
}
