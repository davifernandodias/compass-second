"use client";

import { Card } from "@repo/ui/card";
import PreviousNextProduct from "./previous-next-product";

const a : number[]= [1, 2, 3, 4, 5, 6, 7, 8, 9]

export default function Product() {
  return (
    <div>
      <div className="flex gap-2 flex-wrap lg:gap-6">
        { a.map((e) => (
              <Card key={e}>
              <div className="flex flex-col gap-3 bg-white ">
                <div className="flex justify-center items-center rounded-2xl h-[174px] w-[172px] bg-amber-200 lg:w-[298px] lg:h-[298px]">
                  <p>IMAGEM</p>
                </div>
                <div>
                  <div>
                    <p className="font-family-satoshi-medium font-bold">
                      Gradient Graphic T...
                    </p>
                    <div className="flex gap-3 items-center">
                      <div className="flex gap-2 ">
                        <p>s</p>
                        <p>s</p>
                        <p>s</p>
                        <p>s</p>
                      </div>
                      <div className="font-family-satoshi-regular text-12">3.5<span className="text-gray-text">/5</span></div>
                    </div>
                    <div className="flex gap-3 items-center">
                      <p className="font-family-satoshi-medium font-bold text-20 ">$145</p>
                      <p className="font-family-satoshi-medium font-bold text-20 line-through text-[#999999] ">$242</p>
                      <p className="flex justify-center items-center font-family-satoshi-regular text-10 bg-[#ffebeb] text-[#ff3333] h-5 w-12 rounded-3xl">-20%</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
    )) }
      </div>
      <PreviousNextProduct />
    </div>
  );
}
