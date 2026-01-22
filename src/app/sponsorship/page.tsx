import Image from "next/image";
import Link from "next/link";
import { children } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { notFound } from "next/navigation";

export default function SponsorshipPage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'sponsorship-hero');
  if (!heroImage) return notFound();

  return (
    <div>
      <section className="relative h-[40vh] min-h-[300px] w-full">
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          data-ai-hint={heroImage.imageHint}
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-primary/60" />
        <div className="container relative mx-auto flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="font-headline text-4xl font-bold md:text-6xl">Sponsor a Child</h1>
          <p className="mt-4 max-w-2xl text-lg text-primary-foreground/90">
            Change a life through sponsorship. Your support provides education, healthcare, and a loving community for a child in need.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center font-headline text-3xl font-bold text-primary md:text-4xl">Children Awaiting Sponsorship</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {children.map((child) => (
              <Link href={`/sponsorship/${child.id}`} key={child.id} className="group relative block h-96 w-full overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <Image
                  src={child.imageUrl}
                  alt={child.name}
                  fill
                  className="object-cover object-center transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="relative flex h-full flex-col justify-end p-6 text-white">
                  <h3 className="font-headline text-3xl font-bold">{child.name}</h3>
                  <p className="text-sm">{child.age} years old | {child.location}</p>
                  <Button 
                    className="mt-4 w-full" 
                    variant={child.sponsorshipStatus === 'Sponsored' ? 'secondary' : 'default'} 
                    disabled={child.sponsorshipStatus === 'Sponsored'}
                    asChild
                  >
                    <span>{child.sponsorshipStatus === 'Available' ? `Sponsor ${child.name}` : 'Sponsored'}</span>
                  </Button>
                </div>
                {child.sponsorshipStatus === 'Sponsored' && (
                  <Badge variant="default" className="absolute right-3 top-3 bg-primary/80 backdrop-blur-sm">Sponsored</Badge>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
