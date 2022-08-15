import Head from "next/head";
import Faq from "../../components/faq";
import Header from "../../components/Header";
import Button from "../../components/button";
import Container from "../../components/container";
import { useRouter } from "next/router";

export default function Details({ courses }) {
  const router = useRouter();
  return courses.map((course) => {
      if (course.slug === router.query.slug) {
      return (
        <>
          <Head>
            <title>Web 3.0 A New Chapter | Details</title>
            <meta name="description" content="Details page of course." />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Header blue>
            <h1>{course.title}</h1>
            <p>Rating: {course.rating} | {course.author}</p>
            <p className="text-xl">${course.price}</p>
            <br></br>
            <a href={course.url} target="_blank">
              <Button>View Course</Button>
            </a>
          </Header>
          <Container>
            <div className="flex flex-1 flex-col-reverse md:flex-row container md:gap-8">
              <main id="main" className="w-full md:w-2/3 max-w-3xl">
                <section className="pt-12">
                  <h2>Description</h2>
                  <p className="md:text-justify">
                    {course.description}
                  </p>
                  <br></br>
                  <a href={course.url} target="_blank">
                    <Button>View Course</Button>
                  </a>
                </section>
                <section className="py-12">
                  <h2>Frequently Asked Questions</h2>
                  <Faq />
                </section>
              </main>
              <aside className="w-full md:w-1/3 max-w-xl">
                <div className="pt-12 lg:sticky lg:top-0">
                  <h3>Categories</h3>
                  <ul className="flex gap-1 flex-wrap">
                    {course.technology.map((tech) => {
                        return <li className="px-4 py-2 bg-blue-300 rounded-full text-center whitespace-nowrap" key={tech}>{tech}</li>;
                    })}
                  </ul>
                </div>
              </aside>
            </div>
          </Container>
        </>
      );
    }
  });
}
export async function getStaticProps() {
  const res = await fetch("http://localhost:4000/api/courses");
  const courses = await res.json();
  return {
    props: {
      courses,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch("http://localhost:4000/api/courses");
  const courses = await res.json();
  return {
    paths: courses.map((course) => ({
      params: {
        slug: course.slug,
      },
    })),
    fallback: false,
  };
}
