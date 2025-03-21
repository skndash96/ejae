import { products } from "../data"

export default async function ProductPage({
  params
}: {
  params: Promise<{ productId: string }>
}) {
  const { productId } = await params

  const product = products.find(product => product.id === Number(productId))

  return (
    <div className="grow">
      heello
    </div>
  )
}