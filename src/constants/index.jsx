import {
  AiOutlineFire,
  AiOutlineBulb,
  AiOutlineTrophy,
  AiOutlineLike,
} from "react-icons/ai";
import { BiMovie, BiHelpCircle, BiHomeAlt, BiHistory } from "react-icons/bi";
import {
  MdOutlineMusicNote,
  MdOutlineFeedback,
  MdOutlineVideoLibrary,
  MdOutlineWatchLater,
} from "react-icons/md";
import { HiOutlineNewspaper } from "react-icons/hi";
import { HiOutlineBars3 } from "react-icons/hi2";
import { TbHanger2 } from "react-icons/tb";
import { SiYoutubegaming } from "react-icons/si";
import { CiStreamOn } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { FiFlag } from "react-icons/fi";
import { BsYoutube } from "react-icons/bs";
import { RiVideoLine } from "react-icons/ri";
import yt from "../assets/yt.svg";
import ytKids from "../assets/ytKids.svg";
import ytMusic from "../assets/ytMusic.svg";
import ytStudio from "../assets/ytStudio.svg";
import ytTv from "../assets/ytTv.svg";

export const logo =
  "https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png";
export const main = [
  {
    text: "home",
    icon: <BiHomeAlt size={25} />,
  },
  {
    text: "shorts",
    icon: <BsYoutube size={25} />,
  },
  {
    text: "subscription",
    icon: <MdOutlineVideoLibrary size={25} />,
  },
];
export const myLinks = [
  { text: "Library", icon: <MdOutlineVideoLibrary size={25} /> },
  { text: "History", icon: <BiHistory size={25} /> },
  { text: "Your videos", icon: <RiVideoLine size={25} /> },
  { text: "Watch later", icon: <MdOutlineWatchLater size={25} /> },
  { text: "Liked videos", icon: <AiOutlineLike size={25} /> },
];
export const explore = [
  {
    text: "trending",
    icon: <AiOutlineFire size={25} />,
  },
  {
    text: "music",
    icon: <MdOutlineMusicNote size={25} />,
  },
  {
    text: "movies",
    icon: <BiMovie size={25} />,
  },
  {
    text: "live",
    icon: <CiStreamOn size={25} />,
  },
  {
    text: "gaming",
    icon: <SiYoutubegaming size={25} />,
  },
  {
    text: "news",
    icon: <HiOutlineNewspaper size={25} />,
  },
  {
    text: "sports",
    icon: <AiOutlineTrophy size={25} />,
  },
  {
    text: "learning",
    icon: <AiOutlineBulb size={25} />,
  },
  {
    text: "fashion & beauty",
    icon: <TbHanger2 size={25} />,
  },
];
export const more = [
  {
    text: "YouTube Premium",
    icon: (
      <img
        className="h-6 w-6 object-contain"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/640px-YouTube_full-color_icon_%282017%29.svg.png"
        alt=""
      />
    ),
  },
  {
    text: "Creator Studio",
    icon: (
      <img
        className="h-6 w-6 object-contain"
        src="https://upload.wikimedia.org/wikipedia/commons/d/d8/YouTubeMusic_Logo.png"
        alt=""
      />
    ),
  },
  {
    text: "YouTube Music",
    icon: (
      <img
        className="h-6 w-6 object-contain"
        src="https://upload.wikimedia.org/wikipedia/commons/d/d8/YouTubeMusic_Logo.png"
        alt=""
      />
    ),
  },
  {
    text: "YouTube Kids",
    icon: (
      <img
        className="h-6 w-6 object-contain"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/YouTube_Kids_LogoVector.svg/640px-YouTube_Kids_LogoVector.svg.png"
        alt=""
      />
    ),
  },
  {
    text: "YouTube TV",
    icon: (
      <img
        className="h-6 w-6 object-contain"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/YouTube_Kids_LogoVector.svg/640px-YouTube_Kids_LogoVector.svg.png"
        alt=""
      />
    ),
  },
];
export const others = [
  { text: "Settings", icon: <IoSettingsOutline size={25} /> },
  { text: "Report history", icon: <FiFlag size={25} /> },
  { text: "Help", icon: <BiHelpCircle size={25} /> },
  { text: "Send feedback", icon: <MdOutlineFeedback size={25} /> },
];
export const helpLinks = [
  "about",
  "press",
  "copyrignt",
  "contact s",
  "creatory",
  "advertise",
  "developers",
];
export const copyrightLinks = [
  "terms",
  "privacy",
  "policy & safety",
  "how youtube works",
  "test new features",
];

export const headerLinks = [
  "all",
  "html",
  "computers",
  "computers and information",
  "firebase",
  "music",
  "live",
  "lectures",
  "gaming",
  "street food",
  "brazilian music",
  "recently uploaded",
  "new to you",
];
