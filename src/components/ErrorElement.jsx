import { useRouteError } from "react-router-dom"
function ErrorElement() {
    const routerError = useRouteError()

    if(routerError.status === 404){
        return (
            <main min-h-screen grid place-items-center>
              <div className="text-center">
              <p className="text-9xl font-semibold text-primary">404</p>
              <h1 className="mt-4 font-bold tracking-tight text-3xl sm:text-5xl">Page not found!!</h1>
              <p className="mt-6 text-lg leading-7">Sorry, we couldn't find the page you are looking for</p>
              <div className="mt-10">
                <Link to='/' className="btn btn-secondary">Back Home</Link>
              </div>
              </div>

            </main>
          )
    }
  return (
    <div>ErrorElement</div>
  )
}

export default ErrorElement