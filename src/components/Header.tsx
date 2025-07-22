import { useState } from "react";
import { Link } from "react-router";
import {Github, House, LogIn, Menu, X} from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-cf-dark-red fixed w-4/5 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <img
          className="h-12"
          src=""
          alt="logo"
        />
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={36} /> : <Menu size={36} />}
        </button>
        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex gap-6 text-white font-medium absolute md:static top-16 left-0 w-full md:w-auto bg-cf-dark-red md:bg-transparent px-4 py-4 md:py-0`}
        >
          <Link
            to="/"
            className={"rounded-full p-1.5 sm:p-2 transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"}
          >
            <House
              className={"h-5 w-5 sm:h-6 sm:w-6 transition-colors duration-300 " +
                "text-neutral-800 hover:text-neutral-600 dark:text-neutral-200" +
                " dark:hover:text-neutral-400"}
            />
          </Link>
          <Link
            to="/teachers" // Notes app
            className={"w-20 rounded-full p-1.5 sm:p-2 transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"}
          >
            <p
              className={"h-5 w-5 sm:h-6 sm:w-6 transition-colors duration-300 " +
                "text-neutral-800 hover:text-neutral-600 dark:text-neutral-200" +
                " dark:hover:text-neutral-400"}
            >
              Teachers
            </p>
          </Link>
          <Link
            to="/students" // To-do app
            className={"w-20 rounded-full p-1.5 sm:p-2 transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"}
          >
            <p
              className={"h-5 w-5 sm:h-6 sm:w-6 transition-colors duration-300 " +
                "text-neutral-800 hover:text-neutral-600 dark:text-neutral-200" +
                " dark:hover:text-neutral-400"}
            >
              Students
            </p>
          </Link>
          <a
            href="https://github.com/STzelas"
            target="_blank"
            rel="noopener noreferrer"
            className={"rounded-full p-1.5 sm:p-2 transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"}
          >
            <Github
              className={"h-5 w-5 sm:h-6 sm:w-6 transition-colors duration-300 " +
                "text-neutral-800 hover:text-neutral-600 dark:text-neutral-200" +
                " dark:hover:text-neutral-400"}
            />
          </a>
          <Link
            to="/login" // Notes Page
            className={"rounded-full p-1.5 sm:p-2 transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"}
          >
            <LogIn
              className={"h-5 w-5 sm:h-6 sm:w-6 transition-colors duration-300 " +
                "text-neutral-800 hover:text-neutral-600 dark:text-neutral-200" +
                " dark:hover:text-neutral-400"}
            />
          </Link>


      </nav>
    </div>
</header>
)
  ;
};

export default Header;