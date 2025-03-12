type Color = {
  name: string
  value: string
  textColor: string
  border: string
}

export const colors: Color[] = [
  { name: "Green", value: "bg-green-500", textColor: "text-white", border: "border-green-700" },
  { name: "Red", value: "bg-red-500", textColor: "text-white", border: "border-red-700" },
  { name: "Yellow", value: "bg-yellow-400", textColor: "text-black", border: "border-yellow-600" },
  { name: "Orange", value: "bg-orange-500", textColor: "text-white", border: "border-orange-700" },
  { name: "Cyan", value: "bg-cyan-400", textColor: "text-black", border: "border-cyan-600" },
  { name: "Blue", value: "bg-blue-600", textColor: "text-white", border: "border-blue-800" },
  { name: "Purple", value: "bg-purple-600", textColor: "text-white", border: "border-purple-800" },
  { name: "Pink", value: "bg-pink-500", textColor: "text-white", border: "border-pink-700" },
  { name: "White", value: "bg-white", textColor: "text-black", border: "border-gray-300" },
  { name: "Black", value: "bg-black", textColor: "text-white", border: "border-gray-900" },
]