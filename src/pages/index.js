// import logo from './logo.svg';
// import './App.css';
// import Image from "next/image";
import styles from "../styles/Home.module.css";
import FeaturedCourses from '../components/featuredCourses';
import Banner from '../components/banner';
// import AboutPartHome from '../components/AboutPartHome';
// import Carousal from '../components/Carousal';

export default function Home() {
  return (
    <div className='w-10/12 m-auto'>
      <div className="App">
        {/* <Carousal /> */}

        {/*Features part start*/}
        <Banner />
        {/*Features part*/}

        {/*About card view start*/}
        {/* <AboutPartHome /> */}
        {/*About card view end*/}


        {/*Card for courses start*/}
        <FeaturedCourses />
        {/*Card for courses end*/}

      </div>
    </div>
  );
}

