import Footer from './Footer';
import './globals.css';
import Head from './head';
import Header from './Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"> 
      <Head />
      <body>
        <Header />
        <main>
        {children}
        </main>
        <Footer/>
        </body>
    </html>
  )
}
