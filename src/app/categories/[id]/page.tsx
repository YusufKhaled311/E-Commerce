import AddToCartBtn from "_/app/_Components/AddCartBtn/AddToCartBtn";
import { ProductType } from "_/app/_interfaces/product.interfaces";

import { getProductsByCategory } from "_/app/_Services/ProductsByCategory.service";
import React from "react";
import Image from "next/image";

export default async function ProductsByCategoryPage({ params }: { params: { id: string } }) {
  const { id } = params;

  console.log("ProductCategory ID:", id);

  const products = await getProductsByCategory(id);

  console.log("products_cat_details", products);

  return (
    <section className="px-6 py-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Products</h2>

      {(!products || products.length === 0) ? (
        <p className="text-red-500 text-center">No products found for this category.</p>
      ) : (
        <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {products.map((product: ProductType) => (
            <div
              key={product.id}
              className="p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition hover:scale-105 duration-500"
            >
              {/* Product image */}
              <div className="w-full h-40 overflow-hidden rounded-lg bg-gray-50 flex items-center justify-center mb-3">
                <Image
                  src={product.imageCover}
                  alt={product.title}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full rounded-xl"
                />
              </div>

              {/* Product title */}
              <h3 className="font-medium text-gray-800 truncate">
                {product.title}
              </h3>

              {/* Product price */}
              <p className="text-sm text-gray-500">${product.price}</p>

              {/* Add to cart button (optional) */}

              <AddToCartBtn productId={product.id} />

            </div>
          ))}
        </div>
      )}
    </section>
  );
}
