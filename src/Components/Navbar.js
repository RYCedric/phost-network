import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { UidContext } from "../Components/AppContext";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import Logout from "./Log/Logout";

const Navbar = () => {
  const Uid = useContext(UidContext);
  const userData = useSelector((state) => state.userReducer);

  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <Link to="/">
            <div className="logo">
              <img src="./img/logo.png" alt="icon" />
              <h3>Phost</h3>
            </div>
          </Link>
        </div>
        {Uid ? (
          <ul>
            <li></li>
            <li className="welcome">
              <Link to="/profil">
                <h5>Bienvenue {userData.pseudo}</h5>
              </Link>
            </li>
            <Logout />
          </ul>
        ) : (
          <ul>
            <li></li>
            <li>
              <Link to="/profil">
                {/* <img src="./img/icons/login.svg" alt="login" /> */}
                <FiLogIn />
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
