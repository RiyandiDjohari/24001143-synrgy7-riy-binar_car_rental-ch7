import { useContext, useState } from "react";
import { HiMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Navbar = () => {
  const { setCurrentUser }: any = useContext(AuthContext); 
  const [navbarToggler, setNavbarToggler] = useState(false);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleLogout = () => {
    setCurrentUser(null)
    localStorage.removeItem("token");
    navigate('/login')
  }
  return (
    <nav className="bg-secondary fixed top-0 left-0 right-0 z-50 border-b-2 border-[#dee2e6]" id="navbar">
      <div className="container flex justify-between items-center py-6">
        <Link to="/" className="logo">
          BCR
        </Link>
        <ul className="hidden md:flex md:items-center md:gap-8 text-[14px]">
          <li className="hover:text-primary">
            <a href="#our-services">Our Services</a>
          </li>
          <li className="hover:text-primary">
            <a href="#why-us">Why Us</a>
          </li>
          <li className="hover:text-primary">
            <a href="#testimonial">Testimonial</a>
          </li>
          <li className="hover:text-primary">
            <a href="#faq">FAQ</a>
          </li>
          <li >
            {token ? (
              <button className="btn-primary" onClick={handleLogout}>Logout</button>
            ) : (
              <button className="btn-primary">
                <Link to="/register">Register</Link>
              </button>
            )}
          </li>
        </ul>
        <div className="leading-none md:hidden navbar-toggler" onClick={() => setNavbarToggler((prev) => !prev)}>
          <HiMenu size={24} />
        </div>

        <aside
          id="offcanvas"
          className={`fixed inset-y-0 right-0 bg-[#FFF] w-72 p-4 z-10  lg:hidden ${navbarToggler ? "block" : "hidden"}`}
        >
          <nav>
            <div className="flex justify-between items-center mb-4">
              <a href="#">BCR</a>
              <div className="leading-none navbar-toggler" onClick={() => setNavbarToggler((prev) => !prev)}>
                <MdClose size={24} />
              </div>
            </div>
            <ul className="flex flex-col justify-center items-start gap-4 text-[14px]">
              <li>
                <a href="#our-services">Our Services</a>
              </li>
              <li>
                <a href="#why-us">Why Us</a>
              </li>
              <li>
                <a href="#testimonial">Testimonial</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
              <li className="btn-primary">
                <a href="#register">Register</a>
              </li>
            </ul>
          </nav>
        </aside>
        <div
          id="overlay"
          className={`fixed inset-0 bg-black opacity-50 lg:hidden ${navbarToggler ? "block" : "hidden"}`}
        ></div>
      </div>
    </nav>
  );
};

export default Navbar;
