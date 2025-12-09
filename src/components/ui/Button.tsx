import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  width?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  width,
  onClick,
  disabled = false,
  className
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${className}
        cursor-pointer
        px-6 py-2 rounded-lg font-medium text-center
        ${disabled ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-green-800 text-white"}
        ${width ?? ""}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
