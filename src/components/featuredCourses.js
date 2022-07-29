// import FeaturedCourse from "./featuredCourse";
import CourseCard from "./courseCard";

function FeaturedCourses() {
  return (
    <>
      <h2 className="text-3xl font-bold text-white-100 text-center mb-12">Top Rated Courses</h2>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </>
  );
}

export default FeaturedCourses;