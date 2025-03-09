import IconCollapse from "@public/svg/clothes/icon-collapse";
import IconFilterSidebar from "@public/svg/clothes/icon-filter-sidebar";
import DoubleRange from "./double-range";
import ColorPicker from "./color-text-box";
import SizeSelector from "./size-selector";
import { Button } from "@repo/ui/button";
import IconCloseSideber from "@public/svg/clothes/icon-close-sideber";

interface SidebarProps {
  isOpen: boolean;
  onchange?: () => void;
}

export default function Sidebar({ isOpen, onchange }: SidebarProps) {
  return (
    <div className="relative">
      {/* Overlay for mobile when sidebar is open */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ease-in-out lg:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onchange} // Close sidebar when clicking overlay
      ></div>

      <nav
        className={`
          fixed inset-0 z-50 top-32 lg:top-0 flex flex-col bg-white border overflow-y-auto scrollbar-none
          lg:overflow-y-hidden border-gray-secundary rounded-3xl p-4 gap-6 transition-transform duration-300
          ease-in-out lg:relative lg:bg-transparent lg:z-0 lg:flex lg:slide-up lg:w-80 lg:h-300 lg:rounded-3xl 
          lg:border lg:border-gray-secundary lg:translate-0
          ${isOpen ? "translate-x-0 " : " translate-y-full lg:-translate-x-full"} lg:translate-x-0`}
      >


        <div className="flex justify-between items-center">
          <h1 className="font-family-satoshi-medium font-bold text-20">
            Filters
          </h1>
          <IconFilterSidebar className="hidden lg:flex w-6 h-6" />
          <div onClick={onchange} className="lg:hidden">
            <IconCloseSideber className="w-4 h-4" />
          </div>
        </div>
        <hr className="border border-gray-secundary" />
        <div className="flex flex-col flex-1 gap-6 ">
          <div className="flex flex-col gap-3 font-family-satoshi-regular text-gray-text">
            <div className="flex justify-between items-center">
              <p>T-shirts</p>
              <IconCollapse className="w-3 h-3" />
            </div>
            <div className="flex justify-between items-center">
              <p>Shorts</p>
              <IconCollapse className="w-3 h-3" />
            </div>
            <div className="flex justify-between items-center">
              <p>Shirts</p>
              <IconCollapse className="w-3 h-3" />
            </div>
            <div className="flex justify-between items-center">
              <p>Hoodie</p>
              <IconCollapse className="w-3 h-3" />
            </div>
            <div className="flex justify-between items-center">
              <p>Jeans</p>
              <IconCollapse className="w-3 h-3" />
            </div>
          </div>
          <hr className="border border-gray-secundary" />
          <div className="flex justify-between items-center">
            <h1 className="font-family-satoshi-medium font-bold text-20">Price</h1>
            <IconCollapse className="w-3 h-3 -rotate-90" />
          </div>
          <div>
            <DoubleRange min={0} max={500} />
          </div>
          <hr className="border border-gray-secundary" />
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <h1 className="font-family-satoshi-medium font-bold text-20">
                Colors
              </h1>
              <IconCollapse className="w-3 h-3 -rotate-90" />
            </div>
            <ColorPicker />
          </div>
          <hr className="border border-gray-secundary" />
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <h1 className="font-family-satoshi-medium font-bold text-20">Size</h1>
              <IconCollapse className="w-3 h-3 -rotate-90" />
            </div>
            <SizeSelector />
          </div>
          <hr className="border border-gray-secundary" />
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <h1 className="font-family-satoshi-medium font-bold text-20">
                Dress Style
              </h1>
              <IconCollapse className="w-3 h-3 -rotate-90" />
            </div>
            <div className="flex flex-col gap-3 font-family-satoshi-regular text-gray-text">
              <div className="flex justify-between items-center">
                <p>Casual</p>
                <IconCollapse className="w-3 h-3" />
              </div>
              <div className="flex justify-between items-center">
                <p>Formal</p>
                <IconCollapse className="w-3 h-3" />
              </div>
              <div className="flex justify-between items-center">
                <p>Party</p>
                <IconCollapse className="w-3 h-3" />
              </div>
              <div className="flex justify-between items-center">
                <p>Gym</p>
                <IconCollapse className="w-3 h-3" />
              </div>
            </div>
          </div>
        </div>
        <Button className="bg-black text-white font-family-satoshi-medium font-medium h-12 p-3 rounded-3xl">
          Apply Filter
        </Button>
      </nav>
    </div>
  );
}