import { useSelector } from "react-redux"
import CartItem from "./CartItem"

function CartItemList() {
    const cartItems = useSelector((state)=>state.cartState.cartItems)
  return (
    <div>
        {cartItems.map(item=>{
            return <CartItem cartItem={item} key={item.cartID}/>
        })}
    </div>
  )
}

export default CartItemList