import { Form, Link, redirect } from "react-router-dom";
import { FormInput, SubmitButton } from "../components";
import { customFetch } from "../utils";
import {toast} from 'react-toastify'


export const action = async({request}) =>{
  const formData = await request.formData();
  const data = Object.fromEntries(formData)
  try{
    const response = await customFetch.post('/auth/local/register/', data)
    toast.success("Account created successfully")
    return redirect('/login')
  }
  catch (error){
    const errorMessage = error?.response?.data?.error?.message ||
     "Please double check your credentials";
    toast.error(errorMessage)

  }
  return null;
}
function Registers() {

  return (
  <section className="h-screen grid place-items-center">
    <Form method='post' className=' card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'>
    <h3 className="text-center text-3xl font-bold">Register</h3>
    <FormInput type='text' name='username'  label='Username' />
    <FormInput type='email' name='email'  label='Email'/>
    <FormInput type='password' name='password' label='Password'/>
    <div className="mt-4">
      <SubmitButton text='register'/>
    </div>
    <p className="text-center">
      already have account ?? <Link to='/login' className="ml-3 link link-hover link-primary capitalize text-secondary">Login</Link>
    </p>
    </Form>
</section>
  )
}

export default Registers