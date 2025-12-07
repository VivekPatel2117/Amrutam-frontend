import React from "react";
import Icon from "./Icon";

interface NavbarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <header className="w-full h-[70px] bg-white border-b border-gray-200 flex items-center justify-between px-6 gap-4">
      
      {/* LEFT: Logo + Menu */}
      <div className="flex items-center">
        <Icon src="/assets/svgs/company-logo.svg" size={75} />
        <Icon src="/assets/svgs/logo-text.svg" size={150}/>
       <button onClick={toggleSidebar} className="p-2 rounded-md hover:bg-gray-100">
          <Icon src="/assets/svgs/hamburger.svg" size={25} />
        </button>
      </div>

      <div className="flex items-center justify-start flex-1">
        <div className="relative w-[200px]">
          <input
            type="text"
            placeholder="Search here"
            className="w-full bg-[#f0f7f4] px-10 py-2 rounded-lg outline-none placeholder-gray-400"
          />
          <span className="absolute left-3 top-2.5 text-green-600">
            {/* FIXED PATH */}
            <Icon src="/assets/svgs/search-icon.svg" size={18} />
          </span>
        </div>
      </div>

      {/* RIGHT SECTION: Icons + User */}
      <div className="flex items-center gap-6">
        
        {/* MESSAGE */}
        <div className="relative cursor-pointer">
          <Icon src="/assets/svgs/message-icon.svg" size={25} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-700 rounded-full"></span>
        </div>

        {/* NOTIFICATION */}
        <div className="relative cursor-pointer">
          <Icon src="/assets/svgs/notification-icon.svg" size={25} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-700 rounded-full"></span>
        </div>

        {/* USER */}
        <div className="flex items-center gap-2">
          <div className="text-right">
            <p className="text-sm font-semibold text-green-900">Liam Michael</p>
            <p className="text-xs text-gray-500 -mt-1">Admin</p>
          </div>
          <img
            src="/assets/svgs/user-dummy.svg"
            className="h-10 w-10 object-cover"
            alt="user"
          />
        </div>

        <div className="relative cursor-pointer">
          <Icon src="/assets/svgs/settings-icon.svg" size={25} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
