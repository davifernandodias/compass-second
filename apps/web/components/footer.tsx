import IconCardApple from "@public/svg/footer/icon-card-apple";
import IconCardGooglePlay from "@public/svg/footer/icon-card-google-play";
import IconCardMaster from "@public/svg/footer/icon-card-master";
import IconCardPaypal from "@public/svg/footer/icon-card-paypal";
import IconCardVisa from "@public/svg/footer/icon-card-visa";
import IconFacebook from "@public/svg/footer/icon-facebook";
import IconGithub from "@public/svg/footer/icon-github";
import IconInstagram from "@public/svg/footer/icon-instagram";
import IconTwitter from "@public/svg/footer/icon-twitter";

export default function Footer() {
  return (
    <footer>
      <div>
        <div className="bg-gray-primary p-4">
          <div className="flex flex-col gap-4">
            <h1 className="font-integral-bold text-3xl">SHOP.CO</h1>
            <p className="text-gray-text font-satoshi-regular text-14">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <div className="flex gap-4">
              <div className="bg-white p-2 rounded-2xl border-gray-border border">
                <IconTwitter className="w-4 h-4" />
              </div>
              <div className="bg-black p-2 rounded-2xl border-black border">
                <IconFacebook className="w-4 h-4 " />
              </div>
              <div className="bg-white p-2 rounded-2xl border-gray-border border">
                <IconInstagram className="w-4 h-4" />
              </div>
              <div className="bg-white p-2 rounded-2xl border-gray-border border">
                <IconGithub className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-32 bg-gray-primary p-4">
          <div className="flex flex-col gap-2">
            <p className="text-black font-satoshi-medium text-14 tracking-widest">
              COMPANY
            </p>
            <div className="flex flex-col gap-3 text-gray-text font-satoshi-regular text-14">
              <p>About</p>
              <p>Features</p>
              <p>Works</p>
              <p>Career</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-black font-satoshi-medium text-14 tracking-widest">
              HELP
            </p>
            <div className="flex flex-col gap-3 text-gray-text font-satoshi-regular text-14">
              <p>Customer Support</p>
              <p>Delivery Details</p>
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
            </div>
          </div>
        </div>

        <div className="flex gap-24 bg-gray-primary p-4">
          <div className="flex flex-col gap-2">
            <p className="text-black font-satoshi-medium text-14 tracking-widest">
              FAQ
            </p>
            <div className="flex flex-col gap-3 text-gray-text font-satoshi-regular text-14">
              <p>Account</p>
              <p>Manage Deliveries</p>
              <p>Orders</p>
              <p>Payment</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-black font-satoshi-medium text-14 tracking-widest">
              RESOURCES
            </p>
            <div className="flex flex-col gap-3 text-gray-text font-satoshi-regular text-14">
              <p>Free eBook</p>
              <p>Development Tutorial</p>
              <p>How to - Blog</p>
              <p>Youtube Playlist</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-4 bg-gray-primary pt-4">
          <hr className="border h-0.5 border-gray-500 opacity-15 w-[90vw]" />
          <div className="pt-2">
            <p className="font-family-satoshi-regular text-gray-text">{"Shop.co © 2000-2023, All Rights Reserved"}</p>
          </div>
          <div className="flex pb-10">
            <IconCardVisa className=""/>
            <IconCardMaster className=""/>
            <IconCardPaypal className=""/>
            <IconCardApple className=""/>
            <IconCardGooglePlay className=""/>
          </div>
        </div>
      </div>
    </footer>
  );
}
