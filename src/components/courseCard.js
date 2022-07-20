import React from 'react'

const CourseCard = () => {
    return (
        <div className='flex flex-col w-72 bg-blue-300 rounded-tr-3xl overflow-hidden my-6 mx-6'>
            <img className='rounded-tr-3xl hover:scale-110 each-out duration-300 cursor-pointer' src="https://assets-global.website-files.com/6171e9fea621c60456b9f9ad/6279914cc3535506b7dff479_nft.png" alt="nft" />
            <div className='flex flex-col m-3'>
                <h3 className='leading-9'>How to build your first NFT</h3>
                <div className='flex justify-between'>
                    <h5 className='text-blue-600 mt-5'><span className='bg-blue-400 py-1 px-1.5 rounded-md'>NFT</span>&nbsp;&nbsp;&nbsp;<span className='bg-blue-400 py-1 px-1.5 rounded-md'>Solidity</span></h5>
                    <p className='text-lg mt-4'>FREE</p>
                </div>
            </div>
        </div >
    )
}

export default CourseCard