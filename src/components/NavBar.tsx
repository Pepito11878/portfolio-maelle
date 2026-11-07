import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { SlUserFemale } from "react-icons/sl";
import { GoProjectRoadmap } from "react-icons/go";
import { FaRegMessage } from "react-icons/fa6";

const link = [
  {
    label: "Accueil",
    link: "/home",
    icon: <FiHome className="mr-2 p-0.001 text-2xl " />,
  },
  {
    label: "Qui suis-je ?",
    link: "/myself",
    icon: <SlUserFemale className="mr-3 p-0.001 text-2xl " />,
  },
  {
    label: "Mes projets",
    link: "/projects",
    icon: <GoProjectRoadmap className="mr-2 p-0.001 text-2xl " />,
  },
  {
    label: "Get in touch",
    link: "/getintouch",
    icon: <FaRegMessage className="mr-2 p-0.001 text-2xl " />,
  },
];

export default function NavBar() {
  return (
    <nav className="hidden md:block">
      <div className="flex justify-between items-center w-full p-6 font-audiowide">
        <div></div>
        <div className=" flex-1 flex justify-center space-x-4 font-bold text-xl">
          {link.map((key) => (
            <Link
              className="flex items-center hover:text-green"
              key={key.label}
              to={key.link}
            >
              {key.icon}
              {key.label}
            </Link>
          ))}
        </div>
        <div></div>
      </div>
    </nav>
  );
}
