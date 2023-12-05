import { useLoaderData } from 'react-router-dom'
import { useState } from 'react'
import { BsFillGridFill, BsList } from 'react-icons/bs'
import {ProductGrid, ProductList} from '../components'

function ProductContainer() {
    const {meta} = useLoaderData();
    const totalProducts = meta.pagination.total;
    const [layout, setLayout] = useState('grid')

    const activeStyles = (pattern)=>{
        return `text-xl btn btn-circle btn-md ${
            pattern === layout? 'btn-secondary text-secondary-content'
            :'btn-ghost text-base-content'
        }`
    }


  return (
    <div>
        {/* HEADER */}
        <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
            <h4 className="text-md font-medium"> {totalProducts} product{totalProducts>1 && 's'}</h4>
            <div className="flex gap-x-4">
                <button type="button" onClick={()=>setLayout('grid')}className={activeStyles('grid')}> <BsFillGridFill /></button>
                <button type="button" onClick={()=>setLayout('list')} className={activeStyles('list')}><BsList /></button>
            </div>
        </div>
        {/* PRODUCTS */}
        <div>
            {totalProducts < 1 && <h5 className="text-lg mt-16">Sorry, no product matches your search</h5>}
           {layout === 'grid' && <ProductGrid />}
           {layout === 'list' && <ProductList />}
        </div>

    </div>
  )
}

export default ProductContainer