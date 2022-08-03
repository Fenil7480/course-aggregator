import AdminCourseAdd from "../../components/adminCourseAdd";
import { useRouter } from "next/router";

const EditCourse = ({ courses }) => {
  const router = useRouter();

  return courses.map((course) => {
    if (course.slug === router.query.slug) {
      return (
        <div className="flex mt-32 flex-col justify-center w-3/6 m-auto">
          <AdminCourseAdd
            name="Title"
            placeHolder="Title of the course"
            value={course.title}
          />
          <AdminCourseAdd
            name="Author"
            placeHolder="Author of the course"
            value={course.author}
          />
          <AdminCourseAdd
            name="Price"
            placeHolder="Price for the course"
            value={course.price}
          />
          <AdminCourseAdd
            name="Technology"
            placeHolder="Technologies this course covers"
            value={course.technology}
          />
          <AdminCourseAdd
            name="Description"
            placeHolder="Description about the course"
            value={course.description}
          />
          <AdminCourseAdd
            name="URL"
            placeHolder="URL of the source"
            value={course.url}
          />
          <AdminCourseAdd
            name="Rating"
            placeHolder="Rating for this course"
            value={course.rating}
          />
          <button
            className="bg-blue-500 rounded-md px-5 py-2 mt-5 w-fit mb-24"
            type="submit"
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
