import ProductComponent from "./components/product"
import { Product } from "@/app/types"

const getProduct = async (productId: string) => {
  const res = await fetch(process.env.NEXT_PUBLIC_BACKEND_ORIGIN! + '/api/products/' + productId, {
    next: {
      revalidate: 60 // 60 seconds
    }
  })

  if (!res.ok) {
    throw new Error('Failed to fetch product')
  }

  const json = await res.json()
  return json.data as Product
}

export async function generateMetadata({ params }: { params: Promise<{ productId: string }> }) {
  const { productId } = await params

  try {
    const product = await getProduct(productId)

    return {
      title: 'Ejae | ' + product.name,
      description: product.description,
      openGraph: {
        title: product.name,
        description: product.description,
        images: [
          {
            url: product.images[0].url || "/images/logo.png",
            width: 600,
            height: 600
          }
        ]
      }
    }
  } catch (error) {
    console.error('Error fetching product for metadata:', error)
    return {
      title: 'Ejae | Product',
      description: 'Product not found',
    }
  }
}

export default async function ProductPage({
  params
}: {
  params: Promise<{ productId: string }>
}) {
  try {
    const { productId } = await params

    const product = await getProduct(productId)

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