import React from "react";

const VideoCard = () => {
  const video = {
    thumb:
      "https://i.ytimg.com/vi/cd3P3yXyx30/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCi0i3i7NsbAn-YwkAlMdlWg7nhow",
    title: "React JS Tutorial-Basic to Advance (2023)",
    channel: "'Nerd's lesson",
    channelLogo:
      "https://yt3.ggpht.com/ytc/AL5GRJXr6kUc4cU3jzoLun6KS1apNdD7-WG5g7XzW-6n=s68-c-k-c0x00ffffff-no-rj",
    views: "9.6k",
    uploaded: "5 days ago",
  };

  return (
    <div>
      <img
        className="aspect-video rounded-xl w-full"
        src={video.thumb}
        alt=""
      />
      <div className="flex gap-2 py-3">
        <img
          className="h-10 w-10 rounded-full"
          src={video.channelLogo}
          alt=""
        />
        <div className="">
          <h3 className="font-medium text-sm">{video.title}</h3>
          <div className="text-xs">{video.channel}</div>
          <div className="flex text-xs gap-1">
            <div>{video.views}</div>
            {"•"}
            <div>{video.uploaded}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
