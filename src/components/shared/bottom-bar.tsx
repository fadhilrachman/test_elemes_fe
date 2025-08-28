import { listSidebar } from "@/lib/contants";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

const BottomBar = () => {
  return (
    <div className="fixed sm:hidden  bottom-0 z-50 grid grid-cols-4  bg-black h-[72px] inset-x-0">
      {listSidebar.map((val, key) => {
        return (
          <Link
            to={val.href}
            key={key}
            className="flex space-y-2 cursor-pointer flex-col justify-center items-center"
          >
            <Icon icon={val.icon} className="text-md" />
            <p className="text-xs">{val.label}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default BottomBar;
