"use client";

import { useEffect, useState } from "react";
import { Menubar } from "@/components/ui/menubar";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "../ui/mode-toggle";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
} from "../ui/dropdown-menu";
import Image from "next/image";
import { useTheme } from "next-themes";

function RSI_menu() {
  const { theme, resolvedTheme } = useTheme(); // Use resolvedTheme instead of systemTheme
  const [isOpen, setIsOpen] = useState(false);
  const [currentLogo, setCurrentLogo] = useState("/img/logo_black.png"); // Default to light

  useEffect(() => {
    // resolvedTheme already accounts for system preference
    setCurrentLogo(
      resolvedTheme === "dark" ? "/img/logo_white.png" : "/img/logo_black.png"
    );
  }, [resolvedTheme]); // Only depend on resolvedTheme

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <Menubar className="flex justify-between h-16">
      {/* Desktop Navigation (hidden on mobile) */}
      <div className="hidden w-full p-2 md:flex gap-4 justify-center items-center mx-10">
        <Link href="/" passHref>
          <Button variant="ghost">Home</Button>
        </Link>
        <Link href="/About" passHref>
          <Button variant="ghost">About</Button>
        </Link>
        <Image
          src={currentLogo}
          alt="logo"
          width={180}
          height={48}
          priority
          onError={(e) => {
            e.currentTarget.src = "/img/logo_black.png"; // Fallback
          }}
        />
        <DropdownMenu>
          <DropdownMenuTrigger className="font-medium p-2 rounded-md hover:bg-accent hover:text-accent-foreground hover:cursor-pointer">
            Business
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link href="/Petzee" passHref onClick={closeMenu}>
                Natural Dog Treats
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/WovenConcept" passHref onClick={closeMenu}>
                Handmade Carpets
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Link href="/Contact" passHref>
          <Button variant="ghost">Contact</Button>
        </Link>
      </div>

      {/* Mobile Header (visible on mobile) */}
      <div className="flex md:hidden w-full justify-between items-center px-4">
        <Image
          src={theme === "dark" ? "/img/logo_white.png" : "/img/logo_black.png"}
          alt="logo"
          width="120"
          height={0}
          style={{ height: "auto" }}
        />

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-md hover:bg-accent hover:text-accent-foreground"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu (visible when hamburger is clicked) */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-t shadow-lg z-50">
          <div className="flex flex-col p-4 space-y-2">
            <Link href="/" passHref onClick={closeMenu}>
              <Button variant="ghost" className="w-full justify-start">
                Home
              </Button>
            </Link>
            <Link href="/About" passHref onClick={closeMenu}>
              <Button variant="ghost" className="w-full justify-start">
                About
              </Button>
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="w-full font-medium p-2 rounded-md hover:bg-accent hover:text-accent-foreground text-left">
                Business
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[200px]">
                <DropdownMenuItem>
                  <Link href="/Petzee" passHref onClick={closeMenu}>
                    Natural Dog Treats
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/WovenConcept" passHref onClick={closeMenu}>
                    Handmade Carpets
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/Contact" passHref onClick={closeMenu}>
              <Button variant="ghost" className="w-full justify-start">
                Contact
              </Button>
            </Link>
          </div>
        </div>
      )}

      <ModeToggle />
    </Menubar>
  );
}

export { RSI_menu };
