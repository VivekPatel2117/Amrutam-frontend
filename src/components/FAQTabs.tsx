// components/FAQTabs.tsx
import React, { useState } from "react";
import FAQList from "./FAQList";

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQTabsProps {
  tabs: string[];
  data: Record<string, FAQItem[]>; // { Consultation: [...], Shop: [...], ... }
}

const FAQTabs: React.FC<FAQTabsProps> = ({ tabs, data }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="w-full bg-white rounded-xl">
      {/* TABS */}
      <div className="flex sm:justify-center gap-20 mb-2 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 text-sm font-medium 
              ${activeTab === tab ? "text-green-800 border-b-2 border-green-800" : "text-gray-500"}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <hr className="text-gray-300 font-bold" />
      {/* FAQ LIST */}
      <FAQList items={data[activeTab]} />
    </div>
  );
};

export default FAQTabs;
