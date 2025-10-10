'use client'

import { Button } from '_/components/ui/button'
import { Input } from '_/components/ui/input'
import { Label } from '_/components/ui/label'
import React, { useEffect, useRef, useState } from 'react'
import { createCachOrder, createOnlineOrder } from './order.actions'
import { getUserCart } from '../_Services/cart.service'
import { toast } from 'sonner'

export default function Payment() {
  const cityInput = useRef<HTMLInputElement>(null)
  const phoneInput = useRef<HTMLInputElement>(null)
  const detailsInput = useRef<HTMLInputElement>(null)
  const [cartId, setCartId] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function makeCashOrder() {
    if (!cartId) return toast.error('Cart not found', { position: 'top-center' })

    const orderDetails = {
      details: detailsInput.current?.value || '',
      phone: phoneInput.current?.value || '',
      city: cityInput.current?.value || '',
    }

    setLoading(true)
    try {
      const result = await createCachOrder(cartId, orderDetails)
      console.log('finalResult from order:', result)

      if (result.status === 'success') {
        toast.success('Cash order created successfully', { position: 'top-center' })
        // clear inputs
        detailsInput.current!.value = ''
        phoneInput.current!.value = ''
        cityInput.current!.value = ''
      } else {
        toast.error(result.message || 'Error occurred, please try again', { position: 'top-center' })
      }
    } catch (err) {
      console.error(err)
      toast.error('Something went wrong', { position: 'top-center' })
    } finally {
      setLoading(false)
    }
  }

  async function makeOnlineOrder() {
    if (!cartId) return toast.error('Cart not found', { position: 'top-center' })

    const orderDetails = {
      details: detailsInput.current?.value || '',
      phone: phoneInput.current?.value || '',
      city: cityInput.current?.value || '',
    }

    setLoading(true)
    try {
      const onlineOrder = await createOnlineOrder(cartId, orderDetails)
      console.log('onlineOrder', onlineOrder)

      if (onlineOrder.status === 'success' && onlineOrder.session?.url) {
        toast.message('Redirecting to payment...', { position: 'top-center' })
        window.location.href = onlineOrder.session.url
      } else {
        toast.error(onlineOrder.message || 'Failed to create online order', { position: 'top-center' })
      }
    } catch (err) {
      console.error(err)
      toast.error('Something went wrong', { position: 'top-center' })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    (async () => {
      const { cartId } = await getUserCart()
      setCartId(cartId)
    })()
  }, [])

  return (
    <div className="w-1/2 mx-auto">
      <div className="my-2">
        <Label className="pb-2.5 capitalize" htmlFor="city">
          City:
        </Label>
        <Input ref={cityInput} type="text" id="city" />
      </div>
      <div className="my-2">
        <Label className="pb-2.5 capitalize" htmlFor="phone">
          Phone:
        </Label>
        <Input ref={phoneInput} type="tel" id="phone" />
      </div>
      <div className="my-2">
        <Label className="pb-2.5 capitalize" htmlFor="details">
          Details:
        </Label>
        <Input ref={detailsInput} type="text" id="details" />
      </div>

      <div className="flex gap-4 mt-4">
        <Button disabled={loading} onClick={makeCashOrder}>
          {loading ? 'Processing...' : 'Make Cash Order'}
        </Button>
        <Button
          disabled={loading}
          onClick={makeOnlineOrder}
          className="cursor-pointer bg-green-700 hover:bg-green-800"
        >
          {loading ? 'Processing...' : 'Make Online Order'}
        </Button>
      </div>
    </div>
  )
}
