"use client";

import { useEffect, useState, createContext } from "react";
import { getAllProducts } from "../services/products";
import Product from "./product";
import SidebarContent from "./sidebar-content";
import IconFilterMobile from "@public/svg/clothes/icon-filter-mobile";

interface SidebarContextType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SidebarContext = createContext<SidebarContextType>({
  isOpen: false,
  setIsOpen: () => {},
});

export const ProductContent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prod, setProd] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getAllProducts({ initial: 0, finalLimit: 1 });
      setProd(products);
    };
    fetchProducts();
  }, []);

  return (
    <div className="flex lg:gap-16">
      <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
        <div className="bg-red-200">
          <SidebarContent />
        </div>

        <div className="flex flex-col bg-red-200 lg:p-6 gap-6">
          <div className="flex gap-4 bg-yellow-200 justify-between">
            <div className="flex gap-4 lg:justify-between items-center w-full">
            <h1 className="font-family-satoshi-medium text-xl font-bold lg:text-3xl">Casual</h1>
            <div className="flex gap-2 items-center">
              <p className="font-family-satoshi-regular text-14 font-light text-gray-text lg:text-16">
                Showing 1-10 of 100 Products
              </p>
              <p className="hidden lg:flex gap-2 font-family-satoshi-regular text-gray-text">
                Sort by: <span className="font-family-satoshi-medium font-medium">Most Popular</span>
              </p>
            </div>
            </div>
            <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
              <IconFilterMobile className="w-9.5 h-9.5"/>
            </div>
          </div>
          <div className="bg-orange-400">
            <Product products={prod} />
          </div>
        </div>
      </SidebarContext.Provider>
    </div>
  );
};
