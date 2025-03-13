"use client"

import { settings } from "@/utils/product-detail-carrosel"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Image from "next/image"
import IconStars from "@public/svg/clothes/icon-stars"
import IconHalfStar from "@public/svg/clothes/icon-half-star"
import Link from "next/link"

const ProductDetailCarrosel = ({ products }: { products: GetProductsResponse[] }) => {
  return (
    <Slider {...settings}>
      {products.map((productGroup, index) => (
        <Link href={`/${productGroup.products.id}`} key={index}>
          <div className="px-2 rounded-2xl transform transition-all hover:scale-90 ">
            <div className="flex flex-col items-center rounded-2xl">
              <Image
                src={productGroup.products.image || "/fallback-image.jpg"}
                className="w-full h-64 object-cover rounded-3xl"
                width={302}
                height={320}
                alt={`Product ${index}`}
              />
              <div className="flex flex-col gap-1 mt-2 justify-start w-full">
                <div className="font-family-satoshi-medium font-bold">
                  <h1 className="text-black lg:whitespace-nowrap">
                    <span className="block lg:hidden">{productGroup.products.nome}</span>
                    <span className="hidden lg:block lg:text-16">{productGroup.products.nome}</span>
                  </h1>
                </div>
                <div className="flex gap-1.5 items-center">
                  {Array.from({ length: Math.floor(productGroup.products.assessment) }).map(
                    (_, index) => (
                      <IconStars key={index} className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                    )
                  )}
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
                  {productGroup.products.discount && productGroup.products.discount > 0 ? (
                    <>
                      <p className="text-[#999999] line-through">
                        ${Math.floor(
                          productGroup.products.price /
                          (1 - productGroup.products.discount / 100)
                        )}
                      </p>
                      <p className="h-5 px-2.5 lg:px-3 lg:h-5.5 lg:text-12 font-family-satoshi-regular flex items-center text-[#FF3333] bg-[#ffebeb] text-10 rounded-3xl">
                        -{productGroup.products.discount}%
                      </p>
                    </>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </Slider>
  );
};

export default ProductDetailCarrosel;