import IconCollapse from "@public/svg/clothes/icon-collapse";
import IconFilterSidebar from "@public/svg/clothes/icon-filter-sidebar";
import DoubleRange from "./double-range";

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
      <DoubleRange 
          min={0}
          max={500}
        />
      </div>
    </nav>
  );
}
