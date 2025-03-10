import Product from "@components/product";
import SidebarContent from "@components/sidebar-content";
import IconCollapse from "@public/svg/clothes/icon-collapse";
import { getAllProducts } from "../../../services/products";

const CasualPage = async () => {

  const prod = await getAllProducts({ initial: 0, finalLimit: 1 });
  return (
    <section className="flex flex-col gap-6 bg-white p-4 lg:px-16">
      <nav className="flex gap-1 font-family-satoshi-medium items-center">
        <p className="text-gray-text">Home</p>
        <IconCollapse className="w-3.5 h-3 mt-0.5" />
        <p>Casual</p>
      </nav>

      <div className="flex lg:gap-16">
        <div className="bg-red-200">
          <SidebarContent />
        </div>

        <div className="flex flex-col bg-red-200 lg:p-6 gap-6">
          <div className="flex gap-4 bg-yellow-200 lg:justify-between">
            <h1 className="font-family-satoshi-medium text-xl font-bold lg:text-3xl">Casual</h1>
            <div className="flex gap-2 items-center">
              <p className="font-family-satoshi-regular text-14 font-light text-gray-text lg:text-16">Showing 1-10 of 100 Products</p>
              <p className="hidden lg:flex gap-2 font-family-satoshi-regular text-gray-text">Sort by:{" "}
                <span className="font-family-satoshi-medium font-medium">Most Popular</span>
              </p>
            </div>
          </div>
          <div className="bg-orange-400">
            <Product products={prod}/>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CasualPage;
