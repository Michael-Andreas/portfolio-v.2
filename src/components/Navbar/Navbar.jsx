import "./navbar.css";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="flex relative md:mt-4 md:mb-10 w-full justify-evenly lg:justify-center items-center md:px-6">
      <nav className="desktop-nav hidden md:block rounded-full py-2 px-5">
        <ul className="flex gap-2 md:gap-4 items-center justify-center text-base lg:text-lg font-medium">
          <li className="cursor-pointer">
            <a>Home</a>
          </li>
          <li href="#about" className="cursor-pointer">
            <a>About me</a>
          </li>
          <li className="cursor-pointer">
            <a>Techstack</a>
          </li>
          <li className="cursor-pointer">
            <a>Experience</a>
          </li>
          <li className="cursor-pointer">
            <a>Projects</a>
          </li>
        </ul>
      </nav>
      <button className="hidden md:block lg:absolute right-6 rounded-md px-4 py-2 bg-violet-500 hover:bg-violet-400">
        Contact
      </button>
      <nav className="mobile-nav relative md:hidden w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 m-2 ml-auto cursor-pointer"
          onClick={() => setMenuOpen((old) => !old)}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
          />
        </svg>
        {menuOpen && (
          <ul className="mobile-menu absolute z-50 top-10 w-full space-y-5 px-8 py-10 flex flex-col items-center text-lg">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About me</a>
            </li>
            <li>
              <a>Techstack</a>
            </li>
            <li>
              <a>Experience</a>
            </li>
            <li>
              <a>Projects</a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
