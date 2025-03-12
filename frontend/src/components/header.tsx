import {
  IconNavtop, IconProfile, IconSearch,
  IconShopCar, IconSidebar
} from "@public/svg/header/index";

import { Button } from "@/components/ui/button";
import Input from "@/components/ui/input";



export default function Header() {
  return (
    <header className="w-full bg-white">
      <nav className="relative flex justify-center items-center py-3 bg-black text-white font-satoshi-regular text-sm lg:text-base">
        <p className="md:text-nowrap text-center max-w-[300px] px-4 lg:px-0">
          Sign up and get 20% off to your first order.{" "}
          <span className="underline cursor-pointer hover:text-gray-200 transition-colors">
            Sign Up Now
          </span>
        </p>
        <Button
          className="absolute right-4 top-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center"
          aria-label="Close banner"
        >
          <IconNavtop className="" />
        </Button>
      </nav>

      <nav className="flex items-center justify-between px-4 py-4 lg:px-16 lg:py-6">
        <div className="flex items-center gap-4 lg:gap-12">
          <Button className="lg:hidden" aria-label="Menu">
            <IconSidebar className="w-6 h-6" />
          </Button>

          <h1 className="font-integral-bold text-2xl lg:text-4xl lg:-mt-1.5">
            SHOP.CO
          </h1>

          <div className="hidden lg:flex items-center space-x-8 font-satoshi-regular text-gray-text ">
            <Button className="hover:text-black transition-colors">Shop</Button>
            <Button className="hover:text-black transition-colors">On Sale</Button>
            <Button className="hover:text-black transition-colors">New Arrivals</Button>
            <Button className="hover:text-black transition-colors">Brands</Button>
          </div>
        </div>

        <div className="flex items-center gap-4 lg:gap-8 w-[55%] justify-end">
          <div className="hidden lg:block relative w-[70%] right-10">
            <Input
              type="search"
              placeholder="Search for products..."
              className="flex justify-start w-full h-12 pl-12 pr-4  rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black/20 transition-all font-satoshi-regular"
            />
            <IconSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
          <div className="flex items-center gap-4">
            <Button className="lg:hidden" aria-label="Search">
              <IconSearch className="w-6 h-6" />
            </Button>
            <Button className="relative" aria-label="Cart">
              <IconShopCar className="w-6 h-6 lg:w-7 lg:h-7" />
            </Button>
            <Button aria-label="Profile">
              <IconProfile className="w-6 h-6 lg:w-7 lg:h-7" />
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
