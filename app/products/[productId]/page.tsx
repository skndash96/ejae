import { redirect } from "next/navigation"
import ProductComponent from "./components/product"
import { Product } from "@/app/types"

export default async function ProductPage({
  params
}: {
  params: Promise<{ productId: string }>
}) {
  try {
    const { productId } = await params

    console.log(process.env.NEXT_PUBLIC_BACKEND_ORIGIN! + '/api/products/' + productId)

    const res = await fetch(process.env.NEXT_PUBLIC_BACKEND_ORIGIN! + '/api/products/' + productId, {
      next: {
        revalidate: 60 // 60 seconds
      }
    })

    const json = await res.json()
    const product = json.data as Product

    if (!res.ok) {
      redirect("/404")
    }

    return (
      <ProductComponent product={product} />
    )
  } catch (error) {
    console.error('Error fetching product:', error)

    return (
      <div className="grow">
        <p className="mt-12 p-4 text-center">Failed to load product. Try again later.</p>
      </div>
    )
  }
}