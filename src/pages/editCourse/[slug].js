import AdminCourseAdd from "../../components/adminCourseAdd";
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";

const EditCourse = ({ courses }) => {
  const router = useRouter();

  return courses.map((course) => {
    const [titleState, setTitleState] = useState(course.title);
    const [authorState, setAuthorState] = useState(course.author);
    const [priceState, setPriceState] = useState(course.price);
    const [technologyState, setTechnologyState] = useState(course.technology);
    const [descriptionState, setDescriptionState] = useState(course.description);
    const [urlState, setUrlState] = useState(course.url);
    const [ratingState, setRatingState] = useState(course.rating);

    const handleSubmit = async (e) => {
      // console.log(titleState, authorState, priceState, technologyState, descriptionState, urlState, ratingState);
      console.log(router.query);
      axios
        .put(`http://localhost:4000/api/courses/${router.query}`, {
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
    };

    if (course.slug === router.query.slug) {
      return (
        <div className="flex mt-32 flex-col justify-center w-3/6 m-auto">
          <AdminCourseAdd
            name="Title"
            placeHolder="Title of the course"
            value={titleState}
            setValue={setTitleState}
          />
          <AdminCourseAdd
            name="Author"
            placeHolder="Author of the course"
            value={authorState}
            setValue={setAuthorState}
          />
          <AdminCourseAdd
            name="Price"
            placeHolder="Price for the course"
            value={priceState}
            setValue={setPriceState}
          />
          <AdminCourseAdd
            name="Technology"
            placeHolder="Technologies this course covers"
            value={technologyState}
            setValue={setTechnologyState}
          />
          <AdminCourseAdd
            name="Description"
            placeHolder="Description about the course"
            value={descriptionState}
            setValue={setDescriptionState}
          />
          <AdminCourseAdd
            name="URL"
            placeHolder="URL of the source"
            value={urlState}
            setValue={setUrlState}
          />
          <AdminCourseAdd
            name="Rating"
            placeHolder="Rating for this course"
            value={ratingState}
            setValue={setRatingState}
          />
          <button
            className="bg-blue-500 rounded-md px-5 py-2 mt-5 w-fit mb-24"
            type="submit"
            onClick={handleSubmit}
          >
            Add New Course
          </button>
        </div>
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
