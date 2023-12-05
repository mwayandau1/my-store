import { useDispatch } from "react-redux"
import { formatPrice, generateQuantityOptions } from "../utils"
import { editItem, removeItem } from "../features/cart/cartSlice"
function CartItem({cartItem}) {
    const {cartID, price, productID, image, title, quantity, company, productColor} = cartItem;
    const dispatch = useDispatch();

    const handleQuantity = (e) =>{
        dispatch(editItem({cartID, quantity:parseInt(e.target.value)}))
    }
  return (
    <article className="mb-12 flex flex-col sm:flex-row gap-y-4 flex-wrap
    border-b border-base-300 pb-6 last:border-b-0">
        {/* IMAGE */}
        <img src={image} alt={title} className="h-24 w-24 sm:h-32 sm:w-32 rounded-lg " />
        {/* INFO */}
        <div className="sm:ml-16">
            {/* TITLE */}
            <h3 className="capitalize font-medium">{title}</h3>
            {/* COMPANY */}
            <h4 className="mt-2 text-sm text-neutral-content capitalize">{company}</h4>
            {/* COLOR */}
            <p className="text-sm flex items-center mt-2 capitalize gap-x-2">
                color: <span className="badge badge-sm" style={{backgroundColor:productColor}}></span>
            </p>
        </div>

        <div className="sm:ml-16 sm:w-48">
            {/* QUANTITY */}
            <div className="form-control max-w-xs">
                <label htmlFor="quantity" className="label p-0">
                    <span className="label-text ">Quantity</span>
                </label>
                <select name="quantity" id="quantity" value={quantity} onChange={handleQuantity}
                className="mt-2 select select-base select-bordered select-xs">
                    {generateQuantityOptions(quantity + 5)}
                </select>
            </div>
            {/* REMOVE */}
            <button className="mt-2 link link-secondary text-xe capitalize"
                onClick={()=>dispatch(removeItem({cartID}))}>remove</button>
        </div>
        <p className="font-medium sm:ml-auto">{formatPrice(price)}</p>
    </article>
  )
}

export default CartItem