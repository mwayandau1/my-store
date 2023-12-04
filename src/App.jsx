import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {About, HomeLayout, Login, Landing, Checkout,
   Orders, Cart, Products, SingleProduct, Error, Register} from './pages'
import { ErrorElement } from './components'
import {loader as landingLoader} from './pages/Landing'
import {loader as singleProductLoader} from './pages/SingleProduct'
import {loader as productsLoader} from './pages/Products'

   const router = createBrowserRouter([
    {
      path:'/',
      element:<HomeLayout />,
      errorElement:<Error />,
      children:[
        {
          index:true,
          element:<Landing />,
          errorElement:<ErrorElement />,
          loader:landingLoader
        },
        {
          path:'products',
          element:<Products />,
          errorElement:<ErrorElement />,
          loader:productsLoader
        },
        {
          path:'product/:id',
          element:<SingleProduct />,
          errorElement:<ErrorElement />,
          loader:singleProductLoader
        },
        {
          path:'cart',
          element:<Cart />,
          errorElement:<ErrorElement />
        },
        {
          path:'orders',
          element:<Orders />,
          errorElement:<ErrorElement />
        },
        {
          path:'checkout',
          element:<Checkout />,
          errorElement:<ErrorElement />
        },
        {
          path:'about',
          element:<About />,
          errorElement:<ErrorElement />
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
