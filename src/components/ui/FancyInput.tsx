import React from "react";

interface FancyInputProps {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (val: string) => void;
  type?: "text" | "select";
  options?: string[];
  disabled?: boolean;
}

const FancyInput: React.FC<FancyInputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  options = [],
  disabled = false,
}) => {
  return (
    <div className={`w-full relative ${disabled ? "opacity-50" : ""}`}>
      {/* Label */}
      <div className="absolute -top-3 left-4 px-1 bg-white z-10 flex items-center gap-1">
        <label
          className={`font-semibold text-sm ${
            disabled ? "text-gray-400" : "text-black"
          }`}
        >
          {label.replace(" *", "")}
        </label>

        {label.endsWith("*") && <span className="text-red-500">*</span>}
      </div>

      {/* Input Box */}
      <div
        className={`
          w-full h-12 rounded-2xl border-2 
          ${disabled ? "border-gray-300 bg-gray-100" : "border-[#c0c0cdc4]"}
          flex items-center justify-between px-4 text-gray-600
          ${disabled ? "pointer-events-none" : ""}
        `}
      >
        {type === "select" ? (
          <select
            disabled={disabled}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="
              w-full bg-transparent outline-none
              appearance-none text-gray-700 disabled:text-gray-400
            "
          >
            {/* Placeholder */}
            {placeholder && !value && (
              <option value="" disabled hidden>
                {placeholder}
              </option>
            )}

            {options.map((opt, i) => (
              <option key={i} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        ) : (
          <input
            disabled={disabled}
            type="text"
            value={value}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
            className="
              w-full bg-transparent outline-none 
              placeholder-gray-400 text-gray-700
              disabled:text-gray-400
            "
          />
        )}

        {/* Down Arrow for select */}
        {type === "select" && (
          <span className="text-gray-300 text-xs pointer-events-none -ml-6">
            ▼
          </span>
        )}
      </div>
    </div>
  );
};

export default FancyInput;
