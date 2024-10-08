import React, { useState, useEffect } from "react";
import Image from "next/image";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Link from "next/link";

const Navigation = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    const handleScroll = () => {
      const elementId = document.getElementById("navbar");
      if (window.scrollY > 170) {
        elementId.classList.add("menu-shrink");
      } else {
        elementId.classList.remove("menu-shrink");
      }
    };

    const mainNavLinks = document.querySelectorAll("nav ul li a");

    // // const handleActiveLink = () => {
    // //   const fromTop = window.scrollY;
    // //   mainNavLinks.forEach((link) => {
    // //     const section = document.querySelector(link.hash);
    // //     if (
    // //       section?.offsetTop <= fromTop &&
    // //       section?.offsetTop + section.offsetHeight > fromTop
    // //     ) {
    // //       link.classList.add("active");
    // //     } else {
    // //       link.classList.remove("active");
    // //     }
    // //   });
    // // };

    // document.addEventListener("scroll", handleScroll);
    // window.addEventListener("scroll", handleActiveLink);

    // return () => {
    //   document.removeEventListener("scroll", handleScroll);
    //   window.removeEventListener("scroll", handleActiveLink);
    // };
  }, []);

  const renderMenus = () => {
    return (
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link
            onClick={toggleNavbar}
            offset={() => 100}
            className="nav-link active"
            href="#home"
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            onClick={toggleNavbar}
            offset={() => 100}
            className="nav-link "
            href="/blog/details"
          >
            Promosi
          </Link>
        </li>
        <li className="nav-item">
          <Link
            onClick={toggleNavbar}
            offset={() => 100}
            className="nav-link "
            href="/blog/branch"
          >
            Cabang
          </Link>
        </li>
        <li className="nav-item">
          <Link
            onClick={toggleNavbar}
            offset={() => 100}
            className="nav-link "
            href="/blog/About"
          >
            Tentang Kami
          </Link>
        </li>
        <li className="nav-item dropdown">
          <Link
            onClick={toggleNavbar}
            offset={() => 100}
            className="nav-link  dropdown-toggle"
            href={`#`}
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            August week 1
          </Link>

          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <Link
                onClick={toggleNavbar}
                offset={() => 100}
                className="dropdown-item"
                href="/blog/AboutMeElisa"
              >
                Tentang Elisa
              </Link>
            </li>

            <li>
              <Link
                onClick={toggleNavbar}
                offset={() => 100}
                className="dropdown-item"
                href="/blog/AboutMeSalwa"
              >
                Tentang Salwa
              </Link>
            </li>

            <li>
              <Link
                onClick={toggleNavbar}
                offset={() => 100}
                className="dropdown-item"
                href="/blog/AboutmeFauzi"
              >
                Tentang Fauzi
              </Link>
            </li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <Link
            onClick={toggleNavbar}
            offset={() => 100}
            className="nav-link  dropdown-toggle"
            href={`#`}
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            August week 2
          </Link>

          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <Link
                onClick={toggleNavbar}
                offset={() => -30}
                className="dropdown-item"
                href={`/august-week-2/product`}
              >
                Product
              </Link>
            </li>
            <li>
              <Link
                onClick={toggleNavbar}
                offset={() => -30}
                className="dropdown-item"
                href={`/august-week-2/user`}
              >
                User
              </Link>
            </li>
            <li>
              <Link
                onClick={toggleNavbar}
                offset={() => -30}
                className="dropdown-item"
                href={`/august-week-2/post-comment`}
              >
                Post Comment
              </Link>
            </li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <Link
            onClick={toggleNavbar}
            offset={() => 100}
            className="nav-link  dropdown-toggle"
            href={`#`}
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            August week 3
          </Link>

          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <Link
                onClick={toggleNavbar}
                offset={() => -30}
                className="dropdown-item"
                href={`/august-week-3/example`}
              >
                Example
              </Link>
            </li>
            <li>
              <Link
                onClick={toggleNavbar}
                offset={() => -30}
                className="dropdown-item"
                href={`/august-week-3/ToDo`}
              
              >
               ToDo
              </Link>
              <Link
                onClick={toggleNavbar}
                offset={() => -30}
                className="dropdown-item"
                href={`/august-week-3/cart`}
              >
                Cart
              </Link>
              <Link
                onClick={toggleNavbar}
                offset={() => -30}
                className="dropdown-item"
                href={`/august-week-3/post`}
              >
                Post
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    );
  };

  const classOne = collapsed
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = collapsed
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <div>
      <nav
        id="navbar"
        className="navbar fixed-top navbar-expand-md navbar-light top-menu"
      >
        <div className="container">
          <Image
            src="/images/Asset.svg"
            alt="App About Image"
            width={120}
            height={125}
          />

          <button
            onClick={toggleNavbar}
            className={classTwo}
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={classOne} id="navbarSupportedContent">
            {renderMenus()}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
