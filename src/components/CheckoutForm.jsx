import {Form, Link, redirect} from 'react-router-dom'
import {FormInput, SubmitButton} from '../components'
import { formatPrice, customFetch } from '../utils'
import {toast} from 'react-toastify'
import { clearCart } from '../features/cart/cartSlice'


export const action = (store, queryClient) => async({request})=>{
  const formData =await request.formData();
  const {name, address} =  Object.fromEntries(formData)
  const user = store.getState().userState.user;
  const {numItemsInCart, orderTotal, cartItems } = store.getState().cartState
  const info = {
    name, address, chargeTotal:orderTotal,
    orderTotal:formatPrice(orderTotal),
    cartItems,
    numItemsInCart
  }
  try{
    const response = await customFetch.post('/orders',
    {data:info},
     { headers:{
        Authorization: `Bearer ${user.token}`
      }})
      toast.success("Order placed successfully")
      queryClient.removeQueries(['orders'])
      store.dispatch(clearCart())
      return redirect('/orders')

  }
  catch (error){
    const errorMessage = error?.response?.data?.error?.message ||
    'Please something went wrong';
    toast.error(errorMessage);
    if(error?.response?.status === 401 || 403) return redirect('/login')
    return null;
  }

}
function CheckoutForm() {
  return (
    <Form className='flex flex-col gap-y-4' method='POST'>
      <h4 className="font-medium text-3xl capitalize">Shipping information</h4>
      <FormInput label='first name' name='name' type='text' />
      <FormInput label='address' name='address' type='text' />
      <div className="mt-4">
        <SubmitButton text='place your order' />
      </div>
    </Form>
  )
}

export default CheckoutForm