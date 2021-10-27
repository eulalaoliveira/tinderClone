import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./css/style.css";

export default function Message({ name, message, profilePic, timestamp }) {
  return (
    <div className="chat">
      <Avatar src={profilePic} alt="Dog Pic" className="chat__image" />
      <div className="chat__details">
        <h2>{name}</h2>
        <p>{message}</p>
      </div>
      <p className="chat__timestamp">{timestamp}</p>
    </div>
  );
}
