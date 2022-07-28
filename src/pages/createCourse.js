import styles from "../styles/Home.module.css";
import AdminCourseAdd from "../components/adminCourseAdd";
function createCourse() {
  return (
    <div className="flex mt-32 flex-col justify-center w-3/6 m-auto">
      <AdminCourseAdd name="Title" placeHolder="Title" />
      <AdminCourseAdd name="Author" placeHolder="Author" />
      <AdminCourseAdd
        name="Price"
        placeHolder="E.g, $300 or FREE or SUBSCRIPTION"
      />
      <AdminCourseAdd
        name="Technology"
        placeHolder="Technologies E.g, NFT, BLOCKCHAIN"
      />
      <AdminCourseAdd
        name="Description"
        placeHolder="Description about the course"
      />
      <AdminCourseAdd name="URL" placeHolder="E.g, www.example.com" />
      <AdminCourseAdd name="Rating" placeHolder="E.g, 4.5" />
      <button
        className="bg-blue-500 rounded-md px-5 py-2 mt-5 w-fit mb-24 "
        type="submit"
      >
        Add Course
      </button>
    </div>
  );
}

export default createCourse;
