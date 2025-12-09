import React from "react";
import Icon from "./Icon";

interface TopItemProps {
  rank: number;
  name: string;
  specialty?: string;
  image: string;
  percent?: number; // positive or negative
}

const TopItem: React.FC<TopItemProps> = ({
  rank,
  name,
  specialty,
  image,
  percent,
}) => {
  let isPositive = true;
  if(percent){
     isPositive = percent >= 0;
  }

  return (
    <div className="flex items-center justify-between py-3">
      {/* LEFT: Rank + Image + Details */}
      <div className="flex items-center gap-4">
        <span className="text-gray-700 font-medium">{rank}.</span>

        <Icon
          src={image}
          className="h-12 w-12 rounded-full object-cover"
          alt={name}
        />

        <div>
          <p className="text-gray-900 font-medium">{name}</p>
          <p className="text-gray-500 text-sm">{specialty}</p>
        </div>
      </div>

      {/* RIGHT: Percentage Badge */}
      {percent && (
        <div
          className={`px-3 py-1 rounded-lg text-sm font-medium flex items-center gap-1 w-18
            ${isPositive ? "bg-green-100 text-green-800" : "bg-red-100 text-red-700"}
          `}
        >
          {isPositive ? "↑ +" : "↓"} {percent}%
        </div>

      )}
    </div>
  );
};

export default TopItem;
