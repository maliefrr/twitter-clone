import React from 'react'
import { FaUserAlt } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {reset,logout} from "../features/auth/authSlice"
const Navbar = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {user} = useSelector((state) => state.auth)

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate("/")
    }

    return (
        <div>
            <ul className='flex justify-around'>
                {user ? (
                <button onClick={onLogout}>Logout</button>
                )
                    :
                (
                    <>
                    <li className='hover:text-[#1D9BF0] hover:duration-500'><Link to="/">Dashboard</Link></li>
                    <li><Link to="/login" className='hover:text-[#1D9BF0] hover:duration-500'>Login</Link></li>
                    <li><Link to="/register" className='hover:text-[#1D9BF0] hover:duration-500'>
                        <div className='flex items-center'>
                            <FaUserAlt  className='mr-2'/> 
                            Register
                        </div>
                    </Link>
                    </li>
                    </>
                )
            }
            </ul>
        </div>
    )
}

export default Navbar
