const Footer = () => {
  return (
    <>
      <footer className=" p-4 bg-white mx-auto flex flex-wrap justify-center md:justify-between ">
        <p className="customFont font-normal text-lg block py-2 pr-4 pl-3 text-white rounded text-gray-700 md:p-0 sm:text-center  ">
          &copy; WEB3.0 2022
        </p>

        <div className="flex flex-wrap items-center px-3">
          <a href="https://www.facebook.com/" target="_blank">
            <img src="f.png" className="h-10 ml-2" />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <img src="i.jpg" className="h-10 ml-2" />
          </a>
          <a href="https://twitter.com/?lang=en-ca" target="_blank">
            <img src="t.jpg" className="h-10 ml-2" />
          </a>
        </div>
      </footer>
    </>
  );
};
export default Footer;
