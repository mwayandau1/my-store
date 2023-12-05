import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { CartTotals, CartItemList, SectionTitle } from "../components"
function Cart() {
const user = useSelector((state)=>state.userState.user)
const numItemsInCart = useSelector((state)=>state.cartState.numItemsInCart);
  if (numItemsInCart === 0) return <SectionTitle text='Your cart is empty.
  Please add item to the cart to continue' />
  return (
    <>
    <SectionTitle title='Your shopping cart' />
    <div className="mt-8 grid gap-8 lg:grid-cols-12">
      <div className="lg:col-span-8">
        <CartItemList />
      </div>
      <div className="lg:col-span-4 lg:pl-4">
        <CartTotals />
        {user?
        <Link to='/checkout' className="btn btn-secondary btn-block mt-8">Proceed to checkout</Link>
        : <Link to='/login' className="btn btn-secondary btn-block mt-8"> Login to continue </Link>}
      </div>
    </div>
    </>
  )
}

export default Cart