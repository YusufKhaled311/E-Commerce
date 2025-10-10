import { ProductType } from "../_interfaces/product.interfaces";


export async function getAllProducts():Promise < ProductType[] |null >
{


   try {
     const res = await  fetch(`https://ecommerce.routemisr.com/api/v1/products`,{
      cache:'force-cache'
     })  ;

    const finalResult = await res.json() ;
    return finalResult.data ;

    
   } catch (error) {

    console.log('Error ' , error)
     return null 
    
   }
}


export async function getSpecifiedProduct(id: string) {
  try {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${id}`, {
      cache: "force-cache",
    });

   

    const data = await res.json();
    return data.data; 
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}
