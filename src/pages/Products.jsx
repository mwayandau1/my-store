import { useLoaderData, Link } from "react-router-dom"
import { Filters, PaginationContainer, ProductContainer } from "../components"
import { customFetch } from "../utils"

const url = '/products'
const allProductsQuery = (queryParams)=>{
  const {search, company, sort, price, shipping, category, page} = queryParams
  return {
    queryKey:[
      'products',
      search ?? '',
      company ?? 'all',
      sort ??  '',
      price ?? 10000,
      shipping ?? false,
      category ?? 'all',
      page ?? '',
      sort ?? 'a-z'
    ],
    queryFn:()=>customFetch(url, {queryParams})
  }
}
export const loader = (queryClient)=> async({request})=>{
  const params = Object.fromEntries([...new URL(request.url).searchParams.entries(),]);
  const response =  await queryClient.ensureQueryData(allProductsQuery(params));
  const products = response.data.data;
  const meta = response.data.meta;
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