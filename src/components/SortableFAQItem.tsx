import React, { useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import type { FAQItem } from "./FAQTabs";

interface Props {
  item: FAQItem;
  selected: boolean;
  toggleSelected: () => void;
}

const SortableFAQItem: React.FC<Props> = ({
  item,
  selected,
  toggleSelected,
}) => {
  const [open, setOpen] = useState(false);

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: item.id,
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="border-b border-gray-300 p-4"
    >
      <div className="flex items-center justify-between">
        {/* CHECKBOX (2nd COLUMN) */}
        <input
          type="checkbox"
          checked={selected}
          onChange={toggleSelected}
          className="mr-4"
        />

        {/* Drag Handle */}
        <button
          {...attributes}
          {...listeners}
          className="cursor-grab text-gray-400 mr-3"
        >
          ⋮⋮
        </button>

        {/* Question */}
        <span
          className="flex-1 text-gray-800 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {item.question}
        </span>

        {/* Arrow */}
        <button onClick={() => setOpen(!open)} className="text-gray-500">
          {open ? "▲" : "▼"}
        </button>
      </div>

      {open && <p className="mt-3 text-gray-600 pl-10">{item.answer}</p>}
    </div>
  );
};

export default SortableFAQItem;
