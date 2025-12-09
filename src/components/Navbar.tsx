import React from "react";
import Icon from "./Icon";

interface NavbarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <header className="w-full h-[70px] bg-white border-b border-gray-200 flex items-center justify-between px-4 sm:px-6 gap-4">
      
      {/* LEFT: Logo + Menu */}
      <div className="flex items-center gap-2">
        
        {/* Always show small company logo */}
        <Icon src="/assets/svgs/company-logo.svg" size={55} />

        {/* Show text logo only on md+ screens */}
        <div className="hidden md:block">
          <Icon src="/assets/svgs/logo-text.svg" size={140} />
        </div>

        <button
          onClick={toggleSidebar}
          className="p-2 rounded-md hover:bg-gray-100 ml-2"
        >
          <Icon src="/assets/svgs/hamburger.svg" size={25} />
        </button>
      </div>

      {/* CENTER: Search Bar */}
      <div className="flex items-center justify-start flex-1 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search here"
            className="
              w-full bg-[#f0f7f4] px-9 py-2 rounded-lg outline-none 
              placeholder-gray-400
              text-sm
              sm:px-10
            "
          />
          <span className="absolute left-3 top-2.5 text-green-600">
            <Icon src="/assets/svgs/search-icon.svg" size={18} />
          </span>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-5">
        
        {/* MESSAGE */}
        <div className="relative cursor-pointer hidden sm:block">
          <Icon src="/assets/svgs/message-icon.svg" size={23} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-700 rounded-full"></span>
        </div>

        {/* NOTIFICATIONS */}
        <div className="relative cursor-pointer hidden sm:block">
          <Icon src="/assets/svgs/notification-icon.svg" size={23} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-700 rounded-full"></span>
        </div>

        {/* USER — only show photo on small screens */}
        <div className="flex items-center gap-2">
          {/* Text only on md+ */}
          <div className="hidden md:text-right md:block">
            <p className="text-sm font-semibold text-green-900">Liam Michael</p>
            <p className="text-xs text-gray-500 -mt-1">Admin</p>
          </div>

          <img
            src="/assets/svgs/user-dummy.svg"
            className="h-10 w-10 object-cover"
            alt="user"
          />
        </div>

        {/* SETTINGS */}
        <div className="cursor-pointer hidden sm:block">
          <Icon src="/assets/svgs/settings-icon.svg" size={23} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
