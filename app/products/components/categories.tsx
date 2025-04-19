import CategoryCards from "./categoryCards"

export interface Category {
  name: string
  imageUrl: string
  startingPrice: number
}

export default async function Categories({
  animated = true,
  size = 'sm',
  onSelect
}: {
  animated?: boolean
  size?: 'sm' | 'lg'
  onSelect?: (name: string) => void
}) {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_BACKEND_ORIGIN! + '/api/products/categories', {
      next: {
        revalidate: 86400
      }
    })

    if (!res.ok) {
      throw new Error('Failed to fetch categories')
    }

    const data = await res.json()

    const categories: Category[] = data.data

    if (categories.length === 0) {
      throw new Error('No categories found')
    }

    return (
      <CategoryCards categories={categories} size={size} onSelect={onSelect} animated={animated} />
    )
  } catch (e) {
    console.error(e)

    return (
      null
    )
  }
}