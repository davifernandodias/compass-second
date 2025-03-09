"use client";
import Product from "@components/product";
import Sidebar from "@components/sidebar";
import IconCollapse from "@public/svg/clothes/icon-collapse";
import IconFilterMobile from "@public/svg/clothes/icon-filter-mobile";
import { useState, useEffect } from "react";

export default function CasualPage() {
  const [isOpen, setIsOpen] = useState(false);

  const handleChangeStateSiderBar = () => {
    setIsOpen(!isOpen);
  };
  
  useEffect(() => {
    if (isOpen && window.innerWidth < 1024) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        document.body.classList.remove("overflow-hidden");
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="flex flex-col gap-6 bg-white p-4 lg:px-16">
      <nav className="flex gap-1 font-family-satoshi-medium items-center">
        <p className="text-gray-text">Home</p>
        <IconCollapse className="w-3.5 h-3 mt-0.5" />
        <p>Casual</p>
      </nav>
      <div className="flex lg:gap-16">
        <Sidebar isOpen={isOpen} onchange={handleChangeStateSiderBar} />

        <div className="flex flex-col gap-12 w-full">
          <div className="flex justify-between items-end">
            <div className="flex gap-2 items-end lg:justify-between w-full">
              <h1 className="font-family-satoshi-medium text-2xl font-bold">
                Casual
              </h1>
              <p className="text-gray-text font-family-satoshi-regular">
                Showing 1-10 of 100 Products
              </p>
            </div>
            <div className="bg-gray-secundary rounded-full lg:hidden">
              <div onClick={handleChangeStateSiderBar}>
                <IconFilterMobile className="w-10 h-10" />
              </div>
            </div>
          </div>
          <Product  produto="oi" quantity={[1,2,3,4,5,6,7,8,9]} routeIsActive={true}/>
        </div>
      </div>
    </section>
  );
}