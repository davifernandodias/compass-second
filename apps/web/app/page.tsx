// import Image, { type ImageProps } from 'next/image';
// import { Button } from '@repo/ui/button';






export default function Home() {
  return (

    <div className='bg-red-500'>
      <h1 className='font-satoshi text-2xl'>
        Satoshi (usa o peso padrão disponível)
      </h1>
      <p className='font-satoshi-medium text-lg'>Satoshi Medium (500)</p>
      <p className='font-satoshi-regular'>Satoshi Regular (400)</p>
      <h2 className='font-integral-bold'>IntegralCF Bold (800)</h2>
      <span className='font-integral-medium'>IntegralCF Medium (700)</span>
      <div className='font-integral-regular'>IntegralCF Regular (400)</div>
    </div>
  );
}
