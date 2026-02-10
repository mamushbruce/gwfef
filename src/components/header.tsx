"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/sponsorship", label: "Sponsorship" },
  { href: "/impact", label: "Impact" },
  { href: "/what-we-do", label: "What We Do" },
  { href: "/about", label: "About" },
];

// Mock authentication state
const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // In a real app, this would be determined by a context or session
  return { isAuthenticated, user: { name: "Alex Doe", email: "alex.d@example.com" } };
};

export function Header() {
  const pathname = usePathname();
  const { isAuthenticated, user } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NavItems = () => (
    <>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "text-sm font-medium transition-all hover:text-primary transform hover:scale-105",
            pathname === link.href ? "text-primary" : "text-muted-foreground"
          )}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {link.label}
        </Link>
      ))}
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center px-4">
        <Link href="/" className="mr-6 flex items-center gap-2">
          <Image src="/logo.jpeg" alt="Gods Will for Eternity Foundation Logo" width={24} height={24} className="h-6 w-6" />
          <span className="font-headline text-lg font-bold">Gods Will for Eternity Foundation</span>
        </Link>
        
        <nav className="hidden items-center gap-6 md:flex">
          <NavItems />
        </nav>

        <div className="ml-auto flex items-center gap-4">
          <Button asChild className="hidden bg-accent text-accent-foreground hover:bg-accent/90 md:flex">
            <Link href="/donate">Donate</Link>
          </Button>

          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={`https://avatar.vercel.sh/${user.email}.png`} alt={user.name} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{user.name}</p>
                    <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/admin/dashboard" className="w-full">Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button asChild variant="secondary" className="hidden md:flex">
                <Link href="/login">Login</Link>
            </Button>
          )}

          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
               <Link href="/" className="mr-6 flex items-center gap-2 mb-8" onClick={() => setIsMobileMenuOpen(false)}>
                <Image src="/logo.jpeg" alt="Gods Will for Eternity Foundation Logo" width={24} height={24} className="h-6 w-6" />
                <span className="font-headline text-lg font-bold">Gods Will for Eternity Foundation</span>
              </Link>
              <div className="flex flex-col gap-6">
                <NavItems/>
                <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href="/donate" onClick={() => setIsMobileMenuOpen(false)}>Donate</Link>
                </Button>
                <Button asChild variant="secondary">
                  <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>Login</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
