import { Card } from "@/components/ui/card";
import IconHalfStar from "@public/svg/clothes/icon-half-star";
import IconStars from "@public/svg/clothes/icon-stars";
import Image from "next/image";
import Link from "next/link";

export const Product = ({ products }: { products: GetProductsResponse[] }) => {
  if (!products?.length) return null;

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  return (
    <div>
        <Card className="flex flex-wrap gap-2  w-full bg-white ">
          {products.slice(0, 9).map((productGroup, index) => (
            <div
              key={index}
              className={`"" ${index >= 6 ? "hidden lg:block" : ""}`}
            >
              <Link href={`${productGroup.products.id}`}>
              <div className="flex flex-col gap-2.5">
                <div className="p-1.5 bg-gray-secundary rounded-2xl">
                  <Image
                    src={`${productGroup.products.image}`}
                    className="lg:w-75.5 lg:h-80"
                    width={150}
                    height={260}
                    alt="Product Image"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="font-family-satoshi-medium font-bold">
                    <h1 className="text-black lg:whitespace-nowrap">
                      <span className="block lg:hidden">
                        {truncateText(productGroup.products.nome, 18)}
                      </span>
                      <span className="hidden lg:block lg:text-16">
                        {productGroup.products.nome}
                      </span>
                    </h1>
                  </div>
                  <div className="flex gap-1.5 items-center">
                    {Array.from({ length: Math.floor(productGroup.products.assessment) }).map((_, index) => (
                      <IconStars key={index} className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                    ))}
                    {Number.isInteger(productGroup.products.assessment) ? null : (
                      <IconHalfStar className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                    )}
                    <p className="font-family-satoshi-regular font-normal text-12 lg:text-14">
                      {productGroup.products.assessment}
                      <span className="text-gray-text">/5</span>
                    </p>
                  </div>
                  <div className="flex font-family-satoshi-medium items-center font-bold gap-2 text-20 lg:text-xl">
                    <p>${productGroup.products.price}</p>
                    <p className="text-[#999999] line-through">
                      {Math.floor(
                        productGroup.products.price *
                          (1 - productGroup.products.discount! / 100)
                      )}
                    </p>
                    <p className="h-5 px-2.5 lg:px-3 lg:h-5.5 lg:text-12 font-family-satoshi-regular flex items-center text-[#FF3333] bg-[#ffebeb] text-10 rounded-3xl">
                      -{productGroup.products.discount}%
                    </p>
                  </div>
                </div>
              </div>
              </Link>
            </div>
          ))}
        </Card>
      </div>
  );
};
