import Link from "next/link"
import { FaGg } from "react-icons/fa";

export default function Header() {
    return (
      <header className="flex justify-between p-8 text-white bg-sky-900">
        <Link href="/" className="flex items-center text-xl space-x-2">
            <i>
                <FaGg></FaGg>
            </i>
            <span>MyPortfolio</span>
        </Link>
        <div className="pr-16 items-center">
        <Link href="/" className="pr-8">Home</Link>
        <Link href="/Projects">Projects
        </Link>
        </div>
      
      </header>
    )
  }

