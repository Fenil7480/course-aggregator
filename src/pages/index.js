// import logo from './logo.svg';
// import './App.css';
// import Image from "next/image";
import styles from "../styles/Home.module.css";
import FeaturedCourses from "../components/featuredCourses";
import Banner from "../components/banner";
import Header from "../components/Header";
import Button from "../components/button";
import Container from "../components/container";
import Link from "next/link";

// import AboutPartHome from '../components/AboutPartHome';
// import Carousal from '../components/Carousal';

export default function Home({ courses }) {
  // console.log("Fetched course:", courses);
  // sorting function
  courses.sort((a, b) => {
    return b.rating - a.rating;
  });

  // console.log("After sorting course:", courses);
  let sortedCourses = courses;
  return (
    <div className="App">
      <Header>
        <h1>
          Your ticket into <span className="text-blue-600">Web3</span> is here!
        </h1>
        <p className="text-xl mb-8">
          Get a curated list of the best Web3 courses to get you <br />
          started on your journey.
        </p>

        <Button>
          <Link href="./courses" target="_blank" rel="noopener noreferrer">
            View Courses{" "}
          </Link>
        </Button>
      </Header>
      <section className="bg-blue-800 pt-12 pb-24">
        <Container>
          <FeaturedCourses />
        </Container>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("http://localhost:4000/api/courses");
  console.log("printing res" + res);
  const courses = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      courses,
    },
  };
}
