import React from 'react'
import Link from 'next/link'

const CourseCard = ({course}) => {
    return (
        <Link href={"details/"+course?.slug} target="_blank" course={course} rel="noopener noreferrer">
            <div className='hoverCard flex flex-col bg-white-100 rounded-3xl overflow-hidden cursor-pointer drop-shadow-md hover:drop-shadow-lg duration-300'>
                <div className='overflow-hidden relative bg-blue-600'>
                    <img className='card-image rounded-tr-3xl opacity-50' src="interface/pattern.svg" alt="Patterned background for course card" />
                    <p className='p-4 font-bold text-white-100 absolute bottom-0 text-lg sm:text-xl leading-relaxed sm:leading-relaxed'>{course?.technology.map((val, index) => index > 0 ? `, ${val}` : val)}</p>
                </div>
                <div className='flex flex-col px-4'>
                    <h3 className='leading-snug mt-2'>{course?.title}</h3>
                    <p className=''>{course?.author}</p>
                    <p className='text-2xl pt-3 pb-6'>{(course?.price && course.price > 0) ? `$${course.price}` : "Free" }</p>
                </div>
            </div >
        </Link>
    )
}

export default CourseCard