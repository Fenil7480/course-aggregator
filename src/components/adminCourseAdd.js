import React from "react";
import Input from "./input"

const AdminCourseAdd = ({ name, placeHolder, value, setValue }) => {
  const handleOnChange = (e) => {
    setValue(e.target.value);
  }
  return (
    <div className="flex flex-col justify-center ">
      <label htmlFor="title" className="font-sans font-bold px-5 mt-6">
        {name}
      </label>
      <Input
        type="text"
        id="title"
        placeholder={placeHolder}
        value={value}
        handleInputChange={handleOnChange}
      />
    </div>
  );
};

export default AdminCourseAdd;
