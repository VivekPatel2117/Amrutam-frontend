export type SubMenuItem = {
  label: string;
  path: string;
  sub?: SubMenuItem[];
};

export type SidebarItemType = {
  label: string;
  icon: string;
  path?: string; // optional parent route
  submenu?: SubMenuItem[];
};

// utils/paymentHistoryTypes.ts
export interface PaymentHistory {
  doctorName: string;
  doctorImg: string;
  email: string;
  mobile: string;
  withdrawalAmount: string;
  requestedDate: string;
  walletAmount: string;
  status: "Paid" | "Decline";
  approvalDate: string;
}
