
'use server'

export async function getAllBrands() {
  try {
    const res = await fetch('https://ecommerce.routemisr.com/api/v1/brands', {
      cache: 'force-cache',
    })
    const finalResult = await res.json()
    return finalResult.data
  } catch (error) {
    console.error('Error fetching brands:', error)
    return []
  }
}

export async function getSpecificBrand(id: string) {
  try {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/brands/${id}`, {
      cache: 'no-store',
    })
    const finalResult = await res.json()
    return finalResult.data
  } catch (error) {
    console.error(`Error fetching brand ${id}:`, error)
    return null
  }
}
