import React from "react";
import Link from "next/link";
import { getAllCategory } from "../_Services/Category.service";
import Image from "next/image";
type categoryType =
  {
    _id: string,
    name: string,
    image: string,


  }

export default async function Categories() {
  const allCategories = await getAllCategory();



  return (
    <section className="px-6 py-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Categories</h2>

      <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {allCategories?.map((cat: categoryType) => (
          <Link
            key={cat._id}
            href={`/categories/${cat._id}`}
          >
            <div className="flex flex-col items-center p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition cursor-pointer hover:scale-105">
              <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center mb-3">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  width={400} 
                  height={400} 
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="text-gray-700 font-medium text-sm text-center">
                {cat.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
