import { Icon } from "@iconify/react";

const Sidebar = () => {
  const listSidebar = [
    {
      label: "Search",
      href: "/search",
      icon: "lucide:search",
    },
    {
      label: "Movies",
      href: "/movies",
      icon: "streamline:popcorn-solid",
    },
    {
      label: "TV Show",
      href: "/tv",
      icon: "fluent:tv-24-regular",
    },
    {
      label: "Peoples",
      href: "/peoples",
      icon: "icon-park-solid:peoples-two",
    },
  ];

  return (
    <aside className="w-[120px] z-50 fixed  h-screen flex items-center px-4">
      <nav className="w-full group/sidebar  z-10 flex justify-center ">
        <ul className="relative z-10">
          {listSidebar.map((val, i) => (
            <li key={i}>
              <a
                href={val.href}
                className="flex group/item relative items-center space-x-3 w-full h-[60px] cursor-pointer text-xl"
              >
                <Icon
                  icon={val.icon}
                  className="group-hover/item:text-white transition-colors"
                />
                <span className="transform absolute left-9 whitespace-nowrap group-hover/item:text-white transition-all duration-300 opacity-0 -translate-x-4 group-hover/sidebar:opacity-100 group-hover/sidebar:translate-x-0">
                  {val.label}
                </span>
              </a>
            </li>
          ))}
        </ul>

        {/* Shadow */}
        <div
          className="
        absolute top-0 left-0 h-screen w-[400px]
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
