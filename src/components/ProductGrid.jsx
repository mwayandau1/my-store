import { Link, useLoaderData } from "react-router-dom"
import { formatPrice } from "../utils"
function ProductGrid() {
    const {products } = useLoaderData()
  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {products.map(product=>{
            const {price, image, title} = product.attributes;
            const dollarAmount = formatPrice(price)

            return <Link to={`/product/${product.id}`}
            key={product.id} className="card w-full shadow-xl hover:shadow-2xl transition duration-300">
                <figure className="pt-4 px-4">
                    <img src={image} alt={title} className="rounded-xl h-64 md:h-48 w-full object-cover" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title tracking-wider capitalize">{title}</h2>
                    <p className="text-secondary">${dollarAmount}</p>
                </div>

            </Link>
        })}
    </div>
  )
}

export default ProductGrid