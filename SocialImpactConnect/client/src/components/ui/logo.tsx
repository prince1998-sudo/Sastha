import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  color?: "primary" | "white";
}

const Logo: React.FC<LogoProps> = ({ 
  className, 
  size = "md", 
  color = "primary" 
}) => {
  // Size mapping for text
  const textSizeMap = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl"
  };
  
  return (
    <div className={cn("flex items-center", className)}>
      <span className={cn(
        "font-bold", 
        "text-red-600", // Always use red color as requested
        textSizeMap[size]
      )}>
        Manav Ekata Sudhar Kendra
      </span>
    </div>
  );
};

export default Logo;
