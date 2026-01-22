import Link from "next/link";
import { HandHeart, Twitter, Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-muted-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-12 text-sm sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-headline font-semibold tracking-wider text-background">Navigate</h3>
            <ul className="mt-4 space-y-3">
              <li><Link href="/about" className="hover:text-primary-foreground">About Us</Link></li>
              <li><Link href="/sponsorship" className="hover:text-primary-foreground">Sponsor a Child</Link></li>
              <li><Link href="/stories" className="hover:text-primary-foreground">Success Stories</Link></li>
              <li><Link href="/donate" className="hover:text-primary-foreground">Donate</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline font-semibold tracking-wider text-background">Get Involved</h3>
            <ul className="mt-4 space-y-3">
              <li><Link href="#" className="hover:text-primary-foreground">Become a Volunteer</Link></li>
              <li><Link href="#" className="hover:text-primary-foreground">Partner with Us</Link></li>
              <li><Link href="#" className="hover:text-primary-foreground">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline font-semibold tracking-wider text-background">Contact Us</h3>
            <ul className="mt-4 space-y-3">
              <li>info@godswillfoundation.org</li>
              <li>123 Charity Lane, Hope City, 12345</li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline font-semibold tracking-wider text-background">Follow Us</h3>
            <div className="mt-4 flex space-x-4">
                <Link href="#" className="hover:text-primary-foreground">
                    <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="hover:text-primary-foreground">
                    <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="hover:text-primary-foreground">
                    <Instagram className="h-5 w-5" />
                </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between border-t border-border/20 pt-8 sm:flex-row">
            <Link href="/" className="mb-4 inline-flex items-center gap-2 sm:mb-0">
                <HandHeart className="h-6 w-6 text-primary" />
                <span className="font-headline text-lg font-bold text-background">Gods Will for Eternity Foundation</span>
            </Link>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Gods Will for Eternity Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
