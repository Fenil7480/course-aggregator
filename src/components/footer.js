const Footer = () => {
  return (
    <>
      <footer className="p-4 bg-white sm:p-6 dark:bg-gray-900 flex flex-wrap justify-between items-center mx-auto">
        <div className="">
          <p className="customFont font-normal text-lg block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-gray-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent ">
            &copy; WEB3.0 2022
          </p>
        </div>
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
