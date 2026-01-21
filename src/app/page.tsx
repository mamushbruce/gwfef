import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, HeartHandshake, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { stories } from "@/lib/data";

export default function Home() {
  const featuredChildImage = PlaceHolderImages.find(p => p.id === 'child-portrait-1');
  const missionImage = PlaceHolderImages.find(p => p.id === 'group-happy-children');
  const featuredStory = stories[0];
  const featuredStoryImage = PlaceHolderImages.find(p => p.id === featuredStory.imageId);

  return (
    <div className="flex flex-col">
      <section className="relative h-[60vh] min-h-[500px] w-full bg-primary/10">
        <div className="absolute inset-0 z-0">
          <Image
            src={PlaceHolderImages.find(p => p.id === 'hero-children-reading')?.imageUrl || ''}
            alt={PlaceHolderImages.find(p => p.id === 'hero-children-reading')?.description || ''}
            data-ai-hint={PlaceHolderImages.find(p => p.id === 'hero-children-reading')?.imageHint || ''}
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>
        <div className="container relative z-10 mx-auto flex h-full flex-col items-start justify-end px-4 pb-16">
          <h1 className="mb-4 font-headline text-5xl font-bold text-foreground md:text-7xl">
            Change a Life Today
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Your contribution provides hope and a future for children in need. Join us in making a lasting impact.
          </p>
          <div className="flex gap-4">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/donate">Donate Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/sponsorship">Sponsor a Child</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-headline text-4xl font-bold text-primary md:text-5xl">Our Commitment in Action</h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">We believe every child deserves a chance to succeed. Discover how we're making a difference through our core programs.</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <BookOpen className="h-8 w-8" />
              </div>
              <h3 className="mb-2 font-headline text-2xl font-bold">Education</h3>
              <p className="text-muted-foreground">Providing quality education and learning resources to unlock each child's potential.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <HeartHandshake className="h-8 w-8" />
              </div>
              <h3 className="mb-2 font-headline text-2xl font-bold">Care & Support</h3>
              <p className="text-muted-foreground">Ensuring children have access to healthcare, nutrition, and a safe, nurturing environment.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="mb-2 font-headline text-2xl font-bold">Community</h3>
              <p className="text-muted-foreground">Building strong communities that support and uplift children and their families.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
           <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
            
            <Card className="group relative col-span-1 row-span-1 flex flex-col justify-between overflow-hidden transition-transform duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl lg:col-span-2">
              <CardHeader>
                <CardDescription>Our Mission</CardDescription>
                <CardTitle className="font-headline text-3xl">A World Where Every Child Thrives</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Our foundation is built on the promise of providing love, support, and opportunity to children who need it most.</p>
              </CardContent>
              <CardFooter>
                 <Button variant="link" asChild className="p-0">
                    <Link href="/about">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
              </CardFooter>
            </Card>

            <Card className="group relative col-span-1 row-span-1 flex flex-col overflow-hidden transition-transform duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl lg:row-span-2">
               {featuredChildImage && (
                <Image
                  src={featuredChildImage.imageUrl}
                  alt={featuredChildImage.description}
                  data-ai-hint={featuredChildImage.imageHint}
                  fill
                  className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
               )}
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
               <div className="relative z-10 mt-auto flex flex-col p-6 text-white">
                 <CardDescription className="text-white/80">Sponsor a Child</CardDescription>
                 <CardTitle className="font-headline text-3xl">Meet LINA</CardTitle>
                 <p className="mt-2 text-white/90">Lina dreams of becoming a teacher. Your sponsorship can make her dream a reality.</p>
                 <Button asChild className="mt-4 w-fit bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link href="/sponsorship/1">Sponsor Lina</Link>
                  </Button>
               </div>
            </Card>

            <Card className="group relative col-span-1 row-span-1 flex flex-col justify-end overflow-hidden bg-primary text-primary-foreground transition-transform duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl lg:col-span-1">
              <div className="p-6">
                <h3 className="font-headline text-5xl font-bold">500+</h3>
                <p className="mt-1">Children sponsored and futures changed.</p>
              </div>
            </Card>

            <Card className="group relative col-span-1 row-span-1 flex flex-col justify-end overflow-hidden bg-accent text-accent-foreground transition-transform duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl lg:col-span-1">
              <div className="p-6">
                <h3 className="font-headline text-5xl font-bold">$1M+</h3>
                <p className="mt-1">Raised for education, health & care.</p>
              </div>
            </Card>

            {featuredStory && featuredStoryImage && (
              <Card className="group relative col-span-1 row-span-1 flex flex-col overflow-hidden transition-transform duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl lg:col-span-2">
                <Image
                  src={featuredStoryImage.imageUrl}
                  alt={featuredStoryImage.description}
                  data-ai-hint={featuredStoryImage.imageHint}
                  fill
                  className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="relative z-10 mt-auto flex flex-col p-6 text-white">
                  <CardDescription className="text-white/80">Success Story</CardDescription>
                  <CardTitle className="font-headline text-3xl">{featuredStory.title}</CardTitle>
                  <Button asChild variant="link" className="mt-4 w-fit p-0 text-white">
                    <Link href={`/stories/${featuredStory.slug}`}>Read More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </div>
              </Card>
            )}

          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 font-headline text-4xl font-bold text-primary md:text-5xl">Join Our Community of Hope</h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              Whether you choose to donate, sponsor a child, or volunteer your time, your support is vital. Together, we can build a better world for generations to come.
            </p>
            <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/donate">Get Involved Today</Link>
            </Button>
        </div>
      </section>
    </div>
  );
}
