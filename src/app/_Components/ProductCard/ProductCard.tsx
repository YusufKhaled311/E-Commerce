import React from "react";
import { ProductTypeProps } from "./ProductCard.type";
import Link from "next/link";
import AddToCartBtn from "../AddCartBtn/AddToCartBtn";
import Image from "next/image";

export default function ProductCard({ product }: ProductTypeProps) {



  return (



    <div
      key={product.id}
      className="rounded-xl shadow-sm hover:shadow-md transition p-4 flex flex-col gap-4"
    >
      <Link href={`/productDetails/${product.id}`}>
        <div className="w-full aspect-square overflow-hidden rounded-lg bg-gray-50">
          <Image
            src={product.imageCover}
            alt={product.title}
            width={500}
            height={500}
            className="w-full h-full object-contain"
          />
        </div>


        <div className="flex flex-col gap-3 flex-grow">

          <h2 className="text-base font-semibold text-gray-800 line-clamp-2">
            {product.title.split(" ", 2).join(" ")}
          </h2>


          {product.priceAfterDiscount ? (
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-green-600">
                ${product.priceAfterDiscount}
              </span>
              <span className="text-sm text-gray-400 line-through">
                ${product.price}
              </span>
            </div>
          ) : (
            <span className="text-lg font-bold text-gray-900">
              ${product.price}
            </span>
          )}
        </div>


      </Link>

      <AddToCartBtn productId={product.id} />

    </div>



  );
}
