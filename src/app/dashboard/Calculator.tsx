"use client";

import React from "react";
import { useCalculatorContext } from "@/contexts/CalculatorContext";
import { CalculatorButton } from "@/components/ui/CalculatorButton";
import { CalculatorButtonType } from "@/types/calculator";
import { BackspaceIcon } from "@heroicons/react/16/solid";




const buttonList: CalculatorButtonType[] = [
  { key: "AC", type: "clear", icon: null },
  { key: "%", type: "operator", icon: null },
  { key: "C", type: "delete", icon: <BackspaceIcon  className="w-7 h-7 text-gray-600"/> },
  { key: "/", type: "operator", icon: null },
  { key: "7", type: "number", icon: null },
  { key: "8", type: "number", icon: null },
  { key: "9", type: "number", icon: null },
  { key: "*", type: "operator", icon: null },
  { key: "4", type: "number", icon: null },
  { key: "5", type: "number", icon: null },
  { key: "6", type: "number", icon: null },
  { key: "-", type: "operator", icon: null },
  { key: "1", type: "number", icon: null },
  { key: "2", type: "number", icon: null },
  { key: "3", type: "number", icon: null },
  { key: "+", type: "operator", icon: null },
  { key: "00", type: "number", icon: null },
  { key: "0", type: "number", icon: null },
  { key: ".", type: "number", icon: null },
  { key: "=", type: "equal", icon: null },
  // { key: "(", type: "operator", icon: null },
  // { key: ")", type: "operator", icon: null },
  // { key: "√", type: "operator", icon: null },
];

export default function Calculator() {
  const { outputValue, equalValue, handleButtonCliked } =
    useCalculatorContext();

  return (
    <div className="flex justify-center min-h-screen items-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-center text-2xl font-bold mb-4 text-slate-600">Calculator</h1>
        <div
          className={`overflow-auto ${
            outputValue.length > 30 ? "cursor-pointer" : "cursor-default"
          }`}
        >
          <div className="text-right text-2xl mb-4">{outputValue}</div>
        </div>
        <div className="text-right text-lg mb-4 min-h-[2rem]">{equalValue}</div>
        <div className="grid grid-cols-4 gap-2">
          {buttonList.map((buttonData) => (
            <CalculatorButton
              key={buttonData.key}
              value=""
              label={buttonData.key}
              icon={buttonData.icon}
              onClick={() => handleButtonCliked(buttonData)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
