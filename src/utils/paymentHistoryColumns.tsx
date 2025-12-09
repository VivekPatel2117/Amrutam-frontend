// utils/paymentHistoryColumns.ts
import type { PaymentHistory } from "./types";

export interface Column {
  key: string;
  label: string;
  render?: (row: PaymentHistory, rowIndex?: number) => React.ReactNode;
}

export const getPaymentHistoryColumns = (
  selectedRows: number[],
  toggleRow: (index: number) => void,
  toggleSelectAll: () => void,
  allVisibleSelected: boolean
): Column[] => [
  {
    key: "select",
    label: (
      <input
        type="checkbox"
        className="h-4 w-4"
        checked={allVisibleSelected}
        onChange={toggleSelectAll}
      />
    ) as any,
    render: (_, rowIndex) => (
      <input
        type="checkbox"
        className="h-4 w-4"
        checked={selectedRows.includes(rowIndex!)}
        onChange={() => toggleRow(rowIndex!)}
      />
    ),
  },

  {
    key: "doctorName",
    label: "Doctor Name",
    render: (row: PaymentHistory) => (
      <div className="flex items-center gap-3">
        <img
          src={row.doctorImg}
          className="h-10 w-10 rounded-full object-cover"
        />
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
    key: "status",
    label: "Status",
    render: (row) => (
      <span
        className={`font-semibold ${
          row.status === "Paid" ? "text-green-600" : "text-red-600"
        }`}
      >
        {row.status}
      </span>
    ),
  },

  {
    key: "approvalDate",
    label: "Approval Date",
  },
];
