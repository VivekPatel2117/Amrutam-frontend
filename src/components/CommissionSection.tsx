import React from "react";
import ToggleSwitch from "./ui/ToggleSwitch";
import FancyInput from "./ui/FancyInput";
import Button from "./ui/Button";

interface FieldConfig {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  type?: "text" | "select";
  options?: string[];
}

interface CommissionSectionProps {
  title: string;
  switchValue: boolean;
  onSwitchChange: (val: boolean) => void;
  fields: FieldConfig[];
  buttonText: string;
  onSubmit?: () => void;
  gridCols?: number; // NEW
}

const CommissionSection: React.FC<CommissionSectionProps> = ({
  title,
  switchValue,
  onSwitchChange,
  fields,
  buttonText,
  onSubmit,
  gridCols = 2, // default → 2 columns
}) => {
  const gridClass = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
  }[gridCols];

  return (
    <div className="w-full p-6 rounded-3xl mt-4">
      {/* Title and Switch */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-medium text-gray-800">{title}</h2>
        <ToggleSwitch value={switchValue} onChange={onSwitchChange} />
      </div>

      {/* Disabled UI */}
      <div
        className={`p-4 rounded-lg h-full ${
          switchValue
            ? "bg-white"
            : "bg-gray-100 opacity-50 pointer-events-none"
        }`}
      >
        {/* Dynamic Grid */}
        <div className={`grid ${gridClass} gap-6 mb-10 mt-4`}>
          {fields.map((field, index) => (
            <FancyInput
              key={index}
              label={field.required ? `${field.label} *` : field.label}
              placeholder={field.placeholder}
              value={field.value}
              onChange={field.onChange}
              type={field.type}
              options={field.options}
              disabled={!switchValue}
            />
          ))}
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <Button disabled={!switchValue}>{buttonText}</Button>
        </div>
      </div>
    </div>
  );
};

export default CommissionSection;
