import React from "react";
import StatCard from "./StatCard";

interface StatsSectionProps {
  stats: {
    title: string;
    icon: string;
    value: number | string;
    suffix?: string;
  }[];
}

const StatsSection: React.FC<StatsSectionProps> = ({ stats }) => {
  return (
    <div
      className="
        grid 
         grid-cols-2    
        sm:grid-cols-2
        lg:grid-cols-4
        gap-4
        max-w-screen
      "
    >
      {stats.map((item, idx) => (
        <StatCard
          key={idx}
          title={item.title}
          icon={item.icon}
          value={item.value}
          suffix={item.suffix}
        />
      ))}
    </div>
  );
};

export default StatsSection;
