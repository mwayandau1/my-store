import { Link, NavLink, } from "react-router-dom"
function Header() {
  return (
    <header className="bg-neutral py-2 text-neutral-content">
        <div className="align-elements flex justify-center sm:justify-end">
            <div className="flex gap-x-6 justify-center items-center">
                <Link to='/login' className="link link-hover text-xs sm:text-sm">Login</Link>
                <Link to='/register' className="link link-hover text-xs sm:text-sm">Create An Account</Link>

            </div>
        </div>
    </header>
  )
}

export default Header