import React from 'react'
import Container from "./container";

const Header = ({blue, children}) => {
    
    return (
        <header className={`${blue ? "bg-blue-800 text-white-100" : "bg-white-100 text-black"} relative px-8 lg:px-16 text-center py-24`}>
            <Container>
                {children}
            </Container>
            <div className={`headerDivider w-4/12 h-16 rounded-tl-full absolute right-0 bottom-0 ${blue ? "bg-white-100" : "bg-blue-800"}`}></div>
            <img className='absolute bottom-0 right-6 h-32 w-auto mobilehide' src='../interface/squares2.svg' />
        </header>
    )
}

export default Header