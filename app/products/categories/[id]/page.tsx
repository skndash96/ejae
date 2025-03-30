import { Product } from "@/app/types"
import Category from "./components/category"

export default async function CategoryPage({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  const catId = decodeURIComponent(id)

  try {
    const res = await fetch(process.env.NEXT_PUBLIC_BACKEND_ORIGIN + '/api/products')
    
    const json = await res.json()

    const products = json.data as Product[]

    const categoryMap = new Map<string, Product[]>()

    products.forEach(product => {
      const pCatId = product.category.toLowerCase()
      if (!categoryMap.has(pCatId)) {
        categoryMap.set(pCatId, [])
      }
      categoryMap.get(pCatId)?.push(product)
    })

    return (
      <div className="grow py-8 px-4 bg-white">
        <Category id={catId} products={categoryMap.get(catId) || []} />
      </div>
    )
  } catch (e) {
    console.error('Error fetching category:', e)

    return (
      <div className="grow p-8 bg-white">
        <h1 className="text-5xl font-bangers text-center">
          {catId} Category
        </h1>

        <p className="mt-12 p-4 text-center">Failed to load category. Try again later.</p>
      </div>
    )
  }
}