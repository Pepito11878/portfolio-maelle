import { NavLink } from "react-router-dom";
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
      <div className="flex justify-center items-center w-full font-audiowide font-bold text-xl">
        {link.map((key) => (
          <NavLink
            className={({ isActive }) =>
              `flex items-center duration-150 px-5 py-4 border-b-4 hover:border-green hover:bg-green/40 ${isActive ? "bg-green/40 border-green" : "border-transparent"}`
            }
            key={key.label}
            to={key.link}
          >
            {key.icon}
            {key.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
