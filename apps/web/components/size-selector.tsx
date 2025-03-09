"use client"

import { useState } from "react"

type Size = {
  label: string
  value: string
}

export default function SizeSelector() {
  const [selectedSize, setSelectedSize] = useState("large")

  const sizes: Size[] = [
    { label: "XX-Small", value: "xxsmall" },
    { label: "X-Small", value: "xsmall" },
    { label: "Small", value: "small" },
    { label: "Medium", value: "medium" },
    { label: "Large", value: "large" },
    { label: "X-Large", value: "xlarge" },
    { label: "XX-Large", value: "xxlarge" },
    { label: "3X-Large", value: "3xlarge" },
    { label: "4X-Large", value: "4xlarge" },
  ]

  return (
    <div>
      <div className="grid grid-cols-3 gap-3 max-w-md">
        {sizes.map((size) => (
          <button
            key={size.value}
            onClick={() => setSelectedSize(size.value)}
            className={`
              px-2 py-3 rounded-full text-sm font-medium
              transition-colors duration-200
              ${selectedSize === size.value ? "bg-black text-white" : "bg-gray-100 text-gray-900 hover:bg-gray-200"}
            `}
            aria-label={`Select size ${size.label}`}
            aria-pressed={selectedSize === size.value}
          >
            {size.label}
          </button>
        ))}
      </div>
    </div>
  )
}

