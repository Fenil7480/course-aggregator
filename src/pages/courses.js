import React from 'react'
import CourseCard from '../components/courseCard'
import Container from '../components/container'
import Header from '../components/Header'

const Courses = ({courses}) => {
    return (
        <>
        <Header>
            <div className='py-12'>
                <h1>Courses</h1>
                <p className='text-xl mb-8'>Get a curated list of the best Web3 courses to get you <br/>started on your journey. </p>
            </div>
        </Header>
        <section className='bg-blue-800 pt-12 pb-24'>
            <Container>
                <div className='flex justify-center text-2xl my-5 space-x-24'>
                    <div className='flex justify-between'>
                        <label className='text-white-100'>Filter technology:  </label>
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
                    {courses.map((course) => 
                        (<CourseCard course={course} />)
                    )}
                </div>
            </Container>
        </section>
        </>
    )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('http://localhost:4000/api/courses')
    const courses = await res.json()
  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        courses,
      },
    }
  }

export default Courses