import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import schoolLogo from "../../assets/images/gnu-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const navItems = [
  { label: "Home", link: "/Lab-front" },
  { label: "Research", link: "/research" },
  { label: "News", link: "/news" },
  { label: "Member", link: "/member" },
  { label: "Publication", link: "/publication" },
  { label: "Contact", link: "/contact" },
];

const Nav = ({ openLoginModal }) => {
  const [lang, setLang] = useState("KR");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
    };

    handleResize(); // 초기 체크
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleLanguage = () => {
    setLang((prevLang) => (prevLang === "KR" ? "EN" : "KR"));
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full flex items-center justify-between bg-white shadow-md z-50 py-4 px-2 lg:px-10">
      <div className="flex items-center">
        <Link
          to="/Lab-front"
          className="text-3xl font-bold pr-5 hidden lg:block"
        >
          EEPL
        </Link>
        {!isSmallScreen ? (
          <a
            href="https://gnu.ac.kr"
            className={`flex items-center lg:block relative before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[1px] before:bg-gray-300`}
          >
            <img src={schoolLogo} alt="gnu-logo" className="h-10" />
          </a>
        ) : (
          <div
            className="flex items-center cursor-pointer"
            onClick={toggleLanguage}
          >
            <span className="block w-8 text-center">{lang}</span>
            <FontAwesomeIcon icon={faGlobe} className="ml-1" />
          </div>
        )}
      </div>
      <div className="flex-1 flex justify-center items-center">
        <div className="hidden mx-24 lg:flex justify-evenly w-full">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="text-lg mx-3 relative hover:after:content-[''] hover:after:absolute hover:after:left-0 hover:after:right-0 hover:after:bottom-0 hover:after:h-[2px] hover:after:bg-teal-600 hover:after:rounded-full"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link to="/Lab-front" className="text-3xl font-bold lg:hidden">
          EEPL
        </Link>
      </div>

      <div className="flex items-center justify-end">
        <button className="lg:hidden text-xl" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>
        <div className="hidden lg:flex items-center space-x-6">
          <button
            onClick={openLoginModal}
            className="text-lg hover:text-teal-600"
          >
            SignIn
          </button>
          <div
            className="flex items-center cursor-pointer"
            onClick={toggleLanguage}
          >
            <span className="block w-8 text-center">{lang}</span>
            <FontAwesomeIcon icon={faGlobe} className="ml-1" />
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-start p-5 lg:hidden">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="text-lg py-2 hover:text-teal-600"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Nav;
