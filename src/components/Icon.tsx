import React from "react";

type IconProps = {
  src: string;             // Path to SVG file
  size?: number;           // Optional size
  className?: string;      // Tailwind classes
  alt?: string;
};

const Icon: React.FC<IconProps> = ({
  src,
  size = 24,
  className = "",
  alt = "icon"
}) => {
  return (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={className}
    />
  );
};

export default Icon;
