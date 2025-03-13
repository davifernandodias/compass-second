import IconHalfStar from "@public/svg/clothes/icon-half-star";
import IconStars from "@public/svg/clothes/icon-stars";
import Image from "next/image";
import SpecificSelectionDetail from "@container/specific-selection-detail";

const ProductDetail = ({ productGroupById }: { productGroupById: GetProductsResponse }) => {
  return (
    <div className="flex flex-col gap-6 justify-center lg:justify-start lg:gap-6 lg:pl-16 lg:px-20 p-3 lg:flex lg:flex-row">
      <div className="flex justify-between flex-col gap-3 lg:flex lg:flex-row-reverse lg:gap-3">
        <div className="flex justify-center items-center p-1.5 bg-gray-secundary rounded-2xl">
          <Image
            src={`${productGroupById.products.image}`}
            className="w-96 h-64 lg:w-[500px] lg:h-[530px]"
            width={150}
            height={260}
            alt="Product Image"
          />
        </div>
        <div className="flex gap-3 lg:flex lg:flex-col">
          {Array(3)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-1.5 bg-gray-secundary rounded-2xl"
              >
                <Image
                  src={`${productGroupById.products.image}`}
                  className="lg:w-48 lg:h-44"
                  width={150}
                  height={260}
                  alt="Product Thumbnail"
                />
              </div>
            ))}
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col gap-4 justify-start items-start">
          <h1 className="font-family-integral-bold font-bold text-2xl lg:text-4xl">
            Product Detail {productGroupById.products.nome}
          </h1>

          <div className="flex gap-2">
            {Array.from({ length: Math.floor(productGroupById.products.assessment) }).map((_, index) => (
              <IconStars key={index} className="w-4 h-4 lg:w-5 lg:h-5" />
            ))}
            {!Number.isInteger(productGroupById.products.assessment) && (
              <IconHalfStar className="w-4 h-4 lg:w-5 lg:h-5" />
            )}
            <p className="font-family-satoshi-regular font-normal text-12 lg:text-14">
              {productGroupById.products.assessment}
              <span className="text-gray-text">/5</span>
            </p>
          </div>

          <div className="flex font-family-satoshi-medium items-center font-bold gap-2 text-20 lg:text-3xl">
            <p>${productGroupById.products.price}</p>
            {productGroupById.products.discount === 0 ? (
              " "
            ) : (
              <>
                <p className="text-[#999999] line-through">
                  ${Math.floor(
                    productGroupById.products.price * (1 - productGroupById.products.discount! / 100)
                  )}
                </p>
                <p className="h-5 px-2.5 lg:px-3 lg:h-5.5 lg:text-12 font-family-satoshi-regular flex items-center text-[#FF3333] bg-[#ffebeb] text-10 rounded-3xl">
                  -{productGroupById.products.discount}%
                </p>
              </>
            )}
          </div>

          <div>
            <p className="font-family-satoshi-medium font-normal text-gray-text text-14">
              {productGroupById.products.description}
            </p>
          </div>

          <div className="h-[2px] bg-[#F1F3F6] w-full" />
        </div>

        <div>
          <SpecificSelectionDetail />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
