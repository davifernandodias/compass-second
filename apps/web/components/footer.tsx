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
          <div className="flex flex-col gap-4">
            <h1 className="font-integral-bold text-3xl">SHOP.CO</h1>
            <p className="text-gray-text font-satoshi-regular text-14">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="bg-white p-2  rounded-2xl border-gray-border border">
              <IconTwitter className="w-4 h-4"/>
            </div>
            <div className="bg-black p-2  rounded-2xl border-black border">
              <IconFacebook  className="w-4 h-4 "/>
            </div>
            <div className="bg-white p-2  rounded-2xl border-gray-border border">
              <IconInstagram  className="w-4 h-4"/>
            </div>
            <div className="bg-white p-2  rounded-2xl border-gray-border border">
              <IconGithub  className="w-4 h-4"/>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p>oiiii</p>
      </div>
      </div>
    </footer>
  );
}
