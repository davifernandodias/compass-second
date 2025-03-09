"use client"
import { useState } from 'react';

interface DoubleRangeSliderProps {
  min?: number;
  max?: number;
  onChange?: (min: number, max: number) => void;
}

export default function DoubleRangeSlider({ 
  min = 0, 
  max = 500, 
  onChange 
}: DoubleRangeSliderProps) {
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), maxValue - 1);
    setMinValue(value);
    if (onChange) onChange(value, maxValue);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), minValue + 1);
    setMaxValue(value);
    if (onChange) onChange(minValue, value);
  };

  const minPos = ((minValue - min) / (max - min)) * 100;
  const maxPos = ((maxValue - min) / (max - min)) * 100;

  return (
    <div className="w-full max-w-md mx-auto space-y-4">
      <div className="relative h-2 bg-gray-200 rounded-full">
        <div
          className="absolute h-2 bg-black rounded-full"
          style={{
            left: `${minPos}%`,
            width: `${maxPos - minPos}%`,
          }}
        />

        <input
          type="range"
          min={min}
          max={max}
          value={minValue}
          onChange={handleMinChange}
          className="absolute w-full cursor-pointer  h-2 bg-transparent appearance-none pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:relative [&::-webkit-slider-thumb]:z-10 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-black [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:appearance-none"
        />

        <input
          type="range"
          min={min}
          max={max}
          value={maxValue}
          onChange={handleMaxChange}
          className="absolute w-full h-2 cursor-pointer bg-transparent appearance-none pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:relative [&::-webkit-slider-thumb]:z-10 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-black [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:appearance-none"
        />
      </div>

      <div className="flex justify-between font-family-satoshi-medium text-black font-medium">
        <span>${minValue}</span>
        <span>${maxValue}</span>
      </div>
    </div>
  );
}