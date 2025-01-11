import React from "react";
import { CalculatorButtonPropsType } from "@/types/calculator";

export const CalculatorButton: React.FC<CalculatorButtonPropsType> = ({
  value,
  onClick,
  className,
  label,
  icon,
}) => {
  return (
    <button
      className={`p-2 text-2xl font-bold rounded-lg text-slate-600 bg-slate-100 flex items-center justify-center 
              hover:bg-slate-300 active:bg-slate-200 focus:outline-none hover:ring-2 hover:ring-slate-300 
              transition-all duration-150 active:animate-pulse ${className}`}
      onClick={() => onClick(value)}
    >
      {icon ?? label}
    </button>
  );
};
