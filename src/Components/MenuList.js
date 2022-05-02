import { BsFillHouseFill } from "react-icons/bs";
import { BsJournalAlbum } from "react-icons/bs";
import { FaBroadcastTower, FaMicrophoneAlt, FaPodcast } from "react-icons/fa";
import { BiPulse } from "react-icons/bi";

const MenuList = [
  {
    id: 1,
    icon: <BsFillHouseFill />,
    name: "Home",
  },
  {
    id: 2,
    icon: <BsJournalAlbum />,
    name: "Discover",
  },
  {
    id: 3,
    icon: <FaBroadcastTower />,
    name: "Radio",
  },
  {
    id: 4,
    icon: <FaMicrophoneAlt />,
    name: "Artist",
  },
  {
    id: 5,
    icon: <FaPodcast />,
    name: "Albums",
  },
  {
    id: 6,
    icon: <BiPulse />,
    name: "Podcasts",
  },
];

export { MenuList };
