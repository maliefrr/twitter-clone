import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
            <ul className='flex justify-around'>
                <li className='hover:text-[#1D9BF0] hover:duration-500'><Link to="/">Dashboard</Link></li>
                <li><Link to="/login" className='hover:text-[#1D9BF0] hover:duration-500'>Login</Link></li>
                <li><Link to="/register" className='hover:text-[#1D9BF0] hover:duration-500'>Register</Link></li>
            </ul>
        </div>
    )
}

export default Navbar
