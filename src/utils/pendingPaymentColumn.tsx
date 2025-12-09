import type { PendingPayment } from "./pendingPayment";

export interface Column {
  key: string;
  label: string;
  render?: (row: any, rowIndex?: number) => React.ReactNode;
}

export const pendingPaymentColumns: Column[] = [
  {
    key: "select",
    label: "",
    render: () => null, // Table will override this
  },

  {
    key: "doctorName",
    label: "Doctor Name",
    render: (row: PendingPayment) => (
      <div className="flex items-center gap-3">
        <img src={row.doctorImg} className="h-10 w-10 rounded-full" />
        {row.doctorName}
      </div>
    ),
  },

  { key: "email", label: "Email-id" },
  { key: "mobile", label: "Mobile" },
  { key: "withdrawalAmount", label: "Amount Withdrawal" },
  { key: "requestedDate", label: "Requested Date" },
  { key: "walletAmount", label: "Wallet Amount" },

  {
    key: "details",
    label: "Details",
    render: () => (
      <button className="text-green-700 hover:underline">View All</button>
    ),
  },

  {
    key: "approval",
    label: "Approval",
    render: (row: PendingPayment) => (
      <div className="flex items-center gap-4">
        <button className="text-green-600 hover:underline">Accept</button>
        <button className="text-red-600 hover:underline">Decline</button>
      </div>
    ),
  },
];
