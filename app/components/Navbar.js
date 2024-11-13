import { Button } from "@/components/ui/button";
import Link from "next/link";

function Navbar() {
  return (
    <nav className=" shadow-md p-4 flex justify-between items-center w-90% m-auto">
     
        <Link href="/" className="text-lg font-semibold">URL Shortener</Link>
      
      
      <div className="hidden md:flex space-x-4  items-center gap-4">
      <Link href="/" className="hover:text-blue-500">Home</Link>
          <Link href="/about" className="hover:text-blue-500">About</Link>
          <Link href="/shorten" className="hover:text-blue-500">Shorten</Link>
        
          <Link href="/contact" className="hover:text-blue-500">Contact Us</Link>
          <div>

          <Link className="mx-3" href="/generate"><Button>Try Now</Button></Link>
          <Link href="/github"><Button>Github</Button></Link>
          </div>
       
      </div>
    </nav>
  );
}

export default Navbar;
