import React from 'react'
import { FaUserAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Navbar = () => {

    const {user} = useSelector((state) => state.auth)
    return (
        <div>
            <ul className='flex justify-around'>
                {user ? (
                <button>Logout</button>
                )
                    :
                (
                    <>
                    <li className='hover:text-[#1D9BF0] hover:duration-500'><Link to="/">Dashboard</Link></li>
                    <li><Link to="/login" className='hover:text-[#1D9BF0] hover:duration-500'>Login</Link></li>
                    <li><Link to="/register" className='hover:text-[#1D9BF0] hover:duration-500'><FaUserAlt /> Register</Link></li>
                    </>
                )
            }
            </ul>
        </div>
    )
}

export default Navbar
