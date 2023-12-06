import {  useSelector } from "react-redux"
import { CheckoutForm, SectionTitle, CartTotals } from "../components"
// import { store } from "../store";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";

export const loader =(store) => () =>{
  const user = store.getState().userState.user;
  if(!user) {
    toast.warn("You must be logged in to checkout ")
    return redirect('/login')
  }
  return null;
}
function Checkout() {
  const cartTotals = useSelector((state)=>state.cartState.cartTotal)
  if(cartTotals === 0) return <SectionTitle text="Your cart is empty"/>
  return (
    <>
      <SectionTitle text='Place your order' />
      <div className="mt-8 grid sm:grid-cols-2 gap-8 items-start">
          <CheckoutForm />
          <CartTotals />
      </div>
    </>
  )
}

export default Checkout