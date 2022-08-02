import React from 'react'
import CourseRow from '../components/courseRow'
import Link from "next/link";


const CourseDashboard = ({ courses }) => {
    return (
        <div className='flex w-10/12 flex-col justify-center m-auto my-5'>
            <div className='flex justify-between'>
                <h1>Course List</h1>
                <div className='flex bg-blue-400 rounded-lg my-5 px-3 hover:scale-110 duration-200'>
                    <button className='text-xl'>Add Course</button>
                    <svg className='w-7 pl-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z" /></svg>
                </div>
            </div>
            <div>
                <table className='w-full border-collapse border-2 border-gray-400'>
                    <thead className="text-start">
                        <tr className='bg-blue-400 grid-cols-3 text-xl'>
                            <th className='py-5 px-4 row-span-2 text-start'>Title</th>
                            <th className='py-5 px-4'>Edit</th>
                            <th className='py-5 px-4'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.map(course => <CourseRow key={course.id} {...course} />)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const res = await fetch('http://localhost:4000/api/courses')
    const courses = await res.json()
    return {
        props: {
            courses
        },
    }
}

export default CourseDashboard
