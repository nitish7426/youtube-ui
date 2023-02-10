import React from "react";
import { headerLinks } from "../constants";

const Suggestions = () => {
  return (
    <div className="flex whitespace-nowrap gap-3 pt-1 pb-3 px-4 overflow-x-scroll scrollbar-hide sticky top-14 bg-white">
      {headerLinks.map((value, i) => (
        <button
          className={`capitalize duration-150 ease-in text-sm   py-1.5 px-3 rounded-lg ${
            value == "all"
              ? "bg-black text-white hover:bg-black"
              : "text-stone-800 bg-stone-100 hover:bg-stone-200"
          }`}
          key={i}
        >
          {value}
        </button>
      ))}
    </div>
  );
};

export default Suggestions;
