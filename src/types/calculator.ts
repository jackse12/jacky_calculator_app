import { ReactNode } from "react";

export interface CalculatorButtonType {
  key: string;
  type?: string;
  icon?: ReactNode;
}

export interface CalculatorButtonPropsType {
  label: string;
  value?: string;
  icon?: ReactNode;
  onClick: (value?: string) => void;
  className?: string;
}

export interface CalculatorContextType {
  outputValue: string;
  equalValue?: number | null;
  handleButtonCliked: (value: CalculatorButtonType) => void;
}
