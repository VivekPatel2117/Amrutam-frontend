export type SubMenuItem = {
  label: string;
  path: string;
};

export type SidebarItemType = {
  label: string;
  icon: string;
  path?: string;               // optional parent route
  submenu?: SubMenuItem[];
};
