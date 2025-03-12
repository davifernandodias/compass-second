"use client";

import Sidebar from "@container/sidebar";
import { Product } from "@container/product";
import { useEffect, useState } from "react";
import { getAllProducts } from "@services/products";
import { useFilterStore } from "@store/sidebar-filter";
import NextPage from "@container/next-page";
import { Button } from "@repo/ui/button";

const CasualPage = () => {
  const { initialPage, finalLimit, minPrice, maxPrice, color, size } = useFilterStore();
  const [products, setProducts] = useState([]);
  const [hasMoreProducts, setHasMoreProducts] = useState(true);
  const [isEnableSidebar, setIsEnableSidebar] = useState(true);

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
    <section className="flex gap-6 bg-white p-4 lg:px-16">
      <Sidebar
        onChange={toggleSidebar}
        isEnableSidebar={isEnableSidebar}
      />
      <div>
        <div className="flex gap-6">
          <p>oii</p>
          <Button onclick={toggleSidebar} className="bg-black text-white">filter</Button>
        </div>
        <Product products={products} />
        <NextPage enableNextPage={isEnableNextPage} />
      </div>
    </section>
  );
};

export default CasualPage;