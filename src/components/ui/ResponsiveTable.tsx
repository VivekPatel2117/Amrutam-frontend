import React, { useState, useEffect } from "react";

export interface Column {
  key: string;
  label: string;
  render?: (row: any, rowIndex?: number) => React.ReactNode;
}

interface ResponsiveTableProps {
  columns: Column[];
  data: any[];
  rowsPerPage: number;
  searchQuery?: string;
  selectable?: boolean;
}

const ResponsiveTable: React.FC<ResponsiveTableProps> = ({
  columns,
  data,
  rowsPerPage,
  searchQuery = "",
  selectable = false,
}) => {
  const [page, setPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  // Reset selected rows when page changes
  useEffect(() => {
    setSelectedRows([]);
  }, [page]);

  // Reset page on search
  useEffect(() => {
    setPage(1);
  }, [searchQuery]);

  // Filter
  const query = searchQuery.toLowerCase();
  const filteredData = data.filter((row) =>
    columns.some((col) => {
      const value = row[col.key];
      return value?.toString().toLowerCase().includes(query);
    })
  );

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const startIndex = (page - 1) * rowsPerPage;
  const visibleRows = filteredData.slice(startIndex, startIndex + rowsPerPage);

  // Checkbox handlers
  const toggleRow = (rowIndex: number) => {
    setSelectedRows((prev) =>
      prev.includes(rowIndex)
        ? prev.filter((i) => i !== rowIndex)
        : [...prev, rowIndex]
    );
  };

  const toggleSelectAll = () => {
    if (selectedRows.length === visibleRows.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(visibleRows.map((_, i) => i));
    }
  };

  // Identify if this table has a select column
  const hasSelectColumn = columns.some((col) => col.key === "select");

  return (
    <div className="w-full overflow-x-auto  rounded-3xl p-4">
      <table className="bg-white w-full border-collapse">
        <thead>
          <tr className="border-b-2 border-gray-300">
            {columns.map((col, colIndex) => (
              <th key={colIndex} className="px-4 py-3 text-sm text-center">
                {hasSelectColumn && col.key === "select" ? (
                  <input
                    type="checkbox"
                    checked={
                      selectedRows.length === visibleRows.length &&
                      visibleRows.length > 0
                    }
                    onChange={toggleSelectAll}
                    className="h-4 w-4"
                  />
                ) : (
                  col.label
                )}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {visibleRows.length ? (
            visibleRows.map((row, idx) => (
              <tr key={idx} className="border-b-2 border-gray-300">
                {columns.map((col, colIndex) => (
                  <td key={colIndex} className="px-4 py-4 text-center text-sm">
                    {col.key === "select" && hasSelectColumn ? (
                      <input
                        className="h-4 w-4"
                        type="checkbox"
                        checked={selectedRows.includes(idx)}
                        onChange={() => toggleRow(idx)}
                      />
                    ) : col.render ? (
                      col.render(row, idx)
                    ) : (
                      row[col.key]
                    )}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={columns.length}
                className="text-center py-6 text-gray-400"
              >
                No matching records
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* PAGINATION */}
      <div className="flex justify-between items-center mt-4">
        <span className="text-gray-500">
          Rows per page: {rowsPerPage}{" "}
          {selectedRows.length > 0
            ? "| Selected Rows: " + selectedRows.length
            : ""}
        </span>

        <div className="flex items-center gap-2">
          <span className="text-gray-500">
            {page} - {rowsPerPage} of {data.length}
          </span>
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="px-2 border border-gray-300 disabled:opacity-40"
          >
            ‹
          </button>

          <button
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
            className="px-2 border border-gray-300 disabled:opacity-40"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveTable;
