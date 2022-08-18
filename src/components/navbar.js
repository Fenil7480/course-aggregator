import React, { useRef } from "react";
import Link from "next/link";
import Container from '../components/container'
import { useRouter } from "next/router";
import Image from "next/image";

const Nav = () => {
  const mobileMenu = useRef(null);
  const router = useRouter();

  let links = [
    {
      name: "HOME",
      link: "/"
    },
    {
      name: "COURSES",
      link: "/courses"
    },
    {
      name: "FAQS",
      link: "/faq"
    },
  ]

  if (router.route === "/courseDashboard" || router.route === "/editCourse/[slug]" || router.route === "/createCourse") {
    links = [
      {
        name: 'Admin',
        link: ""
      },
      {
        name: 'Logout',
        link: ""
      },
    ]
  }

  function openMobileNav() {
    mobileMenu.current.classList.remove("hidden");
  }

  function closeMobileNav() {
    mobileMenu.current.classList.add("hidden");
  }

  return (
    <>
      <nav className="px-2 bg-white border-gray-200  shadow-lg ">
        <Container>
          <div className="container flex flex-wrap justify-between items-center mx-auto">
            <Link href="/">
            <a className="flex items-center">
              <Image
                src="/logo.png"
                className="mr-3 h-20"
                alt="Web 3.0 - A new chapter"
              />
            </a>
              </Link>
            <a className="skip-to-content-link" href="#main">
              Skip to content
            </a>
            <button
              onClick={openMobileNav}
              className="inline-flex justify-center items-center ml-3 text-gray-400 rounded-lg md:hidden "
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                aria-hidden="true"
                fill="black" width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M39.5 24C39.5 23.1716 38.8284 22.5 38 22.5H10C9.17157 22.5 8.5 23.1716 8.5 24C8.5 24.8284 9.17157 25.5 10 25.5H38C38.8284 25.5 39.5 24.8284 39.5 24Z" fill="black" />
                <path fillRule="evenodd" clipRule="evenodd" d="M39.5 14C39.5 13.1716 38.8284 12.5 38 12.5H10C9.17157 12.5 8.5 13.1716 8.5 14C8.5 14.8284 9.17157 15.5 10 15.5H38C38.8284 15.5 39.5 14.8284 39.5 14Z" fill="black" />
                <path fillRule="evenodd" clipRule="evenodd" d="M39.5 34C39.5 33.1716 38.8284 32.5 38 32.5H10C9.17157 32.5 8.5 33.1716 8.5 34C8.5 34.8284 9.17157 35.5 10 35.5H38C38.8284 35.5 39.5 34.8284 39.5 34Z" fill="black" />
              </svg>

            </button>
            <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
              <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                {links.map((link) => {
                  return (
                    <li key={link.name}>
                      <Link href={link.link}>
                        <a className="font-semibold text-lg block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 dark:hover:text-white focus:text-blue-700 dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                          {link.name}
                        </a>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </Container>
      </nav>
      <nav ref={mobileMenu} className="mobile-nav md:hidden fixed inset-0 bg-blue-800 z-50 hidden">
        <ul className="text-white-100 flex flex-col h-full items-center justify-center gap-5">
          {links.map((link) => {
            return (
              <li key={link.name}>
                <Link href={link.link}>
                  <a onClick={closeMobileNav}>{link.name}</a>
                </Link>
              </li>
            )
          })}
          <button onClick={closeMobileNav}>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.9289 31.0711L31.071 16.929" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M16.9289 16.9289L31.071 31.071" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </ul>
      </nav>
    </>
  );
};
export default Nav;
