import React from 'react'
import AdminCourseAdd from '../components/adminCourseAdd'

const EditCourse = () => {
    return (
        <div className="flex mt-32 flex-col justify-center w-3/6 m-auto">
            <AdminCourseAdd name='Title' placeHolder="Title of the course" />
            <AdminCourseAdd name='Author' placeHolder="Author of the course" />
            <AdminCourseAdd name='Price' placeHolder="Price for the course" />
            <AdminCourseAdd name='Technology' placeHolder="Technologies this course covers" />
            <AdminCourseAdd name='Description' placeHolder="Description about the course" />
            <AdminCourseAdd name='URL' placeHolder="URL of the source" />
            <AdminCourseAdd name='Rating' placeHolder="Rating for this course" />
            <button className='bg-blue-500 rounded-md px-5 py-2 mt-5 w-fit mb-24' type="submit">Add Course</button>
        </div>
    )
}

export default EditCourse