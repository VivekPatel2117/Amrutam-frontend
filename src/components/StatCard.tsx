import React from "react";
import Icon from "./Icon";

interface StatCardProps {
  title: string;
  icon: string;
  value: string | number;
  suffix?: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, icon, value, suffix }) => {
  return (
    <div
      className="
        bg-white rounded-2xl shadow-sm border border-gray-200 
        p-4 sm:p-5 
        sm:w-full
        w-full
      "
    >
      <p className="text-gray-700 font-medium mb-3 sm:mb-4 text-sm sm:text-base">
        {title}
      </p>

      <div className="flex items-center gap-3 sm:gap-4">
        <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-yellow-50 flex items-center justify-center">
          <Icon src={icon} size={24} className="sm:size-[30px]" />
        </div>

        <p className="text-2xl sm:text-3xl font-semibold text-green-800">
          {value}
          <span className="text-xs sm:text-sm text-gray-500 ml-1 font-normal">
            {suffix}
          </span>
        </p>
      </div>
    </div>
  );
};

export default StatCard;
