// import logo from './logo.svg';
// import './App.css';
// import Image from "next/image";
import styles from "../styles/Home.module.css";
import FeaturedCourses from "../components/featuredCourses";
import Banner from "../components/banner";
import Header from '../components/Header'
import Button from '../components/button'
import Container from '../components/container'
import Link from 'next/link'

// import AboutPartHome from '../components/AboutPartHome';
// import Carousal from '../components/Carousal';

export default function Home() {
  return (
      <div className="App">
        <Header>
            <h1>Your ticket into <span className="text-blue-600">Web3</span> is here!</h1>
            <p className='text-xl mb-8'>Get a curated list of the best Web3 courses to get you <br/>started on your journey.</p>
            <Link href="./courses" target="_blank" rel="noopener noreferrer">
              <Button>View Courses</Button>
            </Link>
        </Header>
        <section className="bg-blue-800 pt-12 pb-24">
          <Container>
            <FeaturedCourses />
          </Container>
        </section>
      </div>
  );
}
