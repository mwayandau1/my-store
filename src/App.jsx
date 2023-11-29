import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {About, HomeLayout, Login, Landing, Checkout,
   Orders, Cart, Products, SingleProduct, Error, Register} from './pages'


   const router = createBrowserRouter([
    {
      path:'/',
      element:<HomeLayout />,
      errorElement:<Error />,
      children:[
        {
          index:true,
          element:<Landing />
        },
        {
          path:'products',
          element:<Products />
        },
        {
          path:'product/:id',
          element:<SingleProduct />
        },
        {
          path:'cart',
          element:<Cart />
        },
        {
          path:'orders',
          element:<Orders />
        },
        {
          path:'checkout',
          element:<Checkout />
        },
        {
          path:'about',
          element:<About />
        }


      ]
    },
    {
      path:'/login',
      element:<Login />,
      errorElement:<Error />
    },
    {
      path:'/register',
      element:<Register />,
      errorElement:<Error />
    }
   ])
function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
