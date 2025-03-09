import Product from "@components/product";
import Sidebar from "@components/sidebar";
import IconCollapse from "@public/svg/clothes/icon-collapse";
import IconFilterMobile from "@public/svg/clothes/icon-filter-mobile";

export default function CasualPage() {
  return (
    <section className="flex flex-col gap-6 bg-white p-4 lg:px-16">
      <nav className="flex gap-1 font-family-satoshi-medium items-center">
        <p className="text-gray-text">Home</p>
        <IconCollapse className="w-3.5 h-3 mt-0.5" />
        <p>Casual</p>
      </nav>
      <div className="flex gap-16">

      <Sidebar />

      <div className="flex flex-col gap-12">
        <div className=" flex justify-between items-end">
          <div className="flex gap-2 items-end lg:justify-between w-full">
            <h1 className="font-family-satoshi-medium text-2xl font-bold">Casual</h1>
            <p className="text-gray-text font-family-satoshi-regular">Showing 1-10 of 100 Products</p>
          </div>
          <div className="bg-gray-secundary rounded-full lg:hidden">
            <IconFilterMobile className="w-10 h-10"/>
          </div>
        </div>
        <Product />
      </div>
      </div>
    </section>
  );
}
