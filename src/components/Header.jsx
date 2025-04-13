import React from "react";
import { auth } from "../firebase";

const Header = ({ room, setRoom }) => {
  return (
    <header className="flex justify-between p-5 items-center border shadow-lg border-gray-300">
      <p>{auth.currentUser.displayName}</p>
      <p className=" font-semibold">{room}</p>
      <button
        onClick={() => setRoom(null)}
        className="btn text-sm "
      >
        Farklı Oda
      </button>
    </header>
  );
};

export default Header;
