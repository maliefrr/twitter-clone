import React from 'react'
import {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { reset, login } from '../features/auth/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import Spinner from "../components/Spinner"

const Login = () => {
    const [formData,setFormData] = useState({
        email: "",
        password: ""
    })

    const {email,password} = formData

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {user,isLoading,isSuccess,isError,message} = useSelector((state) => state.auth)

    useEffect(() => {
        if(isError){
            toast.error(message)
        }
        if(isSuccess || user) {
            navigate("/")
        }

        dispatch(reset())
    },[isSuccess,isError,message,dispatch,navigate,user])

    const onChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name] : e.target.value
        }))
    }

    if(isLoading){
        return <Spinner />
    }

    const onSubmit = (e) => {
        e.preventDefault()

        const userData = {
            email,password
        }
        dispatch(login(userData))
        setFormData(() => ({
            email: "",
            password: ""
        }))
    }

    return (
        <>
        <h1>Login</h1>
        <form action="" onSubmit={onSubmit}>

            <div>
                <label htmlFor='email'>
                    Email
                    <input 
                        type="email" 
                        name="email" 
                        id='email' 
                        className='border'
                        value={email}
                        onChange={onChange}
                        />
                </label>
            </div>
            <div>
                <label htmlFor='password'>
                    Password
                    <input 
                        type="password" 
                        name="password" 
                        id='password' 
                        className='border'
                        value={password}
                        onChange={onChange}
                        />
                </label>
            </div>
            <div className='mt-3'>
                    <button type='submit' className='px-6 py-1 text-white rounded-full bg-[#1A8CD8] hover:bg-[#1584ce]'>
                        <div className='flex items-center'>
                        Register
                        </div>
                        </button>
                </div>
        </form>
        </>
    )
}

export default Login
