import React from "react";
import TopItem from "./TopItem";

interface TopListProps {
  list: {
    name: string;
    specialty?: string;
    image: string;
    percent?: number;
  }[];
}

const TopList: React.FC<TopListProps> = ({ list }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm w-[98vw] lg:w-xl">
      {list.map((item, idx) => (
        <TopItem
          key={idx}
          rank={idx + 1}
          name={item.name}
          specialty={item?.specialty}
          image={item.image}
          percent={item?.percent}
        />
      ))}
    </div>
  );
};

export default TopList;
