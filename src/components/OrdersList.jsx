import { useLoaderData } from "react-router-dom"
import day from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'
day.extend(advancedFormat)
function OrdersList() {
  const {orders, meta} = useLoaderData()
  return (
    <div className="mt-6">
      <h4 className="mb-4 capitalize">
        Total orders: {meta.pagination.total}
      </h4>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Product</th>
            <th>Cost</th>
            <th className="hidden sm:block">Date</th>
          </tr>
          </thead>
          <tbody>
            {orders.map(order =>{
            const {orderTotal, name, address, numItemsInCart, createdAt} = order.attributes;
            const date = day(createdAt).format('hh:mm a -MMM Do, YYYY')
              return (
                <tr key={order.id}>
                  <td>{name}</td>
                  <th>{address}</th>
                  <th>{numItemsInCart}</th>
                  <th>{orderTotal}</th>
                  <th className="hidden sm:block">{date}</th>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default OrdersList