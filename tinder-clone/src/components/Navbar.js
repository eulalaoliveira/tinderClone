import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <header>
        <nav>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/chats"}>Chat</NavLink>
          <NavLink to={"/profile"}>Profile</NavLink>
        </nav>
      </header>
    </div>
  );
}
