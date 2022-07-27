import React from 'react'

const AdminLogin = () => {
    return (
        <div className='flex mt-32 flex-col justify-center w-3/6 m-auto'>
            <h1 className=''>Administrator Login</h1>
            <input className='border border-gray-400 py-2 px-5 mt-5 rounded-md' type="email" placeholder='Email Address' />
            <input className='border border-gray-400 py-2 px-5 mt-5 rounded-md' type="password" placeholder='Password' />
            <button className='bg-blue-500 rounded-md px-5 py-2 mt-5 w-fit mb-24' type="submit">Login</button>
        </div>
    )
}

export default AdminLogin