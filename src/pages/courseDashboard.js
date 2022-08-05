import React from 'react'
import CourseRow from '../components/courseRow'
import Link from "next/link";
import Button from '../components/button'


const CourseDashboard = ({ courses }) => {
    return (
        <div className='flex w-10/12 flex-col justify-center m-auto my-5'>
            <div className='flex justify-between items-center'>
                <h1>Course List</h1>
                <div className='h-fit'>
                    <Button>
                        <Link href="./createCourse">
                            Add Course
                        </Link>
                    </Button>
                </div>
            </div>
            <div className='rounded-3xl overflow-hidden shadow-lg mt-10'>
                <table className='w-full border-collapse'>
                    <thead className="text-start">
                        <tr className='bg-blue-400 grid-cols-3 text-xl'>
                            <th className='py-5 px-4'>Edit</th>
                            <th className='py-5 px-4'>Delete</th>
                            <th className='py-5 px-4 row-span-2 text-start'>Title</th>
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
