import { Form, Link } from 'react-router-dom'
import { FormInput, SubmitButton } from '../components'

function Login() {
  return (
  <section className='h-screen grid place-items-center'>
    <Form method='post' className=' card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'>

    <FormInput type='email' name='identifier' defaultValue='test@test.com' label='Email' />
    <FormInput type='password' name='password' label='Password' defaultValue='secret' />
    <div className="mt-4">
      <SubmitButton text='Login' />
    </div>
    <button type="button" className='mt-3 btn btn-secondary btn-block'>Guest user</button>
    <p className="  text-center">
      Not registered yet?
      <Link to='/register' className='ml-3 link link-hover link-primary capitalize text-secondary' >register</Link>
    </p>
    </Form>
</section>
  )
}

export default Login