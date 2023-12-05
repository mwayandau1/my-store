import { useLoaderData, Link } from "react-router-dom"
import { Filters, PaginationContainer, ProductContainer } from "../components"
import { customFetch } from "../utils"

const url = '/products'
export const loader = async({request})=>{
  const params = Object.fromEntries([...new URL(request.url).searchParams.entries(),])
  const response =  await customFetch(url, {params})
  const products = response.data.data
  const meta = response.data.meta
  return {products, meta, params}
}
function Products() {
  return (
    <div>
      <Filters />
      <ProductContainer />
      <PaginationContainer />
    </div>
  )
}

export default Products