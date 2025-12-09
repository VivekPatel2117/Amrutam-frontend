import React from "react";

interface ToggleSwitchProps {
  value: boolean;
  onChange: (value: boolean) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ value, onChange }) => {
  return (
    <div
      onClick={() => onChange(!value)}
      className={`
        w-13 h-6                
        rounded-full border-2 
        flex items-center cursor-pointer transition-all 
        border-green-800
        bg-white
      `}
    >
      <div
        className={`
          h-5 w-5           
          rounded-full bg-green-800 transition-all
          ${value ? "translate-x-7" : "translate-x-0"}  
        `}
      ></div>
    </div>
  );
};

export default ToggleSwitch;
