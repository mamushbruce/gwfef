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
            {children.map((child) => {
              const childImage = PlaceHolderImages.find(p => p.id === child.imageId);
              return (
                <Card key={child.id} className="group flex transform flex-col overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-xl">
                  <Link href={`/sponsorship/${child.id}`} className="flex flex-col h-full">
                    <CardHeader className="relative h-64 w-full p-0">
                      {childImage && (
                        <Image
                          src={childImage.imageUrl}
                          alt={child.name}
                          data-ai-hint={childImage.imageHint}
                          fill
                          className="object-cover object-top"
                        />
                      )}
                      {child.sponsorshipStatus === 'Sponsored' && (
                        <Badge variant="default" className="absolute right-3 top-3 bg-primary/80 backdrop-blur-sm">Sponsored</Badge>
                      )}
                    </CardHeader>
                    <CardContent className="flex-grow p-6">
                      <h3 className="font-headline text-2xl font-bold">{child.name}</h3>
                      <p className="text-sm text-muted-foreground">{child.age} years old | {child.location}</p>
                      <p className="mt-2 text-sm">Loves to {child.bio.toLowerCase().includes('read') ? 'read' : child.bio.toLowerCase().includes('soccer') ? 'play soccer' : 'draw'}.</p>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <Button className="w-full" disabled={child.sponsorshipStatus === 'Sponsored'}>
                        {child.sponsorshipStatus === 'Available' ? `Sponsor ${child.name}` : 'Sponsored'}
                      </Button>
                    </CardFooter>
                  </Link>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
