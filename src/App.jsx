import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import {About, HomeLayout, Login, Landing, Checkout,
   Orders, Cart, Products, SingleProduct, Error, Register} from './pages'
import { ErrorElement } from './components'
// LOADERS
import {loader as landingLoader} from './pages/Landing'
import {loader as singleProductLoader} from './pages/SingleProduct'
import {loader as productsLoader} from './pages/Products'
import {loader as checkoutLoader} from './pages/Checkout'
import {loader as ordersLoader} from './pages/Orders'


// ACTIONS
import {action as registerAction } from './pages/Register';
import {action as loginAction} from './pages/Login'
import {action as checkoutAction } from './components/CheckoutForm'


const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime: 1000 * 60 *5
    },
  },
});
import { store } from './store'
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
          loader:landingLoader(queryClient)
        },
        {
          path:'products',
          element:<Products />,
          errorElement:<ErrorElement />,
          loader:productsLoader(queryClient)
        },
        {
          path:'product/:id',
          element:<SingleProduct />,
          errorElement:<ErrorElement />,
          loader:singleProductLoader(queryClient)
        },
        {
          path:'cart',
          element:<Cart />,
          errorElement:<ErrorElement />
        },
        {
          path:'orders',
          element:<Orders />,
          errorElement:<ErrorElement />,
          loader:ordersLoader(store, queryClient)
        },
        {
          path:'checkout',
          element:<Checkout />,
          errorElement:<ErrorElement />,
          loader:checkoutLoader(store),
          action:checkoutAction(store, queryClient)
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
      errorElement:<Error />,
      action:loginAction(store)
    },
    {
      path:'/register',
      element:<Register />,
      errorElement:<Error />,
      action:registerAction
    }
   ])
function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false}/>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App
