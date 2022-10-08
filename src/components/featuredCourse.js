import React from 'react'

const FeaturedCourse = () => {
    return (
        <div className="flex flex-col bg-gray-200 rounded-lg p-4 m-2">
            <div className="h-40 bg-gray-400 rounded-lg">Course Style</div>
            <div className="flex flex-col items-start mt-4">
                <h4 className="text-xl font-semibold">HTML</h4>
                <p className="text-sm">The Complete 2022 Web Development Bootcamp</p>
            </div>
        </div>
    )
}

export default FeaturedCourse