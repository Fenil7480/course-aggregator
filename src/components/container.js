import React from 'react'

const Container = ({children}) => {
    return (
        <div className='w-10/12 m-auto max-w-6xl'>
            {children}
        </div>
    )
}

export default Container