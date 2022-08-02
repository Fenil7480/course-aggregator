import React,{useState} from 'react'
import Router from 'next/router'

const AdminLogin = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email,password);
        if(email === "admin" && password === "password"){
            Router.push('/courseDashboard')
        }
        else{
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
        <form onSubmit={handleSubmit} className='flex mt-32 flex-col justify-center w-3/6 m-auto'>
            <h1 className=''>Administrator Login</h1>
            <input className='border border-gray-400 py-2 px-5 mt-5 rounded-md' type="text" placeholder='Email Address' onChange={handleEmailChange} />
            <input className='border border-gray-400 py-2 px-5 mt-5 rounded-md' type="password" placeholder='Password' onChange={handlePasswordChange}/>
            {email!=="admin" && password!=="password" && <p className='text-lg mt-5'>Please Enter correct username and password</p>}
            <button className='bg-blue-500 rounded-md px-5 py-2 mt-5 w-fit mb-24' type="submit" onSubmit={handleSubmit}>Login</button>
            {/* <p>Failed</p> */}
        </form>
    )
}

export default AdminLogin