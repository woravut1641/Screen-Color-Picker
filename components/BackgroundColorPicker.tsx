"use client";

import { useState } from "react";

export default function BackgroundColorPicker() {
  const [bgColor, setBgColor] = useState("#ffffff");
  const [isColorPickerVisible, setIsColorPickerVisible] = useState(true);

  const toggleColorPicker = () => {
    setIsColorPickerVisible((prev) => !prev); // สลับการแสดงผลตัวเลือกสี
  };

  return (
    <div>
      <div
        className="flex flex-col items-center justify-center min-h-screen"
        style={{ backgroundColor: bgColor }}
      >
        <div className="relative size-32 ...">
          <div className="absolute -top-4 -left-4 size-14 ..."></div>
        </div>
        <div className="relative">
          <button
            onClick={toggleColorPicker}
            className={
              "p-2 text-white rounded-xl shadow-md" +
              (isColorPickerVisible
                ? " -top-4 -right-4 absolute bg-red-500 hover:bg-red-600"
                : " bg-blue-500 hover:bg-blue-600")
            }
          >
            {isColorPickerVisible ? "X" : "Change"}
          </button>
          <div
            className={
              "p-6 bg-background shadow-xl rounded-2xl flex flex-col items-center" +
              (isColorPickerVisible ? "" : " hidden")
            }
          >
            <h1 className="text-2xl font-bold mb-4">Choose Background</h1>
            <input
              type="color"
              value={bgColor}
              onChange={(e) => setBgColor(e.target.value)}
              className="w-24 h-12 cursor-pointer border-none"
            />
            <p className="mt-4 text-lg">
              Selected Color: <span className="font-mono">{bgColor}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
