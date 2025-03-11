// store.ts
import { create } from "zustand";

interface FilterState {
  initialPage: number;
  finalLimit: number;
  minPrice: number;
  maxPrice: number;
  color: string;
  size: string;
  currentPage: number;
}

interface FilterActions {
  setValue: (field: keyof FilterState, value: string | number) => void;
  reset: () => void;
}

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