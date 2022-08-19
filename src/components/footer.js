import Container from './container'
import Image from 'next/image';

const Footer = () => {
  return (
    <Container>
      <footer className=" p-4 bg-white mx-auto flex flex-wrap justify-center md:justify-between ">
        <p className="font-normal text-lg block py-2 text-white rounded text-gray-700 md:p-0 sm:text-center  ">
          &copy; WEB3.0 2022
        </p>

        <div className="flex flex-wrap items-center px-3">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <Image width={40} height={40} src="/f.png" className="h-10 ml-2 w-10" alt='facebook' />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <Image width={40} height={40} src="/i.jpg" className="h-10 ml-2 w-10" alt='instagram' />
          </a>
          <a href="https://twitter.com/?lang=en-ca" target="_blank" rel="noopener noreferrer">
            <Image width={40} height={40} src="/t.jpg" className="h-10 ml-2 w-10" alt='twitter' />
          </a>
        </div>
      </footer>
    </Container>
  );
};
export default Footer;
