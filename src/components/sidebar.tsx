import { Icon } from "@iconify/react";

const Sidebar = () => {
  const listSidebar = [
    {
      label: "Search",
      href: "/Search",
      icon: "lucide:search",
    },
    {
      label: "Movies",
      href: "/Movies",
      icon: "streamline:popcorn-solid",
    },
    {
      label: "Tv Show",
      href: "/Movies",
      icon: "fluent:tv-24-regular",
    },
    {
      label: "Peoples",
      href: "/Peoples",
      icon: "icon-park-solid:peoples-two",
    },
  ];
  return (
    <aside className="w-[160px] border-r h-screen flex items-center px-4">
      <div className=" w-full group/sidebar">
        {listSidebar.map((val, i) => {
          return (
            <div
              key={i}
              className="flex group/item  items-center space-x-3 group w-full h-[60px] cursor-pointer text-xl"
            >
              <Icon icon={val.icon} className="group-hover/item:text-white" />
              <p className="transform group-hover/item:text-white transition-all duration-300 opacity-0 -translate-x-4 group-hover/sidebar:opacity-100 group-hover/sidebar:translate-x-0">
                {val.label}
              </p>
            </div>
          );
        })}
      </div>{" "}
    </aside>
  );
};

export default Sidebar;
