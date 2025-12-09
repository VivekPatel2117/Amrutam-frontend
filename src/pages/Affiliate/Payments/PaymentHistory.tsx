import { useState } from "react";
import ResponsiveTable from "../../../components/ui/ResponsiveTable";
import { getPaymentHistoryColumns } from "../../../utils/paymentHistoryColumns";
import { paymentHistoryData } from "../../../utils/paymentHistoryData";
import Icon from "../../../components/Icon";
export default function PaymentHistoryPage() {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleRow = (index: number) => {
    setSelectedRows((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const toggleSelectAll = () => {
    if (selectedRows.length === paymentHistoryData.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(paymentHistoryData.map((_, i) => i));
    }
  };

  const allVisibleSelected =
    selectedRows.length === paymentHistoryData.length &&
    paymentHistoryData.length > 0;

  const columns = getPaymentHistoryColumns(
    selectedRows,
    toggleRow,
    toggleSelectAll,
    allVisibleSelected
  );

  return (
     <div className="flex flex-col">
        <div className="sector3 p-6">
  <div className="bg-white p-6 rounded-xl flex flex-col gap-4">

    {/* HEADER SECTION (No scrolling) */}
    <div className="headers-section flex sm:flex-row flex-col items-center gap-4 w-full">
      <h2 className="text-[20px] font-semibold text-left text-black mb-3 sm:w-100 w-full">
        Pending Payment History
      </h2>

      {/* Search + icons */}
      <div className="flex flex-row justify-between w-full items-center mb-4">
        <div className="flex items-center gap-3">

          {/* Search Box */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search here"
              onChange={(e)=> setSearchQuery(e.target.value)}
              className="
                w-full bg-[#f0f7f4] px-9 py-3 rounded-lg outline-none 
                placeholder-gray-400 text-sm
              "
            />
            <span className="absolute left-3 top-2.5 text-green-600">
              <Icon src="/assets/svgs/search-icon.svg" size={18} />
            </span>
          </div>

          {/* Plus & Refresh Icons */}
          <div className="flex gap-2">
            <button className="bg-gray-100 h-10 w-10 rounded-lg flex items-center justify-center">
              <Icon src="/assets/svgs/plus.svg" size={18} />
            </button>
            <button className="bg-gray-100 h-10 w-10 rounded-lg flex items-center justify-center">
              <Icon src="/assets/svgs/re-fresh.svg" size={18} />
            </button>
          </div>
        </div>

        <div className="action-buttons flex gap-4">
           <button className="bg-gray-100 h-10 w-10 rounded-lg flex items-center justify-center">
            <Icon src="/assets/svgs/sort-icon.svg" size={18} />
          </button>
          <button className="bg-gray-100 h-10 w-10 rounded-lg flex items-center justify-center">
            <Icon src="/assets/svgs/download-icon.svg" size={18} />
          </button>
          
        </div>
      </div>
    </div>

    {/* TABLE SECTION — ONLY THIS SCROLLS */}
    <div className="w-full max-w-full overflow-x-auto overflow-y-hidden">
  <div className="min-w-max"> 
    <ResponsiveTable
      columns={columns}
      data={paymentHistoryData}
      rowsPerPage={7}
      searchQuery={searchQuery}
    />
  </div>
</div>

  </div>
</div>
     </div>
  );
}
