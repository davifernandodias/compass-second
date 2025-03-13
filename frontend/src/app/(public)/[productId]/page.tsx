"use client"
import { Button } from "@/components/ui/button"
import ProductDetail from "@/container/product-detail"
import ProductReviews from "@/container/product-reviews"
import IconCollapse from "@public/svg/clothes/icon-collapse"
import IconFilterMobile from "@public/svg/clothes/icon-filter-mobile"
import ProductDetailCarrosel from "@/container/product-detail-carrosel"
import { useParams } from "next/navigation"
import { getAllProducts, getByIdProduct } from "@/services/products"
import { useEffect, useState } from "react"

const PageDetail = () => {
  const params = useParams<{ productId: string }>();
  const [product, setProduct] = useState<GetProductsResponse | null>(null);
  const [products, setProducts] = useState<GetProductsResponse[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleFetchData = async () => {
      try {
        setLoading(true);
        const fetchedProduct = await getByIdProduct(Number(params.productId));
        const fetchedProducts = await getAllProducts({ initial: 0, finalLimit: 75 });
        setProduct(fetchedProduct);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      } finally {
        setLoading(false);
      }
    };
    handleFetchData();
  }, [params.productId]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  return (
    <section className="flex flex-col gap-10 bg-white">
      <nav className="flex gap-2 bg-white items-center pl-4 lg:pl-16">
        <p className="text-gray-text font-family-satoshi-medium font-normal cursor-pointer">Home</p>
        <IconCollapse className="w-3 h-3" />
        <p className="text-gray-text font-family-satoshi-medium font-normal cursor-pointer">Shop</p>
        <IconCollapse className="w-3 h-3" />
        <p className="text-gray-text font-family-satoshi-medium font-normal cursor-pointer">Men</p>
        <IconCollapse className="w-3 h-3" />
        <p className="font-family-satoshi-medium font-normal cursor-pointer">T-shirts</p>
      </nav>
      <div>
        <ProductDetail productGroupById={product} />
      </div>
      <div className="flex flex-col justify-center items-center font-family-satoshi-regular font-normal">
        <div className="flex w-full justify-around">
          <p className="py-3">Product Details</p>
          <p className="py-3 border-b-black border-b-2 lg:w-64 text-center font-medium">Rating & Reviews</p>
          <p className="py-3">FAQs</p>
        </div>
        <div className="h-px w-[90%] bg-gray-200" />
      </div>
      <div className="flex flex-col gap-10 p-4">
        <div className="flex gap-4 items-center justify-between">
          <div className="font-family-satoshi-medium">
            <h1 className="text-20 font-bold">
              All Reviews <span className="text-gray-text text-14 font-normal">(451)</span>
            </h1>
          </div>
          <div className="flex gap-3 items-center">
            <IconFilterMobile className="w-10 h-10 cursor-pointer" />
            <div className="hidden lg:flex items-center gap-2">
              <Button className="flex items-center justify-center gap-2 w-28 h-12 bg-gray-secundary rounded-3xl cursor-pointer">
                Latest
                <IconCollapse className="w-3 h-3 -rotate-270 -mt-2 text-16 cursor-pointer" />
              </Button>
            </div>
            <Button className="bg-black cursor-pointer text-white w-28 h-11 font-family-satoshi-medium font-medium text-12 rounded-4xl lg:text-16 lg:w-40">
              Write a Review
            </Button>
          </div>
        </div>
        <div>
          <ProductReviews  />
        </div>
        <div className="flex justify-center">
          <Button className="w-48 h-12 rounded-3xl cursor-pointer border border-gray-secundary font-family-satoshi-medium text-14 font-medium">
            Load More Reviews
          </Button>
        </div>
        <div className="flex flex-col justify-center items-center gap-10 px-4">
          <div className="font-family-integral-medium font-bold text-3xl text-center px-10 lg:text-5xl">
            <h1>YOU MIGHT ALSO LIKE</h1>
          </div>
          <div className="w-full max-w-7xl">
            <ProductDetailCarrosel products={products} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageDetail;