import type { Metadata } from 'next'
import './globals.css'
import Header from '@components/header'
import Footer from '@components/footer';


export const metadata: Metadata = {
  title: 'Ecommecer compass uol',
  description: 'Challenger compasser',
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
