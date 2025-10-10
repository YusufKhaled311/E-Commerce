import { getUserToken } from '../utils/utils'

export type ShippingAddressType = {
  details: string
  phone: string
  city: string
}

export async function createCachOrder(cartId: string, shippingAddress: ShippingAddressType) {
  try {
    const UserToken = await getUserToken()
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/${cartId}`, {
      method: 'POST',
      body: JSON.stringify({ shippingAddress }),
      headers: {
        token: UserToken as string,
        'Content-Type': 'application/json',
      },
    })

    const finalResult = await res.json()
    return finalResult
  } catch (error) {
    console.error('Error creating cash order:', error)
    return { status: 'error', message: 'Network error' }
  }
}

export async function createOnlineOrder(cartId: string, shippingAddress: ShippingAddressType) {
  try {
    const UserToken = await getUserToken()
    const res = await fetch(
      `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:3000`,
      {
        method: 'POST',
        body: JSON.stringify({ shippingAddress }),
        headers: {
          token: UserToken as string,
          'Content-Type': 'application/json',
        },
      }
    )

    const finalResult = await res.json()
    return finalResult
  } catch (error) {
    console.error('Error creating online order:', error)
    return { status: 'error', message: 'Network error' }
  }
}
