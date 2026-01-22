import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, HeartHandshake, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { stories } from "@/lib/data";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="relative h-96 md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src={PlaceHolderImages.find(p => p.id === 'learning-fun')?.imageUrl || ''}
                alt={PlaceHolderImages.find(p => p.id === 'learning-fun')?.description || ''}
                data-ai-hint={PlaceHolderImages.find(p => p.id === 'learning-fun')?.imageHint || ''}
                fill
                className="rounded-lg shadow-xl object-cover"
              />
            </div>
            <div>
              <p className="font-semibold uppercase tracking-wider text-primary">Our Approach</p>
              <h2 className="mt-2 font-headline text-3xl font-bold md:text-4xl">Let's make learning fun and affordable!</h2>
              <p className="mt-4 text-muted-foreground">
                We believe that education should be engaging and accessible to every child. Our programs are designed to spark curiosity, foster creativity, and provide a supportive environment for students to thrive. We combine traditional teaching methods with innovative activities to make learning an exciting adventure.
              </p>
              <Button asChild variant="outline" className="mt-6">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary/5">
          <div className="container mx-auto px-4">
              <div className="grid items-center gap-12 md:grid-cols-2">
                  <div>
                      <p className="font-semibold uppercase tracking-wider text-primary">Our Impact</p>
                      <h2 className="mt-2 font-headline text-3xl font-bold md:text-4xl">The Foundation's Difference</h2>
                      <div className="mt-8 grid grid-cols-2 gap-8">
                          <div>
                              <p className="font-headline text-5xl font-bold text-accent">2M+</p>
                              <p className="mt-2 text-muted-foreground">Lives Touched Globally</p>
                          </div>
                          <div>
                              <p className="font-headline text-5xl font-bold text-accent">1,105</p>
                              <p className="mt-2 text-muted-foreground">Community Projects</p>
                          </div>
                          <div>
                              <p className="font-headline text-5xl font-bold text-accent">1,489</p>
                              <p className="mt-2 text-muted-foreground">Children Sponsored</p>
                          </div>
                          <div>
                              <p className="font-headline text-5xl font-bold text-accent">5,642</p>
                              <p className="mt-2 text-muted-foreground">Volunteers Engaged</p>
                          </div>
                      </div>
                  </div>
                  <div className="relative h-96 md:h-[400px] rounded-lg overflow-hidden">
                      <Image
                          src={PlaceHolderImages.find(p => p.id === 'foundation-difference')?.imageUrl || ''}
                          alt={PlaceHolderImages.find(p => p.id === 'foundation-difference')?.description || ''}
                          data-ai-hint={PlaceHolderImages.find(p => p.id === 'foundation-difference')?.imageHint || ''}
                          fill
                          className="rounded-lg shadow-xl object-cover"
                      />
                  </div>
              </div>
          </div>
      </section>

      <section className="py-16 md:py-24 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div>
              <h2 className="font-headline text-3xl font-bold md:text-4xl text-primary-foreground">Resources For Organizations</h2>
              <p className="mt-4 text-muted">
                We provide resources and support for organizations that share our vision. Explore our materials to help you make a difference in your community.
              </p>
              <Accordion type="single" collapsible className="w-full mt-6">
                <AccordionItem value="item-1" className="border-border/20">
                  <AccordionTrigger className="hover:no-underline text-primary-foreground/90">Music & Arts</AccordionTrigger>
                  <AccordionContent className="text-muted">
                    Discover programs and toolkits to bring creative arts and music education to children.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-border/20">
                  <AccordionTrigger className="hover:no-underline text-primary-foreground/90">Sports & Fitness</AccordionTrigger>
                  <AccordionContent className="text-muted">
                    Access guides and resources for setting up sports activities that promote teamwork and health.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-border/20">
                  <AccordionTrigger className="hover:no-underline text-primary-foreground/90">Academic Support</AccordionTrigger>
                  <AccordionContent className="text-muted">
                    Find materials for tutoring, mentorship, and after-school programs to boost academic performance.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden">
              <Image
                  src={PlaceHolderImages.find(p => p.id === 'resources-orgs')?.imageUrl || ''}
                  alt={PlaceHolderImages.find(p => p.id === 'resources-orgs')?.description || ''}
                  data-ai-hint={PlaceHolderImages.find(p => p.id === 'resources-orgs')?.imageHint || ''}
                  fill
                  className="rounded-lg shadow-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
              <div className="text-center">
                  <p className="font-semibold uppercase tracking-wider text-primary">Featured News</p>
                  <h2 className="mt-2 font-headline text-3xl font-bold md:text-4xl">Latest Updates from Our Foundation</h2>
              </div>
              <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
                  <Card className="overflow-hidden">
                      <CardHeader className="p-0">
                          <Image src={PlaceHolderImages.find(p => p.id === 'news-1')?.imageUrl || ''} alt="News 1" width={600} height={400} className="object-cover" />
                      </CardHeader>
                      <CardContent className="p-6">
                          <CardDescription>Oct 20, 2023</CardDescription>
                          <CardTitle className="mt-2 text-xl font-headline">Annual Community Gala Raises Record Donations</CardTitle>
                          <p className="mt-2 text-sm text-muted-foreground">Our annual gala was a huge success, bringing together supporters and raising funds for upcoming projects.</p>
                      </CardContent>
                  </Card>
                  <Card className="overflow-hidden">
                      <CardHeader className="p-0">
                          <Image src={PlaceHolderImages.find(p => p.id === 'news-2')?.imageUrl || ''} alt="News 2" width={600} height={400} className="object-cover" />
                      </CardHeader>
                      <CardContent className="p-6">
                          <CardDescription>Sep 15, 2023</CardDescription>
                          <CardTitle className="mt-2 text-xl font-headline">New Literacy Program Launched in 5 Villages</CardTitle>
                          <p className="mt-2 text-sm text-muted-foreground">We're excited to launch a new program focused on improving reading and writing skills for over 200 children.</p>
                      </CardContent>
                  </Card>
                  <Card className="overflow-hidden">
                      <CardHeader className="p-0">
                          <Image src={PlaceHolderImages.find(p => p.id === 'news-3')?.imageUrl || ''} alt="News 3" width={600} height={400} className="object-cover" />
                      </CardHeader>
                      <CardContent className="p-6">
                          <CardDescription>Aug 01, 2023</CardDescription>
                          <CardTitle className="mt-2 text-xl font-headline">Volunteers Complete Construction of a New Library</CardTitle>
                          <p className="mt-2 text-sm text-muted-foreground">A dedicated team of volunteers has completed a new library, providing access to thousands of books.</p>
                      </CardContent>
                  </Card>
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
