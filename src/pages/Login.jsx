import { Form, Link, redirect, useNavigate } from 'react-router-dom'
import { FormInput, SubmitButton } from '../components'
import { customFetch } from '../utils'
import { toast } from 'react-toastify'
import { loginUser } from '../features/user/userSlice'
import { useDispatch } from 'react-redux'


export const action =(store)=> async({request}) =>{
  const formData = await request.formData();
  const data = Object.fromEntries(formData)

  try{
    const response = await customFetch.post('auth/local/',data)
    store.dispatch(loginUser(response.data))
    toast.success("You are logged in")
    return redirect('/')
  }

  catch (error){
    const errorMessage = error?.response?.data?.error?.message ||
  'Please make sure your credentials are all correct'
  toast.error(errorMessage)

  }
  console.log(store)
  return null;
}
function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const loginAsGuestUser = async()=>{
    try{
      const response = await customFetch.post('/auth/local',{
        identifier:'test@test.com',
        password:'secret'
      })
      dispatch(loginUser(response.data))
      toast.success("You are logged in as guest")
      // redirect('/')
      navigate('/')
    }
    catch (error){
      const errorMessage = error?.response?.data?.error?.message
      || "Please something went wrong"

    }
  }
  return (
  <section className='h-screen grid place-items-center'>
    <Form method='post' className=' card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'>

    <FormInput type='email' name='identifier'  label='Email' />
    <FormInput type='password' name='password' label='Password'  />
    <div className="mt-4">
      <SubmitButton text='Login' />
    </div>
    <button type="button" className='mt-3 btn btn-secondary btn-block' onClick={loginAsGuestUser}>Guest user</button>
    <p className="  text-center">
      Not registered yet?
      <Link to='/register' className='ml-3 link link-hover link-primary capitalize text-secondary' >register</Link>
    </p>
    </Form>
</section>
  )
}

export default Login