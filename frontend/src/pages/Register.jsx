import React from 'react'
import {FaUserPlus} from 'react-icons/fa'
import { useState,useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import Spinner from '../components/Spinner'
import { reset, register } from '../features/auth/authSlice'

const Register = () => {
    const [formData,setFormData] = useState({
        name: "",
        email: "",
        password: "",
        passwordConfirmation: ""
    })

    const {name,email,password,passwordConfirmation} = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user,isLoading,isSuccess,isError,message} = useSelector((state) => state.auth)
    

    useEffect(() => {
        if(isError) {
            toast.error(message)
        }
        if(isSuccess || user) {
            toast.success("User successfully registered")
            navigate("/")
        }

        dispatch(reset())
    },[user,isSuccess,isError,message,navigate,dispatch])

    const onChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name] : e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if(password !== passwordConfirmation) {
            toast.error("Password and password confirmation do not match")
        } else {
            const userData = {
                name,email,password,passwordConfirmation
            }
            dispatch(register(userData))
        }
        setFormData(() => ({
            name: "",
            email: "",
            password: "",
            passwordConfirmation: ""
        }))
    }

    if(isLoading) {
        return <Spinner /> 
    }

    return (
        <>
            <h1>Register</h1>
            <form action="" onSubmit={onSubmit}>

                <div>
                    <label htmlFor='name'>
                        Name
                        <input 
                            type="text" 
                            name="name" 
                            id="name"  
                            className='border mx-2' 
                            value={name}
                            onChange={onChange}
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor='email'>
                        Email
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            className='border mx-2' 
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
                            id="password" 
                            className='border mx-2' 
                            value={password}
                            onChange={onChange}
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor='passwordConfirmation'>
                        Password Confirmation
                        <input 
                            type="password" 
                            name="passwordConfirmation" 
                            id="passwordConfirmation" 
                            className='border mx-2' 
                            value={passwordConfirmation}
                            onChange={onChange}    
                        />
                    </label>
                </div>
                <div>
                    <button type='submit' className='px-6 py-1 text-white rounded-full bg-[#1A8CD8] hover:bg-[#1584ce]'>
                        <div className='flex items-center'>
                        <FaUserPlus className='mr-1'/>
                        Register
                        </div>
                        </button>
                </div>
            </form>
        </>
    )
}

export default Register
