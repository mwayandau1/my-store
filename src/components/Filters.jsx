import { Form, useLoaderData, Link } from "react-router-dom"
import {FormInput, FormSelect, FormRange, FormCheckbox} from '../components'
function Filters() {
  const {meta, params} = useLoaderData();
  const {search, company, shipping, order, category, price} = params
  return (
    <Form  className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3
                        lg:grid-cols-4 items-center">
        {/* SEARCH */}
      <FormInput type='search' label='search products' name='search' size='input-sm' defaultValue={search}/>

      {/* CATEGORIES */}
      <FormSelect name='categories' label='categories' list={meta.categories} size='select-sm' defaultValue={category}/>
      {/* COMPANY */}
      <FormSelect name='company'label='company'list={meta.companies} size='select-sm' defaultValue={company}/>
      {/* ORDERS */}
      <FormSelect name='order'label='sort by'list={['a-z', 'z-a', 'high', 'low']} size='select-sm' defaultValue={order}/>

      {/* PRICE */}
      <FormRange name='price' label='select price' size='range-sm' price={price}/>
      {/* SHIPPING */}
      <FormCheckbox name='shipping' label='free shipping' size='checkbox-sm' defaultValue={shipping} />
        {/* BUTTON */}
        <button type="submit" className="btn btn-primary btn-sm">
          search
        </button>
        <Link to='/products' className='btn btn-accent btn-sm'>reset</Link>
    </Form>
  )
}

export default Filters