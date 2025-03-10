import { useContext } from "react";
import Sidebar from "./sidebar";
import { SidebarContext } from "./product-content";


export default function SidebarContent() {
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  const handleChangeStateSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <Sidebar isOpen={isOpen} onchange={handleChangeStateSidebar} />
    </div>
  );
}
