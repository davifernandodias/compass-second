import IconNavtop from '@public/svg/icon-nav-bar-top'


export default function Header() {
  return (
    <header>
      <nav className="flex justify-center items-center p-2 bg-black text-white font-satoshi-regular text-12 lg:text-14">
        <p className="text-center w-300">Sign up and get 20% off to your first order. <span className="underline">Sign Up Now</span></p>
        <IconNavtop className="hidden lg:flex lg:justify-end" />
      </nav>
    </header>
  )
}
