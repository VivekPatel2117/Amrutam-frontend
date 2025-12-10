import React, { useState } from "react";
import type { FAQItem } from "./FAQTabs";
import Button from "./ui/Button";

interface FAQSelectionProps {
  faqs: FAQItem[];
  onCancel: () => void;
  onReplace: (selectedId: string) => void;
}

const FAQSelection: React.FC<FAQSelectionProps> = ({
  faqs,
  onCancel,
  onReplace,
}) => {
  const [selected, setSelected] = useState<string | null>(null);
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="flex flex-col h-full">
      {/* Title */}
      <h2 className="text-center text-xl font-semibold mb-4">
        Select the question that you would like to replace it with
      </h2>

      {/* Scrollable FAQ List */}
      <div className="flex-1 overflow-y-auto pr-2 space-y-4">
        {faqs.map((faq) => (
          <div key={faq.id} className="border-b border-gray-300 pb-3">
            {/* Row */}
            <div className="flex items-center justify-between">
              {/* Checkbox */}
              <input
                type="checkbox"
                checked={selected === faq.id}
                onChange={() => setSelected(faq.id)}
                className="h-3 w-3 mr-4"
              />

              {/* Question */}
              <div
                className="flex-1 cursor-pointer text-sm text-gray-800"
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
              >
                {faq.question}
              </div>

              {/* Arrow */}
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
              >
                {openId === faq.id ? "▲" : "▼"}
              </button>
            </div>

            {/* Answer (accordion content) */}
            {openId === faq.id && (
              <p className="text-gray-600 mt-2 ml-7">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>

      {/* Footer Buttons */}
      <div className="flex justify-end gap-8 items-center mt-4 pt-4">
        <button onClick={onCancel} className="text-gray-700 text-lg">
          Cancel
        </button>

        <Button
          disabled={!selected}
          onClick={() => selected && onReplace(selected)}
          className={`px-6 py-2 rounded-lg text-white text-lg 
            ${selected ? "bg-green-700" : "bg-gray-400 cursor-not-allowed"}
          `}
        >
          Replace
        </Button>
      </div>
    </div>
  );
};

export default FAQSelection;
