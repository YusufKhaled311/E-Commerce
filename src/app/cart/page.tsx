import React from "react";
import { ProductType } from "../_interfaces/product.interfaces";
import RemoveAllCart from "../_Components/RemoveAllCart/RemoveAllCart";
import { getUserCart } from "../_Services/cart.service";
import RemoveItem from "./RemoveItem";
import ChangeCountBtn from "./ChangeCountBtn";
import Link from "next/link";
import Image from "next/image";

export type itemType = {
    count: number,
    _id: string,
    price: number,
    product: ProductType,
    title: string,
    imageCover: string
}



export default async function CartPage() {
    const { numOfCartItems, totalCartPrice, products } = await getUserCart();

    return (
        <div className="max-w-6xl mx-auto px-6 py-10">
            <h1 className="text-3xl font-bold mb-6">🛒 Your Cart</h1>

            {numOfCartItems === 0 ? (
                <p className="text-red-600 text-lg text-center ">Your cart is empty.</p>
            ) : (
                <div className="grid lg:grid-cols-3 gap-10">

                    <div className="lg:col-span-2 space-y-6">
                        {products.map((item: itemType) => (
                            <div
                                key={item._id}
                                className="flex items-center gap-6 p-4 bg-white rounded-2xl shadow hover:shadow-md transition"
                            >

                                <Image
                                    src={item.product.imageCover}
                                    alt={item.product.title}
                                    width={112}
                                    height={112}
                                    className="w-28 h-28 object-cover rounded-xl"
                                />


                                <div className="flex-1">
                                    <h2 className="text-lg font-semibold text-gray-800">
                                        {item.product.title}
                                    </h2>
                                    <p className="text-gray-500 text-sm mt-1">
                                        {item.product.category?.name}
                                    </p>
                                    <p className="text-green-600 font-bold mt-2">
                                        ${item.price}
                                    </p>
                                </div>


                                <div className="flex flex-col items-center gap-2">

                                    <div className="flex gap-2 items-center">
                                        <ChangeCountBtn isIncrement id={item.product.id} newCount={item.count + 1} />
                                        <span className="px-3 py-1 bg-gray-100 rounded-lg text-sm">{item.count}</span>
                                        <ChangeCountBtn id={item.product.id} newCount={item.count - 1} />
                                    </div>


                                    <RemoveItem id={item.product.id} />

                                </div>
                            </div>
                        ))}
                    </div>


                    <div className="bg-white rounded-2xl shadow p-6 h-fit sticky top-10">
                        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                        <p className="flex justify-between text-gray-700">
                            <span>Items:</span>
                            <span>{numOfCartItems}</span>
                        </p>
                        <p className="flex justify-between text-gray-700 mt-2">
                            <span>Total:</span>
                            <span className="font-bold text-green-600">
                                ${totalCartPrice}
                            </span>
                        </p>
                        <Link href={`/payment`}>
                            <button className="mt-6 w-full cursor-pointer bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition">
                                Checkout
                            </button>

                        </Link>

                        <RemoveAllCart />
                    </div>
                </div>
            )}
        </div>
    );
}
