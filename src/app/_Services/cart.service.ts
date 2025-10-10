import { itemType } from "../cart/page";
import { getUserToken } from "../utils/utils";

type CartResponseType = {
 numOfCartItems:number ,
 products: itemType[],
 totalCartPrice :number ,
 cartId:string
}

export async function getUserCart() :Promise <CartResponseType> {
    const realToken = await getUserToken();

    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart`, {
        headers: {
            token: realToken as string,
        },
        
    });

    const finalResult = await res.json();

    console.log('finalResult for Cart', finalResult)

    const { numOfCartItems, data: { products, totalCartPrice } , cartId } = finalResult;
    return { numOfCartItems, products, totalCartPrice , cartId };
}