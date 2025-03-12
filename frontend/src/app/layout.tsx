import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/header';
import Footer from '@/components/footer';


export const metadata: Metadata = {
  title: 'SHOP.CO',
  description: 'Challenger compasser',
  keywords: 'e-commerce, shop, online store, produtos, vendas',
  robots: 'index, follow',
  openGraph: {
    title: 'SHOP.CO | Loja Online de Produtos',
    description: 'Encontre os melhores produtos no SHOP.CO, com envio rápido e seguro.',
    type: 'website',
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
