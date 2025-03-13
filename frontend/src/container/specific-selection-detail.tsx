import { Check, Tally1 } from "lucide-react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { colorsDetail } from "@/utils/sidebar-colors";

const SpecificSelectionDetail = () => {
  const [quantityProductInCart, setQuantityProductInCart] = useState(1);
  const [selectedSize, setSelectedSize] = useState("Large");
  const [selectedColor, setSelectedColor] = useState("#4f4631");

  const handleAddedProductInCart = () => {
    setQuantityProductInCart((prev) => prev + 1);
  };

  const handleRemoveProductInCart = () => {
    if (quantityProductInCart > 1) {
      setQuantityProductInCart((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    toast.success("Added to cart!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
  };



  return (
    <div className="flex flex-col gap-6">
      <ToastContainer />
      <div className="flex flex-col gap-4">
        <p className="text-14 text-gray-text font-family-satoshi-regular font-normal">Select Colors</p>
        <div className="flex gap-2 max-w-md">
          {colorsDetail.map((color) => (
            <button
              key={color.hex}
              type="button"
              className={`w-10 h-10 rounded-full flex items-center justify-center ${selectedColor === color.hex ? "" : ""
                }`}
              style={{ backgroundColor: color.hex }}
              onClick={() => setSelectedColor(color.hex)}
              aria-label={`Select ${color.name} color`}
            >
              {selectedColor === color.hex && <Check className="w-6 h-6 text-white" />}
            </button>
          ))}
        </div>
      </div>

      <div className="h-[2px] bg-[#F1F3F6] w-full" />

      <div className="flex flex-col gap-3">
        <p className="text-14 text-gray-text font-family-satoshi-regular font-normal">Choose Size</p>
        <div className="flex flex-wrap gap-4">
          {["Small", "Medium", "Large", "X-Large"].map((size) => (
            <div
              key={size}
              className={`px-6 py-2 rounded-full cursor-pointer transition-colors font-family-satoshi-medium ${selectedSize === size
                  ? "bg-black text-white"
                  : "bg-gray-100 text-black hover:bg-black hover:text-white"
                }`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </div>
          ))}
        </div>
      </div>

      <div className="h-[2px] bg-[#F1F3F6] w-full" />

      <div className="flex items-center justify-start gap-3">
        <div className="flex items-center bg-gray-100 rounded-full px-3 py-2">
          <Button
            className="w-8 h-8 flex items-center justify-center cursor-pointer"
            onclick={handleRemoveProductInCart}
          >
            <Tally1 className="rotate-90 mt-3 text-gray-700" size={16} />
          </Button>
          <span className="text-lg font-semibold px-4 font-family-satoshi-medium text-14">{quantityProductInCart}</span>
          <Button
            className="w-8 h-8 flex items-center justify-center cursor-pointer"
            onclick={handleAddedProductInCart}
          >
            <X className="text-gray-700 -rotate-45" size={16} />
          </Button>
        </div>

        <Button
          className="bg-black text-white text-lg w-60 h-11 font-family-satoshi-medium font-medium text-14 rounded-full lg:text-16 lg:w-96"
          onclick={handleAddToCart}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default SpecificSelectionDetail;
