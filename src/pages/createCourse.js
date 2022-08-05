import styles from "../styles/Home.module.css";
import AdminCourseAdd from "../components/adminCourseAdd";
import Button from "../components/button"
function createCourse() {
  return (
    <div className="flex mt-32 flex-col justify-center w-3/6 m-auto">
      <AdminCourseAdd
        name="Title"
        placeHolder="Title"
        tooltiptext="The title of the Web3 course."
      />
      <AdminCourseAdd
        name="Author"
        placeHolder="Author"
        tooltiptext="The person or business that published the Web3 course."
      />
      <AdminCourseAdd
        name="Price"
        placeHolder="Price for the course"
        tooltiptext="The price of the course. If free, input 0."
      />
      <AdminCourseAdd
        name="Technology"
        placeHolder="Technologies E.g, NFT, BLOCKCHAIN"
        tooltiptext="Three to five technologies this course covers."
      />
      <AdminCourseAdd
        name="Description"
        placeHolder="Description about the course"
        tooltiptext="The description of the course."
      />
      <AdminCourseAdd
        name="URL"
        placeHolder="E.g, www.example.com"
        tooltiptext="The full URL linking back to the course page."
      />
      <AdminCourseAdd
        name="Rating"
        placeHolder="E.g, 4.5"
        tooltiptext="The rating for the course out of 5."
      />
      <div className="mt-5">
        <Button
          type="submit"
        >
          Add Course
        </Button>
      </div>
    </div>
  );
}

export default createCourse;
