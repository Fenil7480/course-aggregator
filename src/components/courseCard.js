import React from 'react'
import Link from 'next/link'

const CourseCard = (props) => {
    const dummy = {
        title: 'Ethereum developer bootcamp',
        author: 'web3.university',
        price: 'Free',
        technology: ["Cryptography","Etherem","Solidity","Decentralized Applications"],
    }
    return (
        <Link href="./details" target="_blank" rel="noopener noreferrer">
            <div className='hoverCard flex flex-col bg-white-100 rounded-3xl overflow-hidden cursor-pointer drop-shadow-md hover:drop-shadow-lg duration-300'>
                <div className='overflow-hidden relative bg-blue-600'>
                    <img className='card-image rounded-tr-3xl opacity-50' src="interface/pattern.svg" alt="Patterned background for course card" />
                    <p className='p-4 font-bold text-white-100 absolute bottom-0 text-lg sm:text-xl leading-relaxed sm:leading-relaxed'>{dummy.technology.map((val, index) => index > 0 ? `, ${val}` : val)}</p>
                </div>
                <div className='flex flex-col px-4'>
                    <h3 className=''>{dummy.title}</h3>
                    <p className=''>{dummy.author}</p>
                    <p className='text-2xl pt-3 pb-6'>{dummy.price}</p>
                </div>
            </div >
        </Link>
    )
}

export default CourseCard