import { Link } from "gatsby";
import React, { useState } from "react";

import { AiOutlineMenu } from "react-icons/ai";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);

  const navPages = ["About Us", "Gallery", "Contact"];

  const toggleNav = () => {
    setNavOpen(!navOpen);
    console.log(navOpen);
  };

  return (
    <div className="nav-container">
      <nav>
        <AiOutlineMenu size={40} color="white" />
        <div className="nav-items">
          <ul>
            {navPages.map((navPage, id) => {
              return (
                <Link to={"/"}>
                  <li>{navPage}</li>
                </Link>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
