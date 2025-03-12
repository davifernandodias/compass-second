"use client";
import { useState } from "react";
import { useFilterStore } from "../store/sidebar-filter";
import { Button } from "@repo/ui/button";
import IconFilterMobile from "@public/svg/clothes/icon-filter-mobile";
import IconFilterSidebar from "@public/svg/clothes/icon-filter-sidebar";
import IconCollapse from "@public/svg/clothes/icon-collapse";
import { sizes } from "@store/sidebar-sizes";
import { colors } from "@store/sidebar-colors";
import { Check } from "lucide-react";

interface SidebarProps {
  isEnableSidebar: boolean;
  onChange: () => void;
}

const Sidebar = ({ isEnableSidebar, onChange }: SidebarProps) => {
  const { setValue } = useFilterStore();

  const [tempFilters, setTempFilters] = useState({
    minPrice: 50,
    maxPrice: 700,
    color: "",
    size: "Large",
  });

  const MIN = 0;
  const MAX = 1000;

  const handleInputChange = (
    field: keyof typeof tempFilters,
    value: string | number
  ) => {
    let newValue = value;
    if (field === "minPrice" || field === "maxPrice") {
      const numValue = Number(value);
      if (field === "minPrice") {
        newValue = Math.max(MIN, Math.min(numValue, tempFilters.maxPrice));
      } else if (field === "maxPrice") {
        newValue = Math.min(MAX, Math.max(numValue, tempFilters.minPrice));
      }
    }
    setTempFilters((prev) => ({
      ...prev,
      [field]: newValue,
    }));
  };

  const applyFilters = () => {
    setValue("minPrice", tempFilters.minPrice);
    setValue("maxPrice", tempFilters.maxPrice);
    setValue("color", tempFilters.color);
    setValue("size", tempFilters.size);
  };

  if (!isEnableSidebar) return null;

  return (
    <div className="flex flex-col bg-white border border-gray-secundary gap-4 p-6 rounded-3xl fixed lg:relative">
      <div className="flex justify-between items-center">
        <p className="font-family-satoshi-medium font-bold text-lg">Filters</p>
        <Button className="text-white hidden lg:flex bg-transparent">
          <IconFilterSidebar className="w-5.5 h-5.5" />
        </Button>
        <Button onclick={onChange} className="text-white lg:hidden">
          <IconFilterMobile className="w-5 h-5" />
        </Button>
      </div>
      <div>
        <hr className="h-0.5 border border-gray-secundary" />
      </div>
      <div className="flex justify-between items-center font-family-satoshi-medium font-medium text-gray-text">
        <p>T-shirts</p>
        <IconCollapse className="w-3 h-3" />
      </div>
      <div className="flex justify-between items-center font-family-satoshi-medium font-medium text-gray-text">
        <p>Shorts</p>
        <IconCollapse className="w-3 h-3" />
      </div>
      <div className="flex justify-between items-center font-family-satoshi-medium font-medium text-gray-text">
        <p>Shirts</p>
        <IconCollapse className="w-3 h-3" />
      </div>
      <div className="flex justify-between items-center font-family-satoshi-medium font-medium text-gray-text">
        <p>Hoodie</p>
        <IconCollapse className="w-3 h-3" />
      </div>
      <div className="flex justify-between items-center font-family-satoshi-medium font-medium text-gray-text">
        <p>Jeans</p>
        <IconCollapse className="w-3 h-3" />
      </div>
      <div>
        <hr className="h-0.5 border border-gray-secundary" />
      </div>
      <form
        className="bg-white"
        onSubmit={(e) => {
          e.preventDefault();
          applyFilters();
          alert("Filtros aplicados");
        }}
      >
        <div className="space-y-5">
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <label className="block font-family-satoshi-medium font-bold text-lg">
                Price
              </label>
              <IconCollapse className="w-3 h-3 -rotate-90" />
            </div>
            <div className="relative h-2 bg-gray-200 rounded-full">
              <div
                className="absolute h-2 bg-black rounded-full"
                style={{
                  left: `${(tempFilters.minPrice / MAX) * 100}%`,
                  width: `${((tempFilters.maxPrice - tempFilters.minPrice) / MAX) * 100}%`,
                }}
              />
              <input
                type="range"
                min={MIN}
                max={MAX}
                value={tempFilters.minPrice}
                onChange={(e) =>
                  handleInputChange("minPrice", Number(e.target.value))
                }
                className="absolute w-full h-2 bg-transparent appearance-none pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:relative [&::-webkit-slider-thumb]:z-10 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-black [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:appearance-none"
              />
              <input
                type="range"
                min={MIN}
                max={MAX}
                value={tempFilters.maxPrice}
                onChange={(e) =>
                  handleInputChange("maxPrice", Number(e.target.value))
                }
                className="absolute w-full h-2 bg-transparent appearance-none pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:relative [&::-webkit-slider-thumb]:z-10 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-black [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:appearance-none"
              />
            </div>
            <div className="flex justify-between font-family-satoshi-medium text-black font-medium">
              <span>${tempFilters.minPrice}</span>
              <span>${tempFilters.maxPrice}</span>
            </div>
          </div>
          <div>
            <hr className="h-0.5 border border-gray-secundary" />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <label className="block font-family-satoshi-medium font-bold text-lg">
                Colors
              </label>
              <IconCollapse className="w-3 h-3 -rotate-90" />
            </div>
            <div>
              <div className="grid grid-cols-5 gap-4 max-w-md">
                {colors.slice(0, 5).map((color) => (
                  <button
                    key={color.name}
                    type="button" // Prevent form submission
                    className={`${color.value} ${color.border} w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:scale-105 transition-transform border-2`}
                    onClick={() => handleInputChange("color", color.name)}
                    aria-label={`Select ${color.name} color`}
                  >
                    {tempFilters.color === color.name && (
                      <Check className={`w-6 h-6 ${color.textColor}`} />
                    )}
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-5 gap-4 max-w-md mt-4">
                {colors.slice(5, 10).map((color) => (
                  <button
                    key={color.name}
                    type="button" // Prevent form submission
                    className={`${color.value} ${color.border} w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:scale-105 transition-transform border-2`}
                    onClick={() => handleInputChange("color", color.name)}
                    aria-label={`Select ${color.name} color`}
                  >
                    {tempFilters.color === color.name && (
                      <Check className={`w-6 h-6 ${color.textColor}`} />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div>
            <hr className="h-0.5 border border-gray-secundary" />
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <label className="block font-family-satoshi-medium font-bold text-lg">
                Size
              </label>
              <IconCollapse className="w-3 h-3 -rotate-90" />
            </div>
            <div className="flex flex-wrap w-52 gap-4 font-family-satoshi-regular">
              {sizes.map((size) => (
                <div
                  key={size}
                  onClick={() => handleInputChange("size", size)}
                  className={`px-3 py-2 rounded-3xl cursor-pointer transition-colors ${
                    tempFilters.size === size
                      ? "bg-black text-white"
                      : "bg-gray-secundary text-black hover:bg-black hover:text-white"
                  }`}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>
          <div>
            <hr className="h-0.5 border border-gray-secundary" />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <p className="block font-family-satoshi-medium font-bold text-lg">
                Dress Style
              </p>
              <IconCollapse className="w-3 h-3 -rotate-90" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center font-family-satoshi-medium font-medium text-gray-text">
                <p>Casual</p>
                <IconCollapse className="w-3 h-3" />
              </div>
              <div className="flex justify-between items-center font-family-satoshi-medium font-medium text-gray-text">
                <p>Formal</p>
                <IconCollapse className="w-3 h-3" />
              </div>
              <div className="flex justify-between items-center font-family-satoshi-medium font-medium text-gray-text">
                <p>Party</p>
                <IconCollapse className="w-3 h-3" />
              </div>
              <div className="flex justify-between items-center font-family-satoshi-medium font-medium text-gray-text">
                <p>Gym</p>
                <IconCollapse className="w-3 h-3" />
              </div>
            </div>
          </div>
        </div>

        <Button
          type="submit"
          className="bg-black text-white w-full font-family-satoshi-medium font-medium rounded-4xl h-12 mt-6 cursor-pointer hover:opacity-75"
        >
          Apply Filter
        </Button>
      </form>
    </div>
  );
};

export default Sidebar;