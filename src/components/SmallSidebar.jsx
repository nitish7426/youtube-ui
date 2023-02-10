import React from "react";
import { main } from "../constants";

const SmallSidebar = () => {
  return (
    <div>
      <aside className="md:flex flex-col sticky top-14 text-xs capitalize w-fit hidden">
        {main.map((value, i) => (
          <a
            className="flex flex-col items-center hover:bg-stone-100 duration-150 ease-in rounded-xl py-4 px-1 mx-1"
            key={i}
            href=""
          >
            {value.icon}
            <div>{value.text}</div>
          </a>
        ))}
      </aside>
    </div>
  );
};

export default SmallSidebar;
