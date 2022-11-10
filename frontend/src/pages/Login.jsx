import React from 'react'

const Login = () => {
    return (
        <>
        <h1>Login</h1>
        <div>
            <label htmlFor='email'>
                Email
                <input type="email" name="email" id='email' className='border'/>
            </label>
        </div>
        <div>
            <label htmlFor='password'>
                Password
                <input type="password" name="password" id='password' className='border'/>
            </label>
        </div>
        </>
    )
}

export default Login
