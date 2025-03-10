import Product from "@components/product";
import SidebarContent from "@components/sidebar-content";
import IconCollapse from "@public/svg/clothes/icon-collapse";
import { getAllProducts } from "../../../services/products";

const CasualPage = async () => {
  const product = await getAllProducts({ initial: 0, finalLimit: 10 })
  console.log(product)
  
  return (
    <section className="flex flex-col gap-6 bg-white p-4 lg:px-16">
      <nav className="flex gap-1 font-family-satoshi-medium items-center">
        <p className="text-gray-text">Home</p>
        <IconCollapse className="w-3.5 h-3 mt-0.5" />
        <p>Casual</p>
      </nav>
      <div className="flex flex-col bg-yellow-50">

      <SidebarContent />
      <div className="flex  gap-2 items-end lg:justify-between w-full">
            <h1 className="font-family-satoshi-medium text-2xl font-bold">
              Casual
            </h1>
            <p className="text-gray-text font-family-satoshi-regular">
              Showing 1-10 of 100 Products
            </p>
          </div>
      <Product produto={product}/>
      </div>
    </section>
  );
}
export default CasualPage;