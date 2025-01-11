"use client";

import React, { useState, createContext, ReactNode, useContext } from "react";
import {
  CalculatorButtonType,
  CalculatorContextType,
} from "@/types/calculator";
import { Notyf } from "notyf";

const CalculatorContext = createContext<CalculatorContextType | undefined>(
  undefined
);

const CalculatorProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [outputValue, setOutputValue] = useState("0");
  const [equalValue, setEqualValue] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [previousValue, setPreviousValue] = useState<string | null>(null);

  const handleButtonCliked = (button: CalculatorButtonType) => {
    if (button.type === "number" || button.type === "operator") {
      setOutputValue(
        outputValue === "0" ? button.key : outputValue + button.key
      );
    } else if (button.type === "equal") {
      processComputation();
    } else if (button.type === "delete") {
      setOutputValue(outputValue.length > 1 ? outputValue.slice(0, -1) : "0");
      setEqualValue(null);
    } else if (button.type === "clear") {
      clearAll();
    }
  };

  // Checks if there are operator at the end of the input to avoid error
  const hasOperatorAtEnd = (input: string): boolean => {
    const operatorRegex = /[+\-*/%&]$/;
    return operatorRegex.test(input);
  };

  // Function that calculates the inputed values
  const processComputation = () => {
    const notyf = new Notyf();
    if (hasOperatorAtEnd(outputValue)) {
      return notyf.error("Please complete your input");
    } else {
      const result = eval(outputValue);
      setEqualValue(result);
    }
  };

  // Function that clear all inputted values and operator
  const clearAll = () => {
    setOutputValue("0");
    setEqualValue(null);
    setOperator(null);
    setPreviousValue(null);
  };

  return (
    <CalculatorContext.Provider
      value={{
        outputValue,
        equalValue,
        handleButtonCliked,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};

const useCalculatorContext = (): CalculatorContextType => {
  const context = useContext(CalculatorContext);
  if (!context) {
    throw new Error("Usage must within the CalculatorProvider");
  }
  return context;
};

export { CalculatorContext, CalculatorProvider, useCalculatorContext };
