import React from "react";
import { Link } from "react-router-dom";
import { BiHome } from "react-icons/bi";
import { IoRocketOutline } from "react-icons/io5";
import { BiUser } from "react-icons/bi";

const LeftNav = () => {
  return (
    <div className="left-nav-container">
      <div className="icons">
        <div className="icons-bis">
          <Link to="/" activeClassName="active-left-nav">
            <BiHome style={{ height: "34px", width: "34px" }} />
          </Link>
          <Link to="/trending" activeClassName="active-left-nav">
            <IoRocketOutline style={{ height: "34px", width: "34px" }} />
          </Link>
          <Link to="/profil" activeClassName="active-left-nav">
            <BiUser style={{ height: "34px", width: "34px" }} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
