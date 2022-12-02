import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { menu } from "../SiteData/menu";
import logo from "../assets/img/logo.min.png";
export default function MobileNav() {
  const [isMenu, setisMenu] = useState(false);
  const [isMenuSubMenu, setMenuSubMenu] = useState(false);
  const [isResponsiveclose, setResponsiveclose] = useState(false);
  const { pathname } = useLocation();
  const toggleClass = () => {
    setisMenu(!isMenu);
    setResponsiveclose(!isResponsiveclose);
  };
  let boxClass = ["main-menu"];
  if (isMenu) {
    boxClass.push("menuq2");
  } else {
    boxClass.push("");
  }
  const toggleSubmenu = () => {
    setMenuSubMenu(!isMenuSubMenu);
  };

  let boxClassSubMenu = ["sub__menus"];
  if (isMenuSubMenu) {
    boxClassSubMenu.push("sub__menus__Active");
  } else {
    boxClassSubMenu.push("");
  }
  useEffect(() => {
    setMenuSubMenu(false);
  }, [pathname]);
  return (
    <header className="Mobilenav header__middle">
      <div className="container px-4 py-2">
        <div className="md:flex justify-between">
          <div className="header__middle__logo">
            <NavLink exact="true" activeclassname="is-active" to="/">
              <img src={logo} alt="CompanyLogo" />
            </NavLink>
          </div>
          <div className="header__middle__menus">
            <nav className="main-nav">
              {isResponsiveclose === true ? (
                <>
                  <span
                    className="menubar__button1"
                    style={{ display: "none" }}
                    onClick={toggleClass}
                  >
                    <img className="" src="./icons8-x-35.png" alt="x-icon" />
                  </span>
                </>
              ) : (
                <>
                  <span
                    className="menubar__button"
                    style={{ display: "none" }}
                    onClick={toggleClass}
                  >
                    <h2 className="">MENU</h2>
                  </span>
                </>
              )}
              <ul className={boxClass.join(" ")}>
                <li className="menu-item">
                  <NavLink
                    exact="true"
                    activeclassname="is-active"
                    onClick={toggleClass}
                    to={`/`}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="menu-item">
                  <NavLink
                    onClick={toggleClass}
                    activeclassname="is-active"
                    to={`/about`}
                  >
                    About
                  </NavLink>
                </li>
                <li
                  onClick={toggleSubmenu}
                  className="menu-item sub__menus__arrows"
                >
                  <Link to="#" className="relative">
                    Products
                    <span className="absolute bottom-1 ml-2">&#8964;</span>
                  </Link>
                  <ul className={boxClassSubMenu.join(" ")}>
                    {menu.map((item) => (
                      <li key={item.url}>
                        <NavLink
                          onClick={toggleClass}
                          activeclassname="is-active"
                          to={item.url}
                        >
                          {item.title}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="menu-item ">
                  <NavLink
                    onClick={toggleClass}
                    activeclassname="is-active"
                    to="product-catalog.pdf"
                    target="_blank"
                  >
                    Catalog
                  </NavLink>
                </li>
                <li className="menu-item ">
                  <NavLink
                    onClick={toggleClass}
                    activeclassname="is-active"
                    to={`/contact`}
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
