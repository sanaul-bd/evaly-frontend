// Navbar.js
// import React from 'react';
import { FaCartArrowDown, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar bg-base-100 flex">
            <div className="navbar-start">
            <Link className='font-bold text-2xl' to={'/'}>Evaly</Link>
            </div>

            {/*  */}
            <div className="navbar-center hidden lg:flex px-10 ">
                <input type="text" placeholder="Search Items" className="input input-bordered w-72 max-w-xs focus:border-none bg-slate-100" />
                <button className='btn btn-outline ms-2 border-none bg-slate-200'>Search</button>
            </div>

            {/*  */}
            <div className="navbar-end flex gap-x-2 pe-3">
                <span className='px-4 py-3 bg-slate-200 cursor-pointer'><FaCartArrowDown /></span>
                <span className='flex items-center px-3 py-2 bg-slate-200 gap-x-1 cursor-pointer'><FaUser /><Link to={'/signin'}>Sign in</Link> </span>
            </div>
        </div>
    )
}

export default Navbar;
