'use client'
import Link from "next/link"
import { FaGg, FaArrowCircleUp } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navigationLinks = [
  {href:"/", text:"Home" },
  {href:"/Projects", text:"Projects"}
]
export default function Header() {
  const path = usePathname();
    return (
      <>
      <header id="header" className="flex flex-col md:flex-row justify-center align-center md:justify-between p-8 text-white bg-sky-900">
        <Link href="/" className="flex items-center text-xl space-x-2">
            <i>
                <FaGg></FaGg>
            </i>
            <span className="text-xs">MyPortfolio</span>
        </Link>
        <div className="flex justify-center align-center md:pr-16 items-center">
        {navigationLinks.map((link)=> (
          <motion.div 
          whileHover={{scale:1.2}}
          key={link.href}>
          <Link className={`${link.href === path ? "text-blue-200" : ""} text-base pr-6 uppercase`} href={link.href}>{link.text}</Link>
          </motion.div>
        ))}

        </div>
      
      </header> 
        <a href="#header"><FaArrowCircleUp className="text-5xl text-sky-800 fixed bottom-6 right-9"/></a>
      </>
    )
  }

