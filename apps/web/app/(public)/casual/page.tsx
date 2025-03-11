"use client"

import Sidebar from "@container/sidebar";
import { Product } from "@container/product";
import { useEffect, useState } from "react";
import { getAllProducts } from "@services/products";
import { useFilterStore } from "@store/sidebar-filter";




const CasualPage = () => {
  const { initialPage, finalLimit, minPrice, maxPrice, color, size } = useFilterStore();

  const [ product, setProduct ] = useState([]);
  useEffect(() => {
    const handleFetchProduct = async () => {
      const product = await getAllProducts({ initial: initialPage, finalLimit: finalLimit, color: color, minPrice: minPrice, maxPrice: maxPrice, size: size });

      setProduct(product)
      console.log(product)
    }
    handleFetchProduct();
  },[initialPage, finalLimit, color, maxPrice, minPrice, size])

  return (
    <section className="flex  gap-6 bg-white p-4 lg:px-16">
      <Sidebar  />
      <Product products={product} />
    </section>
  );
};
export default CasualPage;
