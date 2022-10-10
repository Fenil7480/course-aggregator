import { useState } from 'react';
import AdminCourseAdd from '../components/adminCourseAdd';
import Button from '../components/button';
import Link from 'next/link';
import { useRouter } from 'next/router';
import axios from 'axios';

const CreateCourse = ({ api_url }) => {
  const router = useRouter();
  // const api_url = process.env.API_HOST

  const [titleState, setTitleState] = useState('');
  const [authorState, setAuthorState] = useState('');
  const [priceState, setPriceState] = useState('');
  const [technologyState, setTechnologyState] = useState('');
  const [descriptionState, setDescriptionState] = useState('');
  const [urlState, setUrlState] = useState('');
  const [ratingState, setRatingState] = useState('');

  const handleSubmit = async (e) => {
    console.log('submit');
    axios
      .post(`${api_url}/courses`, {
        title: titleState,
        author: authorState,
        price: priceState,
        technology: technologyState,
        description: descriptionState,
        url: urlState,
        rating: ratingState,
        slug: titleState.replace(/\s+/g, '-').toLowerCase(),
      })

      .then((res) => {
        console.log(res);
        router.push('/courseDashboard');
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  return (
    <main id='main'>
      <div className='flex mt-32 flex-col justify-center w-3/6 m-auto'>
        <Link
          href='../courseDashboard'
          target='_blank'
          rel='noopener noreferrer'
        >
          <a className='hover:underline hover:text-blue-600 w-fit'>
            {' '}
            &lsaquo; Back
          </a>
        </Link>
        <h1>Create Course</h1>
        <AdminCourseAdd
          name='Title'
          placeHolder='Title'
          tooltiptext='The title of the Web3 course.'
          value={titleState}
          setValue={setTitleState}
        />
        <AdminCourseAdd
          name='Author'
          placeHolder='Author'
          tooltiptext='The person or business that published the Web3 course.'
          value={authorState}
          setValue={setAuthorState}
        />
        <AdminCourseAdd
          name='Price'
          placeHolder='Price for the course'
          tooltiptext='The price of the course. If free, input 0.'
          value={priceState}
          setValue={setPriceState}
        />
        <AdminCourseAdd
          name='Technology'
          placeHolder='Technologies E.g, NFT, BLOCKCHAIN'
          tooltiptext='Three to five technologies this course covers.'
          value={technologyState}
          setValue={setTechnologyState}
        />
        <AdminCourseAdd
          name='Description'
          placeHolder='Description about the course'
          tooltiptext='The description of the course.'
          value={descriptionState}
          setValue={setDescriptionState}
        />
        <AdminCourseAdd
          name='URL'
          placeHolder='E.g, www.example.com'
          tooltiptext='The full URL linking back to the course page.'
          value={urlState}
          setValue={setUrlState}
        />
        <AdminCourseAdd
          name='Rating'
          placeHolder='E.g, 4.5'
          tooltiptext='The rating for the course out of 5.'
          value={ratingState}
          setValue={setRatingState}
        />
        <div className='mt-5'>
          <Button type='submit' onClick={handleSubmit}>
            Add Course
          </Button>
        </div>
      </div>
    </main>
  );
};

export default CreateCourse;

export async function getStaticProps() {
  const api_url = 'https://web3-courses.herokuapp.com/api';
  return {
    props: {
      api_url,
    },
  };
}
