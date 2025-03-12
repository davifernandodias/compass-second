'use client';

import { useState, useEffect } from "react";
import { useFilterStore } from "../store/sidebar-filter";
import IconFilterSidebar from "@public/svg/clothes/icon-filter-sidebar";
import IconCollapse from "@public/svg/clothes/icon-collapse";

import { Check } from 'lucide-react';
import IconCloseSideber from "@public/svg/clothes/icon-close-sideber";
import { colors } from "@/store/sidebar-colors";
import { Button } from "@/components/ui/button";
import { sizes } from "@/store/sidebar-sizes";

interface SidebarProps {
  isEnableSidebar: boolean;
  onChange: () => void;
}

const Sidebar = ({ isEnableSidebar, onChange }: SidebarProps) => {
  const { setValue } = useFilterStore();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkIfMobile();

    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  useEffect(() => {
    if (isMobile && isEnableSidebar) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobile, isEnableSidebar]);

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
    <>
      {/* Overlay for mobile */}
      {isMobile && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={onChange}
        />
      )}

      <div
        className={`
          fixed lg:relative
          bg-white
          scrollbar-none
          border border-gray-200
          rounded-lg lg:rounded-xl
          p-6
          overflow-y-auto
          z-50 lg:z-10
          transition-all duration-300 ease-in-out
          ${isMobile ? 'inset-0 top-[60px] h-[calc(100%-60px)]' : 'w-80 h-auto'}
        `}
      >
        <div className="flex justify-between items-center">
          <p className="text-lg font-family-satoshi-medium font-bold">Filters</p>
          <div className="flex items-center">
            <button
              className="hidden lg:flex p-1"
              aria-label="Filter sidebar"
            >
              <IconFilterSidebar className="w-5 h-5" />
            </button>
            <button
              onClick={onChange}
              className="lg:hidden p-1"
              aria-label="Close sidebar"
            >
              <IconCloseSideber className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="h-px bg-gray-200 my-4" />

        <div className="space-y-4">
          {["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"].map((category) => (
            <div key={category} className="flex justify-between items-center font-family-satoshi-medium font-light text-gray-600 hover:text-gray-900 cursor-pointer">
              <p className="font-medium">{category}</p>
              <IconCollapse className="w-3 h-3" />
            </div>
          ))}
        </div>

        <div className="h-px bg-gray-200 my-4" />

        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            applyFilters();
            alert("Filtros aplicados");
            if (isMobile) onChange();
          }}
        >
          <div className="space-y-5">
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <label className=" text-lg font-family-satoshi-medium font-bold ">Price</label>
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
              <div className="flex justify-between text-black font-medium">
                <span className="font-family-satoshi-medium">${tempFilters.minPrice}</span>
                <span className="font-family-satoshi-medium">${tempFilters.maxPrice}</span>
              </div>
            </div>

            <div className="h-px bg-gray-200" />

            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <label className=" text-lg font-family-satoshi-medium font-bold ">Colors</label>
                <IconCollapse className="w-3 h-3 -rotate-90" />
              </div>
              <div>
                <div className="grid grid-cols-5 gap-4 max-w-md">
                  {colors.slice(0, 5).map((color) => (
                    <button
                      key={color.name}
                      type="button"
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
                      type="button"
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

            <div className="h-px bg-gray-200" />

            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <label className=" text-lg font-family-satoshi-medium font-bold ">Size</label>
                <IconCollapse className="w-3 h-3 -rotate-90" />
              </div>
              <div className="flex flex-wrap gap-4">
                {sizes.map((size) => (
                  <div
                    key={size}
                    onClick={() => handleInputChange("size", size)}
                    className={`px-3 py-2 rounded-full cursor-pointer transition-colors font-family-satoshi-medium ${
                      tempFilters.size === size
                        ? "bg-black text-white"
                        : "bg-gray-100 text-black hover:bg-black hover:text-white"
                    }`}
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>

            <div className="h-px bg-gray-200" />

            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <p className=" text-lg font-family-satoshi-medium font-bold ">Dress Style</p>
                <IconCollapse className="w-3 h-3 -rotate-90" />
              </div>
              <div className="flex flex-col gap-3">
                {["Casual", "Formal", "Party", "Gym"].map((style) => (
                  <div key={style} className="flex justify-between items-center text-gray-600 font-family-satoshi-regular font-light hover:text-gray-900 cursor-pointer">
                    <p>{style}</p>
                    <IconCollapse className="w-3 h-3" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-black text-white font-medium rounded-full h-12 hover:opacity-90"
          >
            Apply Filter
          </Button>
        </form>
      </div>
    </>
  );
};

export default Sidebar;