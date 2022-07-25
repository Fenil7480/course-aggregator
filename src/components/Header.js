import React from 'react'

const Header = ({children}) => {
    return (
        <header className='bg-blue-800 text-white-100 container mx-auto px-8 lg:px-16'>
            {children}
        </header>
    )
}

export default Header