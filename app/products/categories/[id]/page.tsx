import Category from "./components/category"

export default async function CategoryPage({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  return (
    <div className="p-8 bg-white">
      <Category id={id} />
    </div>
  )
}