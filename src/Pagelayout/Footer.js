import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { menu } from "../SiteData/menu";
import logo from "../assets/img/logo.min.png";

export default function Footer() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };
  const { pathname } = useLocation();

  useEffect(() => {
    setIsNavVisible(false);
  }, [pathname]);
  return (
    <>
      <div className="bg-yellow-400 mt-20 md:mt-40">
        <div className="w-full h-60 md:h-80">
          <div className="flex justify-center pt-10 md:pt-14">
            <Link to="/" className="">
              <img className="w-40 md:w-60" src={logo} alt="company logo" />
            </Link>
          </div>
          <div>
            <ul className="relative flex text-grey-400 text-xs md:text-lg my-10 flex justify-center gap-1">
              <li className="mx-1 md:m-2">
                <Link to="/">Home</Link>
              </li>
              <li className="mx-1 md:m-2">
                <Link to="/about">About</Link>
              </li>
              <li onClick={toggleNav} className="dropdown mx-1 md:m-2">
                <Link to="#"> Products</Link>
              </li>
              {isNavVisible && (
                <ul className="Nav">
                  {menu.map((item) => (
                    <li className="h-full text-center" key={item.url}>
                      <Link
                        to={item.url}
                        className="flex justify-center content-center"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
              <li className="mx-1 md:m-2">
                <Link to="product-catalog.pdf" target="_blank">
                  Catalog
                </Link>
              </li>
              <li className="mx-1 md:m-2">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-center text-grey-600 text-semibold text-xs">
              COPYRIGHT © 2022 ALL RIGHTS RESERVED
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}
