
import {
  IconCardApple, IconCardGooglePlay, IconCardMaster,
  IconCardPaypal, IconCardVisa, IconFacebook, IconGithub,
  IconInstagram, IconTwitter
} from '@public/svg/footer/index';
import Newsletter from './newsletter';
import FooterLinkGroupProps from '@/interfaces/footer-links-interfaces';


const COMPANY_LINKS = [
  { label: 'About', href: '#' },
  { label: 'Features', href: '#' },
  { label: 'Works', href: '#' },
  { label: 'Career', href: '#' },
];

const HELP_LINKS = [
  { label: 'Customer Support', href: '#' },
  { label: 'Delivery Details', href: '#' },
  { label: 'Terms & Conditions', href: '#' },
  { label: 'Privacy Policy', href: '#' },
];

const FAQ_LINKS = [
  { label: 'Account', href: '#' },
  { label: 'Manage Deliveries', href: '#' },
  { label: 'Orders', href: '#' },
  { label: 'Payment', href: '#' },
];

const RESOURCE_LINKS = [
  { label: 'Free eBook', href: '#' },
  { label: 'Development Tutorial', href: '#' },
  { label: 'How to - Blog', href: '#' },
  { label: 'Youtube Playlist', href: '#' },
];

const SOCIAL_LINKS = [
  { Icon: IconTwitter, href: '#', bgColor: 'bg-white' },
  { Icon: IconFacebook, href: '#', bgColor: 'bg-black' },
  { Icon: IconInstagram, href: '#', bgColor: 'bg-white' },
  { Icon: IconGithub, href: '#', bgColor: 'bg-white' },
];


function FooterLinkGroup({ title, links }: FooterLinkGroupProps) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-black font-satoshi-medium text-sm tracking-widest">{title}</p>
      <div className="flex flex-col gap-3 text-gray-text text-sm">
        {links.map((link, index) => (
          <a key={`${link.label}-${link.href}-${index}`} href={link.href} className="text-gray-text hover:text-gray-900 font-satoshi-regular transition-colors">
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer>
      <Newsletter />
      <div className="container mx-auto ">
        <div className="lg:flex lg:py-16 ">
          <div className="p-4 lg:w-[40%]">
            <div className="flex flex-col gap-4">
              <h1 className="font-bold font-family-integral-bold text-3xl lg:text-4xl">SHOP.CO</h1>
              <p className="text-gray-600 text-sm w-64">{`
                We have clothes that suits your style and which you're proud to
                wear. From women to men.`}
              </p>
              <div className="flex gap-4">
                {SOCIAL_LINKS.map(({ Icon, href, bgColor }, index) => (
                  <a
                    key={`${href}-${index}`} 
                    href={href}
                    className={`${bgColor} p-2 rounded-2xl border border-gray-200 hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:flex lg:w-full">
            <div className="flex gap-32 w-full p-4 lg:gap-32">
              <FooterLinkGroup title="COMPANY" links={COMPANY_LINKS} />
              <FooterLinkGroup title="HELP" links={HELP_LINKS} />
            </div>
            <div className="flex gap-24 w-full p-4 lg:gap-32">
              <FooterLinkGroup title="FAQ" links={FAQ_LINKS} />
              <FooterLinkGroup title="RESOURCES" links={RESOURCE_LINKS} />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-4 pt-4">
          <hr className="border-t border-gray-200 w-[98%]" />
          <div className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:justify-between lg:px-3 w-full pb-8">
            <p className="text-gray-600 text-sm">
              Shop.co © 2000-2023, All Rights Reserved
            </p>
            <div className="flex items-center gap-2">
              <IconCardVisa className=""/>
              <IconCardMaster className=""/>
              <IconCardPaypal className=""/>
              <IconCardApple className=""/>
              <IconCardGooglePlay className=""/>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
