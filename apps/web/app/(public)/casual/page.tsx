import { ProductContent } from "@components/product-content";
import IconCollapse from "@public/svg/clothes/icon-collapse";

const CasualPage = async () => {
  return (
    <section className="flex flex-col gap-6 bg-white p-4 lg:px-16">
      <nav className="flex gap-1 font-family-satoshi-medium items-center">
        <p className="text-gray-text">Home</p>
        <IconCollapse className="w-3.5 h-3 mt-0.5" />
        <p>Casual</p>
      </nav>

      <ProductContent />
    </section>
  );
};
export default CasualPage;
