import { listSidebar } from "@/lib/contants";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link, useLocation } from "react-router-dom";

const BottomBar = () => {
  const location = useLocation();

  return (
    <section className="fixed sm:hidden  bottom-0 z-50 grid grid-cols-4  bg-black h-[72px] inset-x-0">
      {listSidebar.map((val, key) => {
        return (
          <Link
            to={val.href}
            key={key}
            className={`${location.pathname == val.href ? "text-white " : "text-neutral-500 "} flex space-y-2 cursor-pointer flex-col justify-center items-center`}
          >
            <Icon icon={val.icon} className="text-md" />
            <p className="text-xs">{val.label}</p>
          </Link>
        );
      })}
    </section>
  );
};

export default BottomBar;
