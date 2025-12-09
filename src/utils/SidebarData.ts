import type { SidebarItemType } from "./types";
export const sidebarData: SidebarItemType[] = [
  {
    label: "Dashboard",
    icon: "/assets/svgs/dashboard-icon.svg",
    path: "/dashboard",
    submenu: [
      { label: "Today", path: "/dashboard/today" },
      { label: "Week", path: "/dashboard/week" },
      { label: "Month", path: "/dashboard/month" },
    ],
  },
  {
    label: "Doctors",
    icon: "/assets/svgs/doctor-icon.svg",
    path: "/doctors",
    submenu: [
      { label: "List", path: "/doctors/list" },
      { label: "Specialists", path: "/doctors/specialists" },
    ],
  },
  {
    label: "Patients",
    icon: "/assets/svgs/patients-icon.svg",
    path: "/patients",
    submenu: [
      { label: "All", path: "/patients/all" },
      { label: "New", path: "/patients/new" },
    ],
  },
  {
    label: "Appointments",
    icon: "/assets/svgs/appointment-icon.svg",
    path: "/appointments",
    submenu: [
      { label: "Upcoming", path: "/appointments/upcoming" },
      { label: "Completed", path: "/appointments/completed" },
    ],
  },
  {
    label: "Speciality",
    icon: "/assets/svgs/speciality-icon.svg",
    path: "/speciality",
    submenu: [
      { label: "Categories", path: "/speciality/categories" },
      { label: "Add New", path: "/speciality/add" },
    ],
  },
  {
    label: "Coupons",
    icon: "/assets/svgs/coupons-icon.svg",
    path: "/coupons",
    submenu: [
      { label: "All Coupons", path: "/coupons/all" },
      { label: "Create", path: "/coupons/create" },
    ],
  },
  {
    label: "Concerns",
    icon: "/assets/svgs/concern-icon.svg",
    path: "/concerns",
    submenu: [
      { label: "List", path: "/concerns/list" },
      { label: "Add Concern", path: "/concerns/add" },
    ],
  },
  {
    label: "Referral",
    icon: "/assets/svgs/referral-icon.svg",
    path: "/referral",
    submenu: [
      { label: "List", path: "/referral/list" },
      { label: "Rewards", path: "/referral/rewards" },
    ],
  },
  {
    label: "Affiliate",
    icon: "/assets/svgs/affiliate-icon.svg",
    path: "/affiliate",
    submenu: [
      { label: "Dashboard", path: "/affiliate/dashboard" },
      { label: "Commission", path: "/affiliate/commission" },
      { label: "Coupons", path: "/affiliate/coupons" },
      { label: "Sales", path: "/affiliate/sales" },
      {
        label: "Payments",
        path: "/affiliate/payments",
        sub: [
          {
            label: "Pending Payment",
            path: "/affiliate/payments/pending-payment",
          },
          {
            label: "Payment History",
            path: "/affiliate/payments/payment-history",
          },
        ],
      },
      { label: "Doctors", path: "/affiliate/doctors" },
    ],
  },
  {
    label: "FAQ",
    icon: "/assets/svgs/referral-icon.svg",
    path: "/FAQ",
    submenu: [
      {
        label: "Web",
        path: "/FAQ/web",
        sub: [{ label: "Customization", path: "/FAQ/web/customization" }],
      },
      {
        label: "App",
        path: "/FAQ/app",
        sub: [{ label: "Customization", path: "/FAQ/app/customization" }],
      },
    ],
  },
];
