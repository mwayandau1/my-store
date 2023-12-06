import { useLoaderData, redirect } from "react-router-dom"
import { customFetch } from "../utils"
import { OrdersList, ComplexPaginationContainer, SectionTitle } from "../components"
import {toast} from 'react-toastify'

const ordersQuery = (params, user) =>{
  return {
    queryKey:['orders', user.username, params.page ? parseInt(params.page) : 1],
    queryFn:()=> customFetch.get('/orders', {
      params, headers:{
        Authorization:`Bearer ${user.token}`
      }
    })
  }
}

 export const loader = (store, queryClient)=> async({request}) =>{
  const user = store.getState().userState.user
  if(!user){
    toast.warn("You must be logged in to view orders")
    return redirect('/login')
  }
  const params = Object.fromEntries([...new URL(request.url)
    .searchParams.entries()]);
  try{
    const response =await queryClient.ensureQueryData(ordersQuery(params, user))
    return {orders:response.data.data, meta:response.data.meta}
  }
  catch (error){
    const errorMessage = error?.response?.data?.error?.message
    toast.error(errorMessage)
    if(error?.response?.status===401 || 403) return redirect('/login')

    return null;
  }
}
function Orders() {
  const {meta} = useLoaderData()
  if(meta.pagination.total <1 ) {
    return <SectionTitle text='Please make an order' />
  }
  return (
    <div>
      <SectionTitle text='Your orders'/>
      <OrdersList />
      <ComplexPaginationContainer />
    </div>
  )
}

export default Orders