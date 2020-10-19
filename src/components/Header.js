import React from "react";

import "./Header.css";
import Avatar from "./Avatar";

const Header = (props) => {
  //console.log("header props: ", props);
  return (
    <header>
      {props.users
        .filter((user) => {
          if (user.username !== props.currentUser.username) {
            return true;
          } else {
            return false;
          }
        })
        .map((user) => {
          return (
            <div className="users">
              <img className="avatar" src={user.avatar} alt="avatar" />
              <span className="username">{user.username}</span>
            </div>
          );
        })}
    </header>
  );
};

export default Header;
