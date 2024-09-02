import React from "react";
import { useStore } from "../stores/appStore";
import { shallow } from "zustand/shallow";
import { useState } from "react";
const Data = () => {
  const [data, getData] = useStore(
    (state) => [state.data, state.getData],
    shallow()
  );

  const [username, setUsername] = useState("");

  return (
    <div className="flex justify-center pt-10 ">
      <input
        type="text"
        placeholder="enter your name"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <button
        onClick={() => getData(username)}
        className="p-2 bg-red-500 text-white rounded-md"
      >login</button>
    </div>
  );
};

export default Data;
