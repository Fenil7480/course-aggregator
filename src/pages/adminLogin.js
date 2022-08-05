import React, { useState } from 'react'
import Router from 'next/router'
import Input from '../components/input'
import Button from '../components/button'

const AdminLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);
        if (email === "admin" && password === "password") {
            Router.push('/courseDashboard')
        }
        else {
            // alert('Login Failed')
        }

    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div className='bg-blue-800 flex justify-end bg-squares bg-logo'>
            <div className='w-1/2 bg-white-100'>
                <form onSubmit={handleSubmit} className='flex my-16 flex-col justify-center w-3/6 m-auto'>
                    <h1 className='leading-snug'>Administrator Login</h1>
                    <Input type="text" placeholder='Email Address' handleInputChange={handleEmailChange} />
                    <Input type="password" placeholder='Password' handleInputChange={handlePasswordChange} />
                    {email !== "admin" && password !== "password" && <p className='text-lg text-white-100 my-5 py-2 px-5 rounded-lg bg-red-500'>Please Enter correct username and password</p>}
                    <div className='pt-5'>
                        <Button submit onSubmit={handleSubmit}>Login</Button>
                    </div>
                    {/* <p>Failed</p> */}
                </form>
            </div>
        </div>
    )
}

export default AdminLogin