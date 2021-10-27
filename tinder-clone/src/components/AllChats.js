import React from "react";
import Chat from "./Chat";

export default function AllChats() {
  return (
    <div>
      <Chat
        name="The Rock"
        message="Hey"
        timestamp="6 mins ago"
        profilePic="https://m0.her.ie/wp-content/uploads/2018/01/07093633/GettyImages-887815620.jpg"
      />
      <Chat
        name="Zendaya"
        message="Hello!"
        timestamp="3 mins ago"
        profilePic="https://www.thenews.com.pk/assets/uploads/updates/2021-01-13/773676_9402039_294840_094028_updates_updates.jpg"
      />
      <Chat
        name="Ellon Musk"
        message="Did you see our new tesla"
        timestamp="1 mins ago"
        profilePic="https://www.aljazeera.com/wp-content/uploads/2021/05/366420282.jpg?resize=770%2C513"
      />
      <Chat
        name="Terry"
        message="Dont spend to much!"
        timestamp="10 mins ago"
        profilePic="https://api.time.com/wp-content/uploads/2017/12/terry-crews-person-of-year-2017-time-magazine-2.jpg"
      />
    </div>
  );
}
