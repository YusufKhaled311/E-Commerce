
import React from "react";
import { getSpecificBrand } from "../brands.actions";
import Image from "next/image";



type ParamsObj = { id: string };

function isPromise<T = unknown>(value: unknown): value is Promise<T> {
  return !!value && typeof (value as { then?: unknown }).then === "function";
}

type Props = {
  params: ParamsObj | Promise<ParamsObj>;
};

export default async function BrandDetailsPage({ params }: Props) {
 
  const resolvedParams = isPromise<ParamsObj>(params) ? await params : params;
  const { id } = resolvedParams;


  const brand = await getSpecificBrand(id);

  if (!brand) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-semibold text-red-600">Brand not found</h2>
      </div>
    );
  }

  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-semibold mb-4">{brand.name}</h2>

     
      <Image
        src={brand.image}
        alt={brand.name}
        width={400}
        height={400}
        className="h-48 object-contain mb-4 mx-auto"
      />

     
    </div>
  );
}
