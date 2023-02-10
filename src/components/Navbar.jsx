import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdMic } from "react-icons/io";
import { AiOutlineVideoCameraAdd, AiOutlineBell } from "react-icons/ai";
import { HiBars3 } from "react-icons/hi2";

const Navbar = ({ sidebar, setSidebar }) => {
  const logo =
    "https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png";
  const userImg =
    "https://yt3.ggpht.com/SmRtvFHW1FA48OTmd1sg8o7NsqDsjM0ok-tuoh4WBWct9I2q8rAkHuX9wTUhwFVz0oL1oRx2Fw=s88-c-k-c0x00ffffff-no-rj-mo";
  return (
    <nav className="flex items-center justify-between sticky top-0 bg-white px-4 z-10">
      <div className="flex gap-2 md:gap-4 lg:gap-6 items-center">
        <button
          className="p-2 hover:bg-stone-100 rounded-full"
          onClick={() => setSidebar(true)}
        >
          <HiBars3 size={25} />
        </button>
        {/* logo */}
        <img className="h-14 cursor-pointer" src={logo} alt="" />
      </div>
      {/* search */}
      <div className="md:flex gap-4 hidden">
        <form className="flex border  border-stone-400 rounded-full overflow-hidden">
          <input
            className="rounded-xl w-[30rem] px-4 outline-none"
            type="text"
            placeholder="Search"
          />
          <button className="px-4 border-l bg-stone-100" type="submit">
            <IoSearchOutline size={25} />
          </button>
        </form>
        <button className="p-2 duration-150 ease-in hover:bg-stone-100 rounded-full">
          <IoMdMic size={25} />
        </button>
      </div>

      {/* icons */}
      <div className="flex items-center gap-1 md:gap-4">
        <button className="sm:p-2 duration-150 ease-in hover:bg-stone-100 rounded-full md:hidden">
          <IoSearchOutline size={25} />
        </button>
        <button className="sm:p-2 duration-150 ease-in hover:bg-stone-100 rounded-full md:hidden">
          <IoMdMic size={25} />
        </button>
        <button className="sm:p-2 duration-150 ease-in hover:bg-stone-100 rounded-full">
          <AiOutlineVideoCameraAdd size={25} />
        </button>
        <button className="sm:p-2 duration-150 ease-in hover:bg-stone-100 rounded-full">
          <AiOutlineBell size={25} />
        </button>
        <img
          className="h-8 w-8 rounded-full cursor-pointer"
          src={userImg}
          alt=""
        />
      </div>
    </nav>
  );
};

export default Navbar;
