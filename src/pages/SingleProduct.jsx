import { customFetch, formatPrice, generateQuantityOptions } from "../utils"
import { Link, useLoaderData } from "react-router-dom"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addItem } from "../features/cart/cartSlice"



export const loader = async({params}) =>{
  const url = `/products/${params.id}`
  const response = await customFetch(url)
  const product = response.data.data
  return {product}
}

function SingleProduct() {
  const {product} = useLoaderData();
  const {image, title, price, company, description, colors} = product.attributes;
  const [productColor, setProductColor] = useState(colors[0])
  const [quantity, setQuantity] = useState(1)

  const handleQuantity = (e)=>{
    setQuantity(parseInt(e.target.value))
  }

  const cartProduct = {
    cartID:product.id + productColor,
    productID: product.id,
    image, price, title, company, productColor, quantity
  }
  const dispatch = useDispatch()
  const handleAddToCart =()=>{
    dispatch(addItem({product:cartProduct}))
  }
  const dollarAmount = formatPrice(price)
  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li> <Link to='/' >Home</Link></li>
          <li><Link to='/products'>Products</Link></li>
        </ul>
      </div>
        {/* PRODUCTS */}
        <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
          <img src={image} alt="" className="w-96 h-96 object-cover rounded-lg lg:w-full" />
          <div>
            <h1 className="text-3xl capitalize font-bold">{title}</h1>
            <h4 className="text-lg text-neutral-content font-bold mt-2">{company}</h4>
            <p className="text-lg mt-3">{dollarAmount}</p>
            <p className="mt-6 leading-8">{description}</p>
            <div className="mt-6">
              <h4 className="text-md font-medium tracking-wider capitalize">colors</h4>
              <div className="mt-2">
                  {colors.map(color=>{
                    return <button type="button" key={color}
                    className={`badge w-6 h-6 mr-2 ${color === productColor && ' border-2 border-secondary'}`}
                      style={{backgroundColor:color}} onClick={()=>setProductColor(color)}></button>
                  })}
              </div>

                <div className="form-control w-full max-w-xs">
                  <label className="label" htmlFor="quantity">
                    <h4 className="text-md font-medium tracking-wider capitalize">Quantity</h4>
                  </label>
                    <select id="quantity" className="select select-secondary select-bordered select-md"
                        value={quantity} onChange={handleQuantity}>
                      {generateQuantityOptions(10)}
                    </select>

                </div>
                <div className="mt-10">
                  <button className="btn btn-secondary btn-md" onClick={handleAddToCart}>Add to bag</button>
                </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default SingleProduct