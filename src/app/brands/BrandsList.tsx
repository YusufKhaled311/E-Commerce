'use client'

import React from 'react'
import { Brand_Type } from './brands.type'
import { useRouter } from 'next/navigation'
import Image from "next/image";

export default function BrandsList({ brands }: { brands: Brand_Type[] }) {
  const router = useRouter()

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">All Brands</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {brands.map((brand) => (
          <div
            key={brand._id}
            onClick={() => router.push(`/brands/${brand._id}`)}
            className="border rounded-xl shadow-sm p-3 hover:shadow-md transition cursor-pointer bg-white"
          >
            <Image
              src={brand.image}
              alt={brand.name}
              width={200}
              height={128}
              className="w-full h-32 object-contain mb-2"
            />
            <h3 className="text-center text-sm font-medium">{brand.name}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}
