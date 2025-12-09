import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import SortableFAQItem from "./SortableFAQItem";
import type { FAQItem } from "./FAQTabs";
import React, { useState, useEffect } from "react";

interface FAQListProps {
  items: FAQItem[];
}

const FAQList: React.FC<FAQListProps> = ({ items }) => {
  const [faqs, setFaqs] = useState<FAQItem[]>(items);
  const [selectedRows, setSelectedRows] = useState<string[]>([]);

  // Pagination state
  const rowsPerPage = 8;
  const [page, setPage] = useState(1);

  // Sensors for DND
  const sensors = useSensors(useSensor(PointerSensor));

  useEffect(() => {
    setFaqs(items);
    setPage(1);
  }, [items]);

  // Pagination logic
  const totalPages = Math.ceil(faqs.length / rowsPerPage);
  const startIndex = (page - 1) * rowsPerPage;
  const visibleRows = faqs.slice(startIndex, startIndex + rowsPerPage);

  // Drag & Drop reorder
  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (!over) return;

    if (active.id !== over.id) {
      const oldIndex = faqs.findIndex((i) => i.id === active.id);
      const newIndex = faqs.findIndex((i) => i.id === over.id);
      setFaqs(arrayMove(faqs, oldIndex, newIndex));
    }
  };

  // Checkbox Handlers
  const toggleRow = (id: string) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };


  return (
    <div>
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={visibleRows.map((i) => i.id)} strategy={verticalListSortingStrategy}>
          <div className="space-y-2">
            {/* TABLE HEADER STYLE */}

            {/* FAQ Rows */}
            {visibleRows.map((item) => (
              <SortableFAQItem
                key={item.id}
                item={item}
                selected={selectedRows.includes(item.id)}
                toggleSelected={() => toggleRow(item.id)}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>

      {/* PAGINATION FOOTER */}
      <div className="flex justify-between items-center mt-8 p-4 text-sm text-gray-600">
        <div>Rows per page: {rowsPerPage}</div>

        <div className="flex items-center gap-3">
            <span>
              {startIndex + 1}-{Math.min(startIndex + rowsPerPage, faqs.length)} of {faqs.length}
            </span>
          <button
            disabled={page === 1}
            className="px-2 py-1 rounded border disabled:opacity-40"
            onClick={() => setPage(page - 1)}
          >
            ‹
          </button>


          <button
            disabled={page === totalPages}
            className="px-2 py-1 rounded border disabled:opacity-40"
            onClick={() => setPage(page + 1)}
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQList;
