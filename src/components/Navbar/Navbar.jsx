import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import "../../index.css";
import { useEffect, useState } from "react";
export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`flex flex-row justify-around items-center p-3 fixed w-full top-0 ${
        scrolled ? "bg-opacity-90 backdrop-blur-md" : "bg-opacity-0"
      }`}
    >
      <div className="flex flex-row justify-center items-center gap-4">
        <div className="flex flex-row justify-center items-center gap-1 hover:decoration-2 hover:underline hover:decoration-purple-500 transition duration-300">
          <AiOutlineHome width={25} height={25} color="#fff" />
          <Link className="text-white text-xl no-underline " to="/">
            Inicio
          </Link>
        </div>

        <div className="flex flex-row justify-center items-center gap-1 hover:decoration-2 hover:underline hover:decoration-purple-500 transition duration-300">
          <AiOutlineUser width={25} height={25} color="#fff" />
          <Link className="text-white text-xl no-underline" to="/about">
            Sobre
          </Link>
        </div>
      </div>
      <div></div>
      <div></div>
    </nav>
  );
};
