import React, { Component } from "react";


function CardlistComponent() {

    return(
<div>
<h2 className="text-3xl font-bold underline">Courses</h2>
        
<div className="m-auto grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 max-w-6xl">


<div className="flex flex-col bg-gray-200 rounded-lg p-4 m-2">
  <div className="h-40 bg-gray-400 rounded-lg coursestyle"></div>
  <div className="flex flex-col items-start mt-4">
    <h4 className="text-xl font-semibold">HTML</h4>
    <p className="text-sm">The Complete 2022 Web Development Bootcamp</p>
    {/* <a className="p-2 leading-none rounded font-medium mt-3 bg-gray-400 text-xs uppercase" href="#">Click Here</a> */}
  </div>
</div>


 <div className="flex flex-col bg-gray-200 rounded-lg p-4 m-2">
  <div className="h-40 bg-gray-400 rounded-lg coursestyle1"></div>
  <div className="flex flex-col items-start mt-4">
    <h4 className="text-xl font-semibold">Python</h4>
    <p className="text-sm">100 Days of Code: The Complete Python Pro Bootcamp for 2022</p>
    {/* <a className="p-2 leading-none rounded font-medium mt-3 bg-gray-400 text-xs uppercase" href="#">Click Here</a> */}
  </div>
</div>


<div className="flex flex-col bg-gray-200 rounded-lg p-4 m-2">
  <div className="h-40 bg-gray-400 rounded-lg coursestyle2"></div>
  <div className="flex flex-col items-start mt-4">
    <h4 className="text-xl font-semibold">JavaScript</h4>
    <p className="text-sm">The Complete JavaScript Course 2022: From Zero to Expert!</p>
    {/* <a className="p-2 leading-none rounded font-medium mt-3 bg-gray-400 text-xs uppercase" href="#">Click Here</a> */}
  </div>
</div>


<div className="flex flex-col bg-gray-200 rounded-lg p-4 m-2">
  <div className="h-40 bg-gray-400 rounded-lg coursestyle3"></div>
  <div className="flex flex-col items-start mt-4">
    <h4 className="text-xl font-semibold">React</h4>
    <p className="text-sm">React - The Complete Guide (incl Hooks, React Router, Redux)</p>
    {/* <a className="p-2 leading-none rounded font-medium mt-3 bg-gray-400 text-xs uppercase" href="#">Click Here</a> */}
  </div>
</div> 


<div className="flex flex-col bg-gray-200 rounded-lg p-4 m-2">
  <div className="h-40 bg-gray-400 rounded-lg coursestyle1"></div>
  <div className="flex flex-col items-start mt-4">
    <h4 className="text-xl font-semibold">AWS</h4>
    <p className="text-sm">Ultimate AWS Certified Solutions Architect Associate 2022</p>
    {/* <a className="p-2 leading-none rounded font-medium mt-3 bg-gray-400 text-xs uppercase" href="#">Click Here</a> */}
  </div>
</div>

<div className="flex flex-col bg-gray-200 rounded-lg p-4 m-2">
  <div className="h-40 bg-gray-400 rounded-lg coursestyle"></div>
  <div className="flex flex-col items-start mt-4">
    <h4 className="text-xl font-semibold">Microsoft Excel</h4>
    <p className="text-sm">Microsoft Excel - Excel from Beginner to Advanced</p>
    {/* <a className="p-2 leading-none rounded font-medium mt-3 bg-gray-400 text-xs uppercase" href="#">Click Here</a> */}
  </div>
</div>

<div className="flex flex-col bg-gray-200 rounded-lg p-4 m-2">
  <div className="h-40 bg-gray-400 rounded-lg coursestyle1"></div>
  <div className="flex flex-col items-start mt-4">
    <h4 className="text-xl font-semibold">Data Science</h4>
    <p className="text-sm">Python for Data Science and Machine Learning Bootcamp</p>
    {/* <a className="p-2 leading-none rounded font-medium mt-3 bg-gray-400 text-xs uppercase" href="#">Click Here</a> */}
  </div>
</div>

<div className="flex flex-col bg-gray-200 rounded-lg p-4 m-2">
  <div className="h-40 bg-gray-400 rounded-lg coursestyle"></div>
  <div className="flex flex-col items-start mt-4">
    <h4 className="text-xl font-semibold">Angular</h4>
    <p className="text-sm">Angular - The Complete Guide (2022 Edition)</p>
    {/* <a className="p-2 leading-none rounded font-medium mt-3 bg-gray-400 text-xs uppercase" href="#">Click Here</a> */}
  </div>
</div>

</div>

</div>

    );


}

export default CardlistComponent;