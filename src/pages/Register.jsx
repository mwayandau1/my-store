import { Form, Link } from "react-router-dom";
import { FormInput, SubmitButton } from "../components";
function Registers() {
  return (
  <section className="h-screen grid place-items-center">
    <Form method='post' className=' card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'>
    <h3 className="text-center text-3xl font-bold">Register</h3>
    <FormInput type='text' name='username' defaultValue='moses' label='Username' />
    <FormInput type='email' name='email' defaultValue='test@test.com' label='Email'/>
    <FormInput type='password' name='password' defaultValue='secret' label='Password'/>
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