import React, { useState, useEffect } from "react";
import Icon from "./Icon";
import { Link, useLocation } from "react-router-dom";
import { sidebarData } from "../utils/SidebarData";

interface SidebarProps {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setOpen }) => {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1020);
  const location = useLocation();

  // Track which submenu items are expanded. Shape: { "<parentIdx>-<subIdx>": true }
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  // Detect Mobile / Desktop
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1020);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Set active menu based on path (top-level)
  useEffect(() => {
    const index = sidebarData.findIndex((item) =>
      location.pathname.startsWith(item.path || "")
    );
    setActiveMenu(index === -1 ? null : index);
  }, [location.pathname]);

  // helper: toggle a nested key
  const toggleExpand = (key: string) =>
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));

  // helper: checks whether a path is active (startsWith)
  const isPathActive = (path?: string) =>
    !!path && location.pathname.startsWith(path);

  // Recursive renderer for submenu arrays
  const renderSubmenu = (
    submenu: Array<any>,
    parentKeyPrefix = ""
  ): React.ReactNode => {
    return (
      <div className="ml-6 mt-2 space-y-1">
        {submenu.map((sub: any, subIdx: number) => {
          const key = `${parentKeyPrefix}${subIdx}`;
          const hasChildren = Array.isArray(sub.sub) && sub.sub.length > 0;
          const active = isPathActive(sub.path);

          return (
            <div key={key} className="flex flex-col">
              <div className="flex items-center justify-between">
                {/* Link or button (if hasChildren we show a toggle) */}
                {sub.path ? (
                  <Link
                    to={sub.path}
                    className={`text-sm py-1 block ${
                      active
                        ? "text-green-800 font-medium"
                        : "text-gray-600 hover:text-green-700"
                    }`}
                    onClick={() => {
                      // close mobile sidebar after navigation
                      if (isMobile) setOpen(false);
                    }}
                  >
                    {sub.label}
                  </Link>
                ) : (
                  <span
                    className={`text-sm py-1 block ${active ? "text-green-800 font-medium" : "text-gray-600"}`}
                  >
                    {sub.label}
                  </span>
                )}

                {hasChildren && (
                  <button
                    onClick={() => toggleExpand(key)}
                    className={`p-1 rounded-sm ${expanded[key] ? "rotate-90 text-green-700" : "text-gray-400"}`}
                    aria-expanded={!!expanded[key]}
                  >
                    <Icon src="/assets/svgs/arrow-right.svg" size={12} />
                  </button>
                )}
              </div>

              {/* nested children — visible when expanded OR when current route matches any child */}
              {hasChildren &&
                (expanded[key] ||
                  sub.sub.some((c: any) => isPathActive(c.path))) && (
                  <div className="ml-4">
                    {renderSubmenu(sub.sub, `${key}-`)}
                  </div>
                )}
            </div>
          );
        })}
      </div>
    );
  };

  // Sidebar content (shared desktop/mobile)
  const SidebarContent = () => (
    <aside
      className={`
      bg-white border-r border-gray-200 rounded-tr-[5vh]
      flex flex-col py-4 transition-all duration-300
      max-h-screen sm:max-h-100vh mt-4
      ${!isOpen ? "overflow-hidden" : "overflow-y-auto"}
      ${isMobile ? "w-[70vw]" : isOpen ? "w-[20vw]" : "w-20"}
    `}
    >
      {/* MAIN TITLE - only desktop & open */}
      {!isMobile && isOpen && (
        <h3 className="text-lg font-semibold mb-4 ml-6">Main</h3>
      )}

      <div className="flex flex-col space-y-1 px-2">
        {sidebarData.map((item, idx) => {
          const isActiveTop =
            location.pathname.startsWith(item.path || "") || activeMenu === idx;
          return (
            <div key={idx} className="mb-1">
              <div className="flex items-center">
                <button
                  onClick={() => {
                    setActiveMenu(activeMenu === idx ? null : idx);
                    if (isMobile) setOpen(false);
                  }}
                  className="w-full flex items-center px-2 py-2 pr-4 rounded-xl transition relative"
                >
                  <Icon
                    src={item.icon}
                    size={50}
                    className={`p-2 rounded-lg ${isActiveTop ? "bg-green-100" : ""}`}
                  />

                  {/* LABEL - only desktop & open */}
                  {isOpen && (
                    <span
                      className={`ml-3 text-sm ${
                        isActiveTop
                          ? "text-green-800 font-semibold"
                          : "text-gray-600"
                      }`}
                    >
                      {item.label}
                    </span>
                  )}

                  {/* ARROW - only desktop & open */}
                  {isOpen && item.submenu && (
                    <Icon
                      src="/assets/svgs/arrow-right.svg"
                      size={10}
                      className={`ml-auto transition ${isActiveTop ? "rotate-90" : ""}`}
                    />
                  )}
                </button>
              </div>

              {/* render submenu when top is active */}
              {isOpen && isActiveTop && item.submenu && (
                <div className="ml-6 mt-1">
                  {item.submenu.map((sub: any, sIdx: number) => {
                    const subHasChildren =
                      Array.isArray(sub.sub) && sub.sub.length > 0;
                    const subKey = `${idx}-${sIdx}`;
                    const subActive = isPathActive(sub.path);

                    return (
                      <div key={subKey} className="mb-1">
                        <div className="flex items-center justify-between">
                          <Link
                            to={sub.path}
                            className={`block text-sm py-1 ${
                              subActive
                                ? "text-green-800"
                                : "text-gray-600 hover:text-green-700"
                            }`}
                          >
                            {sub.label}
                          </Link>

                          {subHasChildren && (
                            <button
                              onClick={() => toggleExpand(subKey)}
                              className={`p-1 rounded-sm ${expanded[subKey] ? "rotate-90 text-green-700" : "text-gray-400"}`}
                              aria-expanded={!!expanded[subKey]}
                            >
                              <Icon
                                src="/assets/svgs/arrow-right.svg"
                                size={10}
                              />
                            </button>
                          )}
                        </div>

                        {/* nested sub-submenu */}
                        {subHasChildren &&
                          (expanded[subKey] ||
                            sub.sub.some((c: any) => isPathActive(c.path))) && (
                            <div className="ml-4">
                              {renderSubmenu(sub.sub, `${subKey}-`)}
                            </div>
                          )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );

  // Mobile behavior
  if (isMobile) {
    if (!isOpen) return null;
    return (
      <>
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
        <div className="fixed left-0 h-full z-50">
          <SidebarContent />
        </div>
      </>
    );
  }

  // Desktop — always render
  return <SidebarContent />;
};

export default Sidebar;
