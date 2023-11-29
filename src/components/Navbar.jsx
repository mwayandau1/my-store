import { NavLink } from "react-router-dom"
import {FaBarsStaggered} from 'react-icons/fa6'
import {BsMoonFill, BsCart3, BsSunFill} from 'react-icons/bs'
import {NavLinks} from "../components"
function Navbar() {
  return (
    <nav className="bg-base-200">
        <div className="align-elements navbar">
            <div className="navbar-start">
                <NavLink to='/' className='hidden lg:flex btn btn-secondary text-3xl items-center'>M-store</NavLink>
                {/* DROPDOWN */}
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <FaBarsStaggered className="h-6 w-6" />
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200">
                    <NavLinks />

                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal">
                    <NavLinks />
                </ul>
            </div>
            <div className="navbar-end">
            {/* THEMES */}
            {/* CART */}
            <NavLink to='/cart' className="btn btn-ghost btn-circle btn-md ml-4" >
                <div className="indicator">
                <BsCart3 className="h-6 w-6" />
                <span className="badge badge-sm badge-secondary indicator-item">9</span>
                </div>
            </NavLink>
            </div>
        </div>
    </nav>
  )
}

export default Navbar