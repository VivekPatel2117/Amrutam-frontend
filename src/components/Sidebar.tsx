import React, { useState, useEffect } from "react";
import Icon from "./Icon";
import { Link, useLocation } from "react-router-dom";
import { sidebarData } from "../utils/SidebarData";

interface SidebarProps {
  isOpen: boolean;
  setOpen: () => void; // always open when clicking a menu item
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setOpen }) => {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const location = useLocation();
useEffect(() => {
  const index = sidebarData.findIndex(item =>
    location.pathname.startsWith(item.path || "")
  );
  setActiveMenu(index);
}, [location.pathname]);

  return (
    <aside
      className={`
        max-h-[85vh] bg-white border-r border-gray-200 rounded-tr-[5vh] 
        flex flex-col py-4 overflow-y-scroll transition-all duration-300
        ${isOpen ? "w-[20vw]" : "w-20"}
      `}
    >
      {/* MAIN TITLE */}
      {isOpen && (
        <h3 className="text-lg font-semibold mb-4 ml-6">Main</h3>
      )}

      {/* MENU */}
      <div className="flex flex-col space-y-1">
        {sidebarData.map((item, idx) => {
          const isActive =
            location.pathname.startsWith(item.path || "") ||
            activeMenu === idx;

          return (
            <div key={idx}>

              {/* MENU BUTTON */}
              <button
                onClick={() => {
                  setActiveMenu(activeMenu === idx ? null : idx);
                  setOpen(); // auto expand sidebar on click
                }}
                className={"w-full flex items-center px-2 py-2 pr-4 rounded-xl transition relative"}       >

                {/* ICON */}
                  <Icon src={item.icon}  size={50} className={`p-2 rounded-lg ${isActive ? "bg-green-100" : ""}`}/>

                {/* LABEL (only in open mode) */}
                {isOpen && (
                  <span
                    className={`ml-3 text-sm ${
                      isActive ? "text-green-800 font-semibold" : "text-gray-600"
                    }`}
                  >
                    {item.label}
                  </span>
                )}

                {/* ARROW */}
                {isOpen && item.submenu && (
                  <Icon
                    src="/assets/svgs/arrow-right.svg"
                    size={10}
                    className={`ml-auto transition ${isActive ? "rotate-90" : ""}`}
                  />
                )}
              </button>

              {/* SUBMENU */}
              {isOpen && isActive && item.submenu && (
                <div className="ml-18">
                  {item.submenu.map((sub, i) => (
                    <Link
                      key={i}
                      to={sub.path}
                      className={`
                        block text-sm py-1
                        ${location.pathname === sub.path
                          ? "text-green-800"
                          : "text-gray-600 hover:text-green-700"}
                      `}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}

            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
