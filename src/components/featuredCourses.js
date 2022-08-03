// import FeaturedCourse from "./featuredCourse";
import CourseCard from "./courseCard";
// import CourseCard from "../components/courseCard";
import Container from "../components/container";
import Header from "../components/Header";

function FeaturedCourses(courses) {
  // console.log("courses:", courses);
  // console.log("courses[0] on featurcard:", courses[0]);
  // console.log("courses[1] on featurcard:", courses[1]);

  // console.log("courses[2] on featurcard:", courses[2]);

  return (
    <>
      <h2 className="text-3xl font-bold text-white-100 text-center mb-12">
        Top Rated Courses
      </h2>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        <CourseCard course={courses.courses[0]} />
        <CourseCard course={courses.courses[1]} />
        <CourseCard course={courses.courses[2]} />
      </div>
    </>
  );
}

export default FeaturedCourses;
