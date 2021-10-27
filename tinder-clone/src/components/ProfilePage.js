import React from "react";

export default function Profile() {
  const profileItems = {
    age: 31,
    image:
      "https://m0.her.ie/wp-content/uploads/2018/01/07093633/GettyImages-887815620.jpg",
    info: "bald",
    location: "USA - Los Angels",
    match: "75%",
    name: "The rock",
  };

  return (
    <>
      <img src={profileItems.image} alt="Profile pic"></img>
      <div>
        <h3>{profileItems.match}</h3>
      </div>
      <div>
        <p>
          {profileItems.name}
          {profileItems.age}
          {profileItems.location}
          {profileItems.info}
        </p>
      </div>
    </>
  );
}
