import Link from "next/link";
import { HandHeart, Twitter, Facebook, Instagram } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="bg-primary/5">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="mb-4 inline-flex items-center gap-2">
              <HandHeart className="h-8 w-8 text-primary" />
              <span className="font-headline text-xl font-bold">Gods Will Foundation</span>
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              Changing the world, one child at a time.
            </p>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-headline font-semibold tracking-wider text-foreground">Navigate</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="/sponsorship" className="text-muted-foreground hover:text-primary">Sponsor</Link></li>
              <li><Link href="/stories" className="text-muted-foreground hover:text-primary">Stories</Link></li>
              <li><Link href="/donate" className="text-muted-foreground hover:text-primary">Donate</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-headline font-semibold tracking-wider text-foreground">Subscribe to our newsletter</h3>
            <p className="mt-2 text-sm text-muted-foreground">Stay up to date with our work and the children you are supporting.</p>
            <form className="mt-4 flex gap-2">
              <Input type="email" placeholder="Enter your email" className="max-w-xs bg-background" />
              <Button type="submit" className="bg-accent text-accent-foreground hover:bg-accent/90">Subscribe</Button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between border-t pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Gods Will for Eternity Foundation. All rights reserved.
          </p>
          <div className="mt-4 flex space-x-4 sm:mt-0">
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Instagram className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
