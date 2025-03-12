

import { IconMessageNewsletter } from "@public/svg/footer/index";
import Input from "./ui/input";
import { Button } from "./ui/button";


export default function Newsletter() {




  return (
<section className="text-white py-8 px-3 linear-bg">
      <div className="bg-black container mx-auto py-5 px-4 rounded-2xl">
        <div className="flex flex-col items-center gap-6">
          <h4 className="text-4xl md:text-3xl  font-bold text-start font-family-integral-bold">
            STAY UP TO DATE ABOUT OUR LATEST OFFERS
          </h4>
          <form
            className="w-full max-w-md flex flex-col gap-4"
          >
            <div className="relative w-full">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="w-full h-12 rounded-full border-2 border-transparent bg-white font-family-satoshi-regular pl-12 pr-4 text-base text-black shadow-md transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
              <IconMessageNewsletter className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
            <Button
              type="submit"
              className="bg-white text-black font-[var(--Satoshi-Medium)] hover:bg-gray-200 transition-colors rounded-full h-12 w-full md:w-auto"
            >
              Subscribe to Newsletter
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}