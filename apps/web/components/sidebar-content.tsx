"use client";
import { useState } from "react";
import Sidebar from "./sidebar";
import IconFilterMobile from "@public/svg/clothes/icon-filter-mobile";

export default function SidebarContent() {
  const [isOpen, setIsOpen] = useState(false);

  const handleChangeStateSiderBar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Sidebar isOpen={isOpen} onchange={handleChangeStateSiderBar} />
        <div className="flex justify-between items-end">
          <div className="bg-gray-secundary rounded-full lg:hidden">
            <div onClick={handleChangeStateSiderBar}>
              <IconFilterMobile className="w-10 h-10" />
            </div>
          </div>
        </div>
    </div>
  );
}
