import React, { useState, useEffect } from 'react';
import CourseCard from '../components/courseCard';
import Container from '../components/container';
import Header from '../components/Header';

const Courses = ({ courses }) => {
  //for technology filter
  let coursetech = courses.map((course, index) => {
    let tech = course.technology;
    return tech;
  });
  console.log(coursetech);

  var allTech = [];

  coursetech.forEach(function (e) {
    e.forEach(function (e1) {
      allTech.push(e1);
    });
  });
  let uniqueTech = [...new Set(allTech)];
  const [tech, setTech] = useState('all');
  const handleChange = (e) => {
    setTech(e.target.value);
  };

  // for price filter
  const currentPrice = '';
  const [price, setPrice] = useState('all');
  let handlingChange = (e) => {
    setPrice(e.target.value);
    // console.log("setprice", setPrice);
    currentPrice = e.target.value;
    // console.log("CUrrent price " + currentPrice);
  };
  // console.log("price " + price);

  const filteredCourse = courses.filter((course) => {
    let arrayTech = Object.values(course.technology);
    let arrayPrice = Object.values(course.price);
    // console.log("course", course.price);

    // console.log("array price ", arrayPrice);
    // console.log("array tech ", arrayTech);
    if (tech === 'all' && price == 'all') {
      return course;
    } else if (arrayTech.includes(tech)) {
      return course;
    } else if (price === 'free' && course.price === 0) {
      return course;
    } else if (price === 'paid' && course.price !== 0) {
      return course;
    }
  });
  useEffect(() => {}, [tech]);
  useEffect(() => {}, [price]);
  return (
    <>
      <Header>
        <div className='py-12'>
          <h1>Courses</h1>
          <p className='text-xl mb-8'>
            Get a curated list of the best Web3 courses to get you <br />
            started on your journey.{' '}
          </p>
        </div>
      </Header>
      <main id='main' className='bg-blue-800 pt-12 pb-24'>
        <Container>
          <div className='flex justify-between text-2xl my-5  mobilecolumn'>
            <div className='flex justify-between mobilecolumn'>
              <label className='text-white-100'>Filter technology: </label>
              <select
                className='border-blue-500 border-2 rounded-lg ml-2'
                onChange={handleChange}
              >
                <option value='all'>All</option>
                {uniqueTech.map((tech, index) => {
                  return (
                    <option key={index} value={tech}>
                      {tech}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className='flex justify-between mobilecolumn'>
              <label className='text-white-100'>Category: </label>
              <select
                className='border-blue-500 border-2 rounded-lg ml-2'
                onChange={handlingChange}
              >
                <option value='all'>All</option>
                <option value='free'>Free</option>
                <option value='paid'>Paid</option>
                {/* {courses.map((price) => (
                  <option value={price.price}>{price.price}</option>
                ))} */}
              </select>
            </div>
          </div>
          <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-9 my-10'>
            {filteredCourse.map((course) => {
              return <CourseCard key={course._id} course={course} />;
            })}
          </div>
        </Container>
      </main>
    </>
  );
};

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(`https://web3-courses.herokuapp.com/api/courses`);
  const courses = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      courses,
    },
  };
}

export default Courses;
