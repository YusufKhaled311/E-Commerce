import AddToCartBtn from '_/app/_Components/AddCartBtn/AddToCartBtn';
import { getSpecifiedProduct } from '_/app/_Services/Product.service';
import Image from "next/image";
import React from 'react';

type ProductDetailsProps = {
  params: Promise<{ id: string }>;
};

export default async function page({ params }: ProductDetailsProps) {
  const { id } = await params;
  const productDetails = await getSpecifiedProduct(id);

  if (!productDetails) return null;

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* Product Images Section */}
        <div className="lg:col-span-2 flex flex-col items-center">
          <div className="bg-gray-50 rounded-2xl shadow p-6 flex justify-center">
            <Image
              src={productDetails.imageCover}
              alt={productDetails.title}
              width={500}
              height={500}
              priority
              className="object-contain max-h-[500px] w-full"
            />
          </div>

          {productDetails.images?.length > 1 && (
            <div className="flex gap-4 mt-4 overflow-x-auto">
              {productDetails.images.map((img: string, i: number) => (
                <Image
                  key={i}
                  src={img}
                  alt={`thumb-${i}`}
                  width={100}
                  height={100}
                  className="h-20 w-20 rounded-lg border cursor-pointer hover:opacity-80 transition"
                />
              ))}
            </div>
          )}
        </div>

        {/* Product Details Section */}
        <div className="flex flex-col justify-between sticky top-10 h-fit bg-white border rounded-2xl shadow p-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{productDetails.title}</h1>
            <p className="mt-3 text-gray-600 leading-relaxed">{productDetails.description}</p>

            <div className="flex items-center gap-2 mt-3">
              <span className="text-yellow-500 text-lg">⭐</span>
              <span className="font-medium">{productDetails.ratingsAverage || "0"} / 5</span>
              <span className="text-gray-400">({productDetails.ratingsQuantity || 0} reviews)</span>
            </div>

            <div className="mt-4 flex gap-3 text-sm">
              <span className="px-3 py-1 bg-gray-100 rounded-full">
                {productDetails.category?.name || "General"}
              </span>
              {productDetails.brand && (
                <span className="px-3 py-1 bg-gray-100 rounded-full">
                  {productDetails.brand.name}
                </span>
              )}
            </div>
          </div>

          {/* Price & Buttons */}
          <div className="mt-8">
            <div className="text-3xl font-bold text-green-600">${productDetails.price}</div>
            <p className="text-sm text-gray-500 mt-1">
              {productDetails.quantity > 0 ? "In Stock ✅" : "Out of Stock ❌"}
            </p>

            <div className="flex flex-col gap-3 mt-6">
              <AddToCartBtn productId={productDetails.id} />
              <button className="w-full px-6 py-3 border rounded-xl shadow hover:bg-gray-50 transition">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
