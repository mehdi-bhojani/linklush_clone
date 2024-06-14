"use client"
import LogoSVG from "@/assets/Svgs/Logo";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, MoveRightIcon, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="absolute top-0 left-0 right-0 py-6 lg:py-8 z-50">
      <div className="xs:px-6 container flex justify-between items-center">

        {/* logo */}
        <Link href="/">
          <LogoSVG />
        </Link>

        {/* menus */}
        <nav className="hidden lg:block">
          <ul className="flex gap-6">
            <li className="hover:font-semibold">
              <Link href="/features">
                Features
              </Link>
            </li>
            <li className="hover:font-semibold">
              <Link href="/pricing">
                Pricing
              </Link>
            </li>
            <li className="hover:font-semibold">
              <Link href="/blog">
                Blog
              </Link>
            </li>
            <li className="hover:font-semibold">
              <Link href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* get-started-button */}
        <div className="hidden lg:block">
          <Link href="/sign-up">
            <Button className="w-full"><span className="mr-2">Get started</span> <MoveRightIcon width={24} hanging={24} /></Button>
          </Link>
        </div>

        <div className="block lg:hidden">
          {isMenuOpen ? <button onClick={toggleMenu} className="w-full"><span className="mr-2"><X height={24} width={24} /></span> </button> : <button onClick={toggleMenu} className="w-full"><span className="mr-2"><Menu height={24} width={24} /></span> </button>}

        </div>
      </div>

      {/* for mobile */}

      <div className="lg:hidden bg-white ">
        {isMenuOpen && (
          <aside className="w-full">
            <div className="container py-8">
              <nav className="flex flex-col gap-4">
                <Link href="/features">
                  <div className="text-xl " onClickCapture={() => setIsMenuOpen(!isMenuOpen)}>Features</div>
                </Link>
                <Link href="/pricing">
                  <div className="text-xl " onClickCapture={() => setIsMenuOpen(!isMenuOpen)}>Pricing</div>
                </Link>
                <Link href="/blog">
                  <div className="text-xl " onClickCapture={() => setIsMenuOpen(!isMenuOpen)}>Blog</div>
                </Link>
                <Link href="/contact">
                  <div className="text-xl " onClickCapture={() => setIsMenuOpen(!isMenuOpen)}>Contact</div>
                </Link>
              </nav>
              <div className="flex flex-col gap-4 mt-4">
                <Link href="/login">
                  <Button variant={"outline"} className="w-full">Login</Button>
                </Link>
                <Link href="/sign-up">
                  <Button className="w-full"><span className="mr-2">Get started</span> <MoveRightIcon width={24} hanging={24} /></Button>
                </Link>
              </div>
            </div>
          </aside>
        )}
      </div>

    </header>
  );
};

export default Header;
