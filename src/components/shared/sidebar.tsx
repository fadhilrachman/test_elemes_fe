import { listSidebar } from "@/lib/contants";
import { Icon } from "@iconify/react";
import { Link, useLocation } from "react-router-dom";
const Sidebar = () => {
  const location = useLocation();
  return (
    <aside className="w-[120px] hidden sm:flex z-20 fixed bg-gradient-to-r from-black/100 to-black/60  h-screen  items-center px-4">
      {/* {} */}
      <nav className="w-full group/sidebar  z-10 flex justify-center ">
        <ul className="relative z-10">
          {listSidebar.map((val, i) => (
            <li key={i}>
              <Link
                to={val.href}
                className={`flex group/item relative items-center space-x-3 w-full h-[60px] cursor-pointer text-xl ${location.pathname == val.href ? "text-white " : "text-neutral-500 "}`}
              >
                <Icon
                  icon={val.icon}
                  className="group-hover/item:text-white transition-colors"
                />
                <span className="transform absolute left-9 whitespace-nowrap group-hover/item:text-white transition-all duration-300 opacity-0 -translate-x-4 group-hover/sidebar:opacity-100 group-hover/sidebar:translate-x-0">
                  {val.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Shadow */}
        <div
          className="absolute top-0 left-0 h-screen w-[400px]
        bg-gradient-to-r from-black/100 to-transparent
        opacity-0 group-hover/sidebar:opacity-100
        transition-opacity duration-300
        pointer-events-none
        z-0
      "
        />
      </nav>
    </aside>
  );
};

export default Sidebar;
