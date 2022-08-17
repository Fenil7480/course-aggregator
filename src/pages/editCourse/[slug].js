import AdminCourseAdd from "../../components/adminCourseAdd";
import Button from "../../components/button";
import { useRouter } from "next/router";
import { useState } from "react";
// <<<<<<< HEAD
// import axios from "axios";
// =======
import axios from "axios";
import Link from "next/link"


const EditCourse = ({ courses }) => {
  const router = useRouter();

  return courses.map((course) => {
    const [titleState, setTitleState] = useState(course.title);
    const [authorState, setAuthorState] = useState(course.author);
    const [priceState, setPriceState] = useState(course.price);
    const [technologyState, setTechnologyState] = useState(course.technology);
    const [descriptionState, setDescriptionState] = useState(
      course.description
    );
    const [urlState, setUrlState] = useState(course.url);
    const [ratingState, setRatingState] = useState(course.rating);

    const handleSubmit = async (e) => {
// <<<<<<< HEAD
      console.log(
        titleState,
        authorState,
        priceState,
        technologyState,
        descriptionState,
        urlState,
        ratingState
      );
      // console.log(router.query);
      // axios
      //   .put(`http://localhost:4000/api/courses/${router.query}`, {
      //     title: titleState,
      //     author: authorState,
      //     price: priceState,
      //     technology: technologyState,
      //     description: descriptionState,
      //     url: urlState,
      //     rating: ratingState,
      //   })
      //   .then((res) => {
      //     console.log(res);
      //     router.push("/courseDashboard");
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
// =======
      // console.log(titleState, authorState, priceState, technologyState, descriptionState, urlState, ratingState);
      console.log(router.query);
      axios
        .put(`http://localhost:4000/api/courses/${router.query.slug}`, {
          title: titleState,
          author: authorState,
          price: priceState,
          technology: technologyState,
          description: descriptionState,
          url: urlState,
          rating: ratingState,
        })
        .then((res) => {
          console.log(res);
          router.push("/courseDashboard");
        })
        .catch((err) => {
          console.log(err);
        });
// >>>>>>> b56732d9b28eb44b8672011dc38831d05816a37e
    };

    if (course.slug === router.query.slug) {
      return (
// <<<<<<< HEAD
        <div className="flex mt-32 flex-col justify-center w-3/6 m-auto">
          <AdminCourseAdd
            name="Title"
            placeHolder="Title of the course"
            value={titleState}
            setValue={setTitleState}
            tooltiptext="The title of the Web3 course."
          />
          <AdminCourseAdd
            name="Author"
            placeHolder="Author of the course"
            value={authorState}
            setValue={setAuthorState}
            tooltiptext="The person or business that published the Web3 course."
          />
          <AdminCourseAdd
            name="Price"
            placeHolder="Price for the course"
            value={priceState}
            setValue={setPriceState}
            tooltiptext="The price of the course. If free, input 0."
          />
          <AdminCourseAdd
            name="Technology"
            placeHolder="Technologies this course covers"
            value={technologyState}
            setValue={setTechnologyState}
            tooltiptext="Three to five technologies this course covers."
          />
          <AdminCourseAdd
            name="Description"
            placeHolder="Description about the course"
            value={descriptionState}
            setValue={setDescriptionState}
            tooltiptext="The description of the course."
          />
          <AdminCourseAdd
            name="URL"
            placeHolder="URL of the source"
            value={urlState}
            setValue={setUrlState}
            tooltiptext="The full URL linking back to the course page."
          />
          <AdminCourseAdd
            name="Rating"
            placeHolder="Rating for this course"
            value={ratingState}
            setValue={setRatingState}
            tooltiptext="The rating for the course out of 5."
          />
          <div className="mt-5">
            <Button type="submit" onClick={handleSubmit}>
              Add New Course
            </Button>
{/* ======= */}
        <main id="main">
          <div className="flex mt-32 flex-col justify-center w-3/6 m-auto">
            <Link
            href="../courseDashboard"
            target="_blank"
            rel="noopener noreferrer">
              <a className="hover:underline hover:text-blue-600 w-fit">	&lsaquo; Back</a>
            </Link>
            <h1>Edit Course</h1>
            <AdminCourseAdd
              name="Title"
              placeHolder="Title of the course"
              value={titleState}
              setValue={setTitleState}
              tooltiptext="The title of the Web3 course."
            />
            <AdminCourseAdd
              name="Author"
              placeHolder="Author of the course"
              value={authorState}
              setValue={setAuthorState}
              tooltiptext="The person or business that published the Web3 course."
            />
            <AdminCourseAdd
              name="Price"
              placeHolder="Price for the course"
              value={priceState}
              setValue={setPriceState}
              tooltiptext="The price of the course. If free, input 0."
            />
            <AdminCourseAdd
              name="Technology"
              placeHolder="Technologies this course covers"
              value={technologyState}
              setValue={setTechnologyState}
              tooltiptext="Three to five technologies this course covers."
            />
            <AdminCourseAdd
              name="Description"
              placeHolder="Description about the course"
              value={descriptionState}
              setValue={setDescriptionState}
              tooltiptext="The description of the course."
            />
            <AdminCourseAdd
              name="URL"
              placeHolder="URL of the source"
              value={urlState}
              setValue={setUrlState}
              tooltiptext="The full URL linking back to the course page."
            />
            <AdminCourseAdd
              name="Rating"
              placeHolder="Rating for this course"
              value={ratingState}
              setValue={setRatingState}
              tooltiptext="The rating for the course out of 5."
            />
            <div className="mt-5">
              <Button
                type="submit"
                onClick={handleSubmit}
              >
                Add New Course
              </Button>
            </div>
{/* >>>>>>> b56732d9b28eb44b8672011dc38831d05816a37e */}
          </div>
        </main>
      );
    }
  });
};

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

export default EditCourse;
