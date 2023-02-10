import React, { useEffect, useRef } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import {
  copyrightLinks,
  explore,
  helpLinks,
  logo,
  main,
  more,
  myLinks,
  others,
} from "../constants";

const Sidebar = ({ sidebar, setSidebar }) => {
  useEffect(() => {
    if (sidebar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [sidebar]);
  return (
    <div>
      {/* Sidebar */}
      <div
        className={`h-full fixed z-30 top-0 overflow-auto scrollbar-hide bg-white duration-150 ease-in px-4 w-fit text-stone-800  font-medium ${
          sidebar ? "left-0" : "-left-full"
        }`}
      >
        {/* yt logo and bars */}
        <div className="flex px-2 sticky top-0 bg-white items-center gap-6">
          <button
            className="p-2 hover:bg-stone-100 duration-150 ease-in rounded-full"
            onClick={() => setSidebar(false)}
          >
            <HiOutlineBars3 className="" size={25} />
          </button>
          <img className="h-14" src={logo} alt="" />
        </div>
        <div className="divide-y divide-stone-300">
          {/* main navigation */}
          <div className="flex flex-col py-2">
            {main.map((value, i) => (
              <a className="sideLink" key={i} href="">
                {value.icon}
                <span>{value.text}</span>
              </a>
            ))}
          </div>

          {/* users link */}
          <div className="flex flex-col py-2">
            {myLinks.map((value, i) => (
              <a className="sideLink" key={i} href="">
                {value.icon}
                <span>{value.text}</span>
              </a>
            ))}
          </div>

          {/* explore */}
          <div className="flex flex-col py-2">
            <h3 className=" text-lg px-2">Explore</h3>
            {explore.map((value, i) => (
              <a className="sideLink" key={i} href="">
                {value.icon}
                <span>{value.text}</span>
              </a>
            ))}
          </div>

          {/* more links */}
          <div className="flex flex-col py-2">
            <h3 className=" text-lg px-2">More from YouTube</h3>
            {more.map((value, i) => (
              <a className="sideLink" key={i} href="">
                {value.icon}
                <span>{value.text}</span>
              </a>
            ))}
          </div>

          {/* other links */}
          <div className="flex flex-col py-2">
            {others.map((value, i) => (
              <a className="sideLink" key={i} href="">
                {value.icon}
                <span>{value.text}</span>
              </a>
            ))}
          </div>

          {/* down links */}
          <div className="py-1 border-stone-300 space-y-2 max-w-[13rem] text-black/80 text-sm scroll-px-64">
            <div className="flex flex-wrap whitespace-nowrap gap-x-1.5 leading-tight">
              {helpLinks.map((value, i) => (
                <a className="capitalize " key={i} href="">
                  {value}
                </a>
              ))}
            </div>
            <div className="capitalize whitespace-nowrap flex flex-wrap gap-x-1.5 leading-tight ">
              {copyrightLinks.map((value, i) => (
                <a key={i} href="">
                  {value}
                </a>
              ))}
            </div>
            <p className="text-xs text-black/70 text-center">
              &copy; 2023 Google LLC
            </p>
          </div>
        </div>
      </div>

      {/* overlay */}
      <div
        className={`fixed inset-0 fadein bg-black/50 top-0 z-20 ${
          sidebar ? "block" : "hidden"
        }`}
        onClick={() => setSidebar(false)}
      ></div>
    </div>
  );
};

export default Sidebar;
