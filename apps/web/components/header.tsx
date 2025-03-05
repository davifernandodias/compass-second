import IconNavtop from '@public/svg/header/icon-exit-nav-bar-top'
import IconProfile from '@public/svg/header/icon-profile'
import IconSearch from '@public/svg/header/icon-search'
import IconShopCar from '@public/svg/header/icon-shop-car'
import IconSidebar from '@public/svg/header/icon-sidebar'

export default function Header() {
  return (
    <header>
      <nav className='flex justify-center items-center py-3 bg-black text-white font-satoshi-regular text-12 lg:text-14'>
        <p className='text-center w-300'>
          Sign up and get 20% off to your first order.{' '}
          <span className='underline'>Sign Up Now</span>
        </p>
        <IconNavtop className='hidden lg:flex lg:justify-end' />
      </nav>
      <nav className='flex justify-between items-center p-4'>
        <div className='flex gap-4 items-center'>
          <IconSidebar className='w-5 h-5' />
          <p className='font-integral-bold text-2xl -mt-1.5'>SHOP.CO</p>
        </div>
        <div className='flex gap-4'>
          <IconSearch className='w-5 h-5' />
          <IconShopCar className='w-5 h-5' />
          <IconProfile className='w-5 h-5' />
        </div>
      </nav>
    </header>
  );
}
