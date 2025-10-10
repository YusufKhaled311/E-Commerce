import { CategoryType } from "../_interfaces/product.interfaces";

export async function getAllCategory():Promise<CategoryType|null> {
    try {

        const res = await fetch(`https://ecommerce.routemisr.com/api/v1/categories`);
        const finalRes = await res.json();
   
        return finalRes.data

    } catch (error) {


        console.log('Error ', error)

        return null 

    }



}