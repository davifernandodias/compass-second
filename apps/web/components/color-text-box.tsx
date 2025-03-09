"use client"

import { useState } from "react"
import { Check } from "lucide-react"

type Color = {
  name: string
  value: string
  textColor: string
  border: string
}

export default function ColorPicker() {
  const [selectedColor, setSelectedColor] = useState<string>("blue")

  const colors: Color[] = [
    { name: "green", value: "bg-green-500", textColor: "text-white", border: "border-green-700" },
    { name: "red", value: "bg-red-500", textColor: "text-white", border: "border-red-700" },
    { name: "yellow", value: "bg-yellow-400", textColor: "text-black", border: "border-yellow-600" },
    { name: "orange", value: "bg-orange-500", textColor: "text-white", border: "border-orange-700" },
    { name: "cyan", value: "bg-cyan-400", textColor: "text-black", border: "border-cyan-600" },
    { name: "blue", value: "bg-blue-600", textColor: "text-white", border: "border-blue-800" },
    { name: "purple", value: "bg-purple-600", textColor: "text-white", border: "border-purple-800" },
    { name: "pink", value: "bg-pink-500", textColor: "text-white", border: "border-pink-700" },
    { name: "white", value: "bg-white", textColor: "text-black", border: "border-gray-300" },
    { name: "black", value: "bg-black", textColor: "text-white", border: "border-gray-900" },
  ]

  return (
    <div>
      <div className="grid grid-cols-5 gap-4 max-w-md">
        {colors.slice(0, 5).map((color) => (
          <button
            key={color.name}
            className={`${color.value} ${color.border} w-10 h-10  rounded-full flex items-center justify-center shadow-md hover:scale-105 transition-transform border-2`}
            onClick={() => setSelectedColor(color.name)}
            aria-label={`Select ${color.name} color`}
          >
            {selectedColor === color.name && <Check className={`w-6 h-6 ${color.textColor}`} />}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-5 gap-4 max-w-md mt-4">
        {colors.slice(5, 10).map((color) => (
          <button
            key={color.name}
            className={`${color.value} ${color.border} w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:scale-105 transition-transform border-2`}
            onClick={() => setSelectedColor(color.name)}
            aria-label={`Select ${color.name} color`}
          >
            {selectedColor === color.name && <Check className={`w-6 h-6 ${color.textColor}`} />}
          </button>
        ))}
      </div>
    </div>
  )
}

