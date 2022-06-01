import React, { useContext } from "react";
import { NavLink } from "react-router-dom"
import profileImage from "./Profile.png";
import { AuthContext } from "../../AuthContext.js";
import "./Profile.css";

export default function Profile() {
  const [isMenuVisible, setIsMenuVisible] = React.useState(false);
  const auth = useContext(AuthContext);

  const stls = {
    img: {
      display: isMenuVisible ? "none" : "block",
    },
    menu: {
      display: isMenuVisible ? "block" : "none",
    },
  };

  const logoutHandler = () => {
    console.log("qwe");
    auth.logout();
  };

  return (
    <>
      <div id="box1">
        <div>
          <img
            id="profileAvatar"
            src={profileImage}
            onClick={() => setIsMenuVisible(true)}
            width="70px"
            height="70px"
            style={stls.img}
            alt="Аватар"
          />
        </div>
        <div className="menu-main" style={stls.menu}>
          <ul>
            <li onClick={() => setIsMenuVisible(false)} id="krest">
              ×
            </li>
            <li><NavLink to="/profile">Настройки</NavLink></li>
            <li onClick={logoutHandler}>Выход</li>
          </ul>
        </div>
      </div>
    </>
  );
}
