import React from 'react'
import CourseCard from '../components/courseCard'

const Courses = () => {
    return (
        <div className='w-10/12 m-auto'>
            <div className='flex justify-center text-2xl my-5 mt-10 space-x-24'>
                <div className='flex justify-between'>
                    <label>Filter technology:  </label>
                    <select className='w-max border-blue-500 border-2 rounded-lg ml-2'>
                        <option value='all'>All</option>
                        <option value='blockchain'>Blockchain</option>
                        <option value='web3'>Web3</option>
                        <option value='ethereum'>Ethereum</option>
                        <option value='solidity'>Solidity</option>
                    </select>
                </div>
                <select className='w-max border-blue-500 border-2 rounded-lg'>
                    <option value='all'>All</option>
                    <option value='free'>Free</option>
                    <option value='paid'>Paid</option>
                </select>
            </div>
            <div className='flex flex-wrap justify-center'>
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
            </div>
        </div>
    )
}

export default Courses