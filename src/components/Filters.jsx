import { Form, useLoaderData, Link } from "react-router-dom"
import {FormInput, FormSelect} from '../components'
function Filters() {
  const {meta} = useLoaderData()
  return (
    <Form  className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3
                        lg:grid-cols-4 items-center">
        {/* SEARCH */}
      <FormInput type='search' label='search products' name='search' size='input-sm' />

      {/* CATEGORIES */}
      <FormSelect name='categories' label='categories' list={meta.categories} size='select-sm'/>
      {/* COMPANY */}
      <FormSelect name='company'label='company'list={meta.companies} size='select-sm' />
      {/* ORDERS */}
      <FormSelect name='order'label='sort by'list={['a-z', 'z-a', 'high', 'low']} size='select-sm' />

        {/* BUTTON */}
        <button type="submit" className="btn btn-primary btn-sm">
          search
        </button>
        <Link to='/products' className='btn btn-accent btn-sm'>reset</Link>
    </Form>
  )
}

export default Filters