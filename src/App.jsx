import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import SmallSidebar from "./components/SmallSidebar";
import Suggestions from "./components/Suggestions";
import VideoCard from "./components/VideoCard";
import { headerLinks } from "./constants";

const App = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <div className="relative">
      <Navbar sidebar={sidebar} setSidebar={setSidebar} />

      <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
      <div className="relative flex">
        <SmallSidebar />
        <div className="md:w-[calc(100vw-6.75rem)] w-full space-y-3">
          <Suggestions />
          <div className="px-4 grid grid-cols-1 place-items-center w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array(20)
              .fill()
              .map((value, i) => (
                <VideoCard key={i} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
