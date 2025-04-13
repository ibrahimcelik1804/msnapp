import React from "react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const Arrow = ({ isAtBottom, handleScroll }) => {
  return (
    !isAtBottom && (
      <button
        onClick={handleScroll}
        className="sticky bottom-0 bg-zinc-300 ml-auto hover:bg-zinc-400 cursor-pointer transition rounded-xl end-0 text-3xl flex justify-end text-green-700 hover"
      >
        <MdKeyboardDoubleArrowDown />
      </button>
    )
  );
};

export default Arrow;
