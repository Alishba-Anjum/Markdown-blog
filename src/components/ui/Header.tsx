"use client";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./button";
import { ModeToggle } from "./Theme-btn";


const Header = () => {
  return (  
    <header className=" bg-background/50 shadow-md px-6 sticky top-0 border-b backdrop-blur">
      <nav className="container mx-auto flex items-center justify-between py-4 lg:px-6">
        {/* Logo */}
        <div className="text-2xl font-bold hover:text-gray-500">
          <Link href="/">Alishba Blogs</Link>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="md:hidden block ">
          <Sheet>
              <span className="px-2"> <ModeToggle /></span>
            <SheetTrigger
               className=" hover:text-gray-600 focus:outline-none font-bold">
                <CiMenuFries size={24}  />
              
            </SheetTrigger>
            <SheetContent side="right" className="bg-gray-200">
              <SheetHeader>
                <SheetTitle className="my-4 text-2xl text-center">Alishba Blog </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-4 mt-4 items-center ">
                <Link href="/" className="hover:bg-gray-300 px-4 py-2 rounded">
                  Home
                </Link>
                <Link
                  href="/about"
                  className="hover:bg-gray-300 px-4 py-2 rounded"
                >
                  About
                </Link>
                <Link
                  href="/blog"
                  className="hover:bg-gray-300 px-4 py-2 rounded"
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className="hover:bg-gray-300 px-4 py-2 rounded"
                >
                  Contacts
                </Link>
                <div className="flex gap-2"><Button className=" mx-1 w-[100px]" variant="outline">Login</Button>
                <Button className=" mx-1 w-[100px]" variant="outline">Sign up</Button></div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex md:items-center md:space-x-6">
          <Link href="/" className=" hover:font-semibold ">
            Home
          </Link>
          <Link href="/about" className=" hover:font-semibold">
            About
          </Link>
          <Link href="/blog" className=" hover:font-semibold">
            Blog
          </Link>
          <Link href="/contact" className=" hover:font-semibold ">
            Contacts
          </Link>
          <Link href="/login"><Button className="" variant="outline">Login</Button></Link>
          <Link href="/signup"><Button className="" variant="outline">Sign up</Button></Link>
         <ModeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Header;

