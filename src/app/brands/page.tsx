
import { getAllBrands } from './brands.actions'
import BrandsList from './BrandsList'

export default async function BrandsPage() {
  const brands = await getAllBrands()

  return <BrandsList brands={brands} />
}
