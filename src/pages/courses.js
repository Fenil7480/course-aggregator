import React from 'react'
import CourseCard from '../components/courseCard'

const Courses = ({posts}) => {
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
            <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-9 my-10'>
                {posts.map((post, index) => 
                    (<CourseCard content={post} />)
                )}
            </div>
        </div>
    )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('http://localhost:4000/api/courses')
    const posts = await res.json()
  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        posts,
      },
    }
  }

export default Courses