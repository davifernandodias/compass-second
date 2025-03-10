"use client";
import { useState } from "react";
import Sidebar from "./sidebar";

export default function SidebarContent() {
  const [isOpen, setIsOpen] = useState(false);

  const handleChangeStateSiderBar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Sidebar isOpen={isOpen} onchange={handleChangeStateSiderBar} />
    </div>
  );
}
