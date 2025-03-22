import { redirect } from "next/navigation"
import { products } from "../data"
import Product from "../components/product"

export default async function ProductPage({
  params
}: {
  params: Promise<{ productId: string }>
}) {
  const { productId } = await params

  const product = products.find(product => product.id === productId)

  if (!product) {
    redirect("/404")
    return null
  }

  return (
    <div className="grow">
      <Product product={product} />
    </div>
  )
}