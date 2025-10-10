'use client'

import React from 'react'
import { updateCountOfItems } from './ChangeCount.action'


export default function ChangeCountBtn({ isIncrement = false, id, newCount }: { isIncrement?: boolean, id: string, newCount: number }) {
  async function handelChangeCount() {

    await updateCountOfItems(id, newCount)


  }

  return (
    <button onClick={handelChangeCount} disabled={newCount == 0} className="cursor-pointer px-3 py-1 border rounded">
      {isIncrement ? '+' : '-'}
    </button>
  )
}
