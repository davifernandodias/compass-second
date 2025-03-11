"use client";
import { useState } from "react";
import { useFilterStore } from "../store/sidebar-filter";
import { Button } from "@repo/ui/button";

const Sidebar = () => {
  const { setValue } = useFilterStore();
  
  const [tempFilters, setTempFilters] = useState({
    minPrice: 0,
    maxPrice: 500,
    color: "",
    size: "",
  });

  const handleInputChange = (field: keyof typeof tempFilters, value: string | number) => {
    setTempFilters((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const applyFilters = () => {
    setValue("minPrice", tempFilters.minPrice);
    setValue("maxPrice", tempFilters.maxPrice);
    setValue("color", tempFilters.color);
    setValue("size", tempFilters.size);
  };

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      applyFilters();
      alert("enviado")
    }}>
      <label>Min Price</label>
      <input
        type="number"
        value={tempFilters.minPrice}
        onChange={(e) => handleInputChange("minPrice", Number(e.target.value))}
      />

      <label>Max Price</label>
      <input
        type="number"
        value={tempFilters.maxPrice}
        onChange={(e) => handleInputChange("maxPrice", Number(e.target.value))}
      />

      <label>Color</label>
      <input
        type="text"
        value={tempFilters.color}
        onChange={(e) => handleInputChange("color", e.target.value)}
      />

      <label>Size</label>
      <input
        type="text"
        value={tempFilters.size}
        onChange={(e) => handleInputChange("size", e.target.value)}
      />

      <Button type="submit" className="bg-black text-white w-20">Aplicar Filtros</Button>
    </form>
  );
};

export default Sidebar;