import IconCollapse from "@public/svg/clothes/icon-collapse";
import IconFilterSidebar from "@public/svg/clothes/icon-filter-sidebar";
import DoubleRange from "./double-range";
import ColorPicker from "./color-text-box";
import SizeSelector from "./size-selector";
import { Button } from "@repo/ui/button";

export default function Sidebar() {
  return (
    <nav className="hidden lg:flex flex-col border border-gray-secundary w-210 h-300 rounded-3xl p-6 gap-6">
      <div className="flex justify-between  items-center">
        <h1 className="font-family-satoshi-medium font-bold text-20">
          Filters
        </h1>
        <IconFilterSidebar className="w-6 h-6" />
      </div>
      <hr className="border border-gray-secundary  " />
      <div className="flex flex-col gap-3 font-family-satoshi-regular text-gray-text">
        <div className="flex  justify-between items-center">
          <p>T-shirts</p>
          <IconCollapse className="w-3 h-3" />
        </div>
        <div className="flex  justify-between items-center">
          <p>Shorts</p>
          <IconCollapse className="w-3 h-3" />
        </div>
        <div className="flex  justify-between items-center">
          <p>Shirts</p>
          <IconCollapse className="w-3 h-3" />
        </div>
        <div className="flex  justify-between items-center">
          <p>Hoodie</p>
          <IconCollapse className="w-3 h-3" />
        </div>
        <div className="flex  justify-between items-center">
          <p>Jeans</p>
          <IconCollapse className="w-3 h-3" />
        </div>
      </div>
      <hr className="border border-gray-secundary  " />
      <div className="flex justify-between items-center">
        <h1 className="font-family-satoshi-medium font-bold text-20">Price</h1>
        <IconCollapse className="w-3 h-3 -rotate-90" />
      </div>
      <div>
        <DoubleRange min={0} max={500} />
      </div>
      <hr className="border border-gray-secundary  " />
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1 className="font-family-satoshi-medium font-bold text-20">
            Colors
          </h1>
          <IconCollapse className="w-3 h-3 -rotate-90" />
        </div>
        <ColorPicker />
      </div>
      <hr className="border border-gray-secundary  " />
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1 className="font-family-satoshi-medium font-bold text-20">Size</h1>
          <IconCollapse className="w-3 h-3 -rotate-90" />
        </div>
        <SizeSelector />
      </div>
      <hr className="border border-gray-secundary  " />
      <div>
        <div className="flex items-center justify-between">
          <h1 className="font-family-satoshi-medium font-bold text-20">
            Dress Style
          </h1>
          <IconCollapse className="w-3 h-3 -rotate-90" />
        </div>
        <div className="flex flex-col gap-3 font-family-satoshi-regular text-gray-text">
          <div className="flex  justify-between items-center">
            <p>Casual</p>
            <IconCollapse className="w-3 h-3" />
          </div>
          <div className="flex  justify-between items-center">
            <p>Formal</p>
            <IconCollapse className="w-3 h-3" />
          </div>
          <div className="flex  justify-between items-center">
            <p>Party</p>
            <IconCollapse className="w-3 h-3" />
          </div>
          <div className="flex  justify-between items-center">
            <p>Gym</p>
            <IconCollapse className="w-3 h-3" />
          </div>
        </div>
      </div>
      <Button className="bg-black text-white font-family-satoshi-medium font-medium h-12 rounded-3xl">Apply Filter</Button>
    </nav>
  );
}
