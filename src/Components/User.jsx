import React from "react";
import { useStore } from "../stores/appStore";
const User = () => {
//    const userName = useStore((state)=>state.userName)
//    console.log("render username1")
  const updateUserName = useStore((state) => state.updateUserName);
  console.log("render username");

  const userName = useStore((state) => {
    console.log("render username2");
    return state.userName;
  });

  const handleChange = (event) => {
    updateUserName(event.target.value);
  };

  return (
    <div className="flex justify-center pt-10 ">
      <div className="border-2 border-red-400 rounded-md p-2">
        <h1 className="text-center">Hello my name is {userName}</h1>
        <input
          className="text-center"
          type="text"
          placeholder="enter your name"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default User;
