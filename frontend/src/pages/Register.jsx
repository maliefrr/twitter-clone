import React, { useState } from 'react'
// import { useEffect } from 'react'

const Register = () => {
    const [formData,setFormData] = useState({
        name: "",
        email: "",
        password: "",
        passwordConfirmation: ""
    })

    const {name,email,password,passwordConfirmation} = formData

    

    const onChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name] : e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        console.log(formData)
        setFormData(() => ({
            name: "",
            email: "",
            password: "",
            passwordConfirmation: ""
        }))
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
                    <button type='submit' className='px-6 py-1 text-white rounded-full bg-[#1A8CD8] hover:bg-[#1584ce]'>Register</button>
                </div>
            </form>
        </>
    )
}

export default Register
