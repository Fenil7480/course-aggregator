import React from "react";

const AdminCourseAdd = ({ name, placeHolder }) => {
  return (
    <div className="flex flex-col justify-center ">
      <label htmlFor="title" className="font-sans font-bold px-5 py-1">
        {name}
      </label>
      <input
        className="border border-gray-400 py-2 px-5 mb-5 mt-2 rounded-none font-sans"
        type="text"
        id="title"
        placeholder={placeHolder}
      />
    </div>
  );
};

export default AdminCourseAdd;
