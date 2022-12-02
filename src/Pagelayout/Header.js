import { Link } from "react-router-dom";
import { menu } from "../SiteData/menu";
import logo from "../assets/img/logo.min.png";
export default function Header() {
  return (
    <>
      <div className="header bg-blue-200 sm:h-20">
        <Link to="/" className="flex">
          <img className="w-16 md:w-32 lg:w-52" src={logo} alt="CompanyLogo" />
        </Link>
        <ul className="menu-items static">
          <li className="inline-block">
            <Link to="/" className="menu-item">
              Home
            </Link>
          </li>
          <li className="inline-block">
            <Link to="/about" className="menu-item">
              About
            </Link>
          </li>
          <li className="dropdown inline-block">
            <Link to="#">Products</Link>
            <div className="dropdown-menu">
              <ul className="w-56">
                {menu.map((item) => (
                  <li className="h-12 text-center" key={item.url}>
                    <Link
                      to={item.url}
                      className="flex justify-left content-center mt-1"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li className="inline-block">
            <Link
              to="product-catalog.pdf"
              target="_blank"
              className="menu-item"
            >
              Catalog
            </Link>
          </li>
          <li className="dropdown inline-block">
            <Link to="/contact" className="menu-item expand-btn">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
