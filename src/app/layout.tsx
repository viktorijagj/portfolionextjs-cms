'use client'


import Footer from './components/Footer';
import './globals.css';
import Head from './head';
import Header from './components/Header';
import { Courgette} from '@next/font/google';
import { motion , AnimatePresence } from "framer-motion";

// Add font family
const courgette = Courgette({subsets: ['latin'] , weight: '400'});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <html className={courgette.className} lang="en"> 
      <Head />
      <body className="md:w-10/12 md:mx-auto text-gray-900">
        <Header />
         <AnimatePresence>
        <motion.main
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        transition={{delay:0.2}}
        >
        {children}
        </motion.main>
    </AnimatePresence>
        <Footer/>
        </body>
    </html>
    </>
  )
}
