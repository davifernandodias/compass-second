"use client";

import IconFilterMobile from "@public/svg/clothes/icon-filter-mobile";
import IconCollapse from "@public/svg/clothes/icon-collapse";
import { useFilterStore } from "@/store/sidebar-filter";
import { useEffect, useState } from "react";
import { getAllProducts } from "@/services/products";
import Sidebar from "@/container/sidebar";
import { Product } from "@/container/product";
import NextPage from "@/container/next-page";

const CasualPage = () => {
  const { initialPage, finalLimit, minPrice, maxPrice, color, size } = useFilterStore();
  const [products, setProducts] = useState([]);
  const [hasMoreProducts, setHasMoreProducts] = useState(true);
  const [isEnableSidebar, setIsEnableSidebar] = useState(false); // Alterar para false inicialmente

  useEffect(() => {
    // Verifique se está no cliente
    if (typeof window !== "undefined") {
      setIsEnableSidebar(window.innerWidth >= 1024); // Atualizar a lógica para o tamanho da tela

      const handleResize = () => {
        setIsEnableSidebar(window.innerWidth >= 1024); // Atualizar quando a tela for redimensionada
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []); // A dependência vazia faz com que isso execute apenas no lado do cliente após a primeira renderização

  useEffect(() => {
    const handleFetchProduct = async () => {
      const fetchedProducts = await getAllProducts({
        initial: initialPage,
        finalLimit: finalLimit,
        color: color,
        minPrice: minPrice,
        maxPrice: maxPrice,
        size: size,
      });
      const hasProducts = fetchedProducts && fetchedProducts.length > 0;
      setProducts(fetchedProducts || []);
      setHasMoreProducts(hasProducts);
      console.log(fetchedProducts);
    };
    handleFetchProduct();
  }, [initialPage, finalLimit, color, maxPrice, minPrice, size]);

  const isEnableNextPage = hasMoreProducts;

  const toggleSidebar = () => {
    setIsEnableSidebar((prev) => !prev);
    console.log("Sidebar visível:", !isEnableSidebar);
  };

  return (
    <section>
      <nav className="flex gap-2 bg-white items-center pl-4 lg:pl-16">
        <p className="text-gray-text font-family-satoshi-medium font-medium">Home</p>
        <IconCollapse className="w-3 h-3 "/>
        <p className="font-family-satoshi-medium font-medium">Casual</p>
      </nav>
      <section className="flex gap-6 bg-white p-4 lg:px-16">
        <Sidebar onChange={toggleSidebar} isEnableSidebar={isEnableSidebar} />
        <div className="flex flex-col gap-6">
          <div className="flex gap-6 ">
            <div className="flex justify-between items-center w-full ">
              <div className="flex gap-4 items-center lg:justify-between w-full">
                <div>
                  <p className="font-family-satoshi-medium font-bold text-xl lg:text-2xl">Casual</p>
                </div>
                <div className="flex gap-4">
                  <p className="font-family-satoshi-regular text-14 font-normal text-gray-text">Showing 1-10 of 100 Products</p>
                  <div className="items-center gap-2 hidden lg:flex">
                    <p className="text-gray-text font-family-satoshi-regular text-14 font-normal ">Sort by:</p>
                    <p className="font-family-satoshi-regular text-14 font-bold ">Most Popular</p>
                    <IconCollapse className="w-3 h-3 -rotate-270"/>
                  </div>
                </div>
              </div>
              <div onClick={toggleSidebar} className="lg:hidden">
                <IconFilterMobile className="w-8 h-8" />
              </div>
            </div>
          </div>
          <Product products={products} />
          <NextPage enableNextPage={isEnableNextPage} />
        </div>
      </section>
    </section>
  );
};

export default CasualPage;
