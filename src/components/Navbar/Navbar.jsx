import logo from "../../assets/logo.png";
import coin from "../../assets/Currency.png";
import { useState } from "react";
const Navbar = ({ coins }) => {
  const [active, setActive] = useState("");
  return (
    <div>
      <div className="navbar flex shadow  justify-between container mx-auto">
        <div className="hidden md:block ">
          <img src={logo} alt="" />
        </div>
        <div className="hidden md:block ">
          <ul className="flex items-center gap-3 ">
            <li
              onClick={() => setActive("home")}
              className={`btn ${active === "home" ? "bg-[#E7FE29]" : "bg-white"} `}
            >
              Home
            </li>
            <li
              onClick={() => setActive("addCart")}
              className={`btn ${active === "addCart" ? "bg-[#E7FE29]" : "bg-white"} `}
            >
              Add Cart
            </li>
            <li
              onClick={() => setActive("about")}
              className={`btn ${active === "about" ? "bg-[#E7FE29]" : "bg-white"} `}
            >
              About
            </li>
          </ul>
        </div>
        <div className="dropdown md:hidden">
          <div tabIndex={0} className="btn btn-ghost btn-circle ">
            <img src={logo} alt="" />
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Homepage</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-1 font-bold text-xl">
          <span>{coins}</span>
          <span>
            <img src={coin} alt="" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
