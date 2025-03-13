import { create } from "zustand";

export const useFilterStore = create<FilterState & FilterActions>((set) => ({
  initialPage: 0,
  finalLimit: 75,
  currentPage: 0,
  minPrice: 0,
  maxPrice: 500,
  color: "",
  size: "",
  setValue: (field, value) =>
    set((state) => ({
      ...state,
      [field]: value,
    })),
  reset: () =>
    set({
      initialPage: 0,
      finalLimit: 75,
      minPrice: 0,
      maxPrice: 500,
      color: "",
      size: "",
    }),
}));