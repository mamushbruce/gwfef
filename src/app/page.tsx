
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, HeartHandshake, Users, Briefcase, GraduationCap, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { children } from "@/lib/data";

export default function HomePage() {
  const featuredChild = children.find(c => c.id === 1);
  const missionImage = PlaceHolderImages.find(p => p.id === 'group-happy-children');
  const impactImage = PlaceHolderImages.find(p => p.id === 'story-community-build');
  const whatWeDoImage1 = PlaceHolderImages.find(p => p.id === 'child-portrait-3');
  const whatWeDoImage2 = PlaceHolderImages.find(p => p.id === 'story-community-build');
  const whatWeDoImage3 = PlaceHolderImages.find(p => p.id === 'hero-children-reading');
  const whatWeDoImage4 = PlaceHolderImages.find(p => p.id === 'impact-life');  

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
            <div className="flex flex-col items-center text-center p-6 rounded-lg transition-all duration-300 hover:bg-primary/5 hover:shadow-lg hover:-translate-y-1">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <BookOpen className="h-8 w-8" />
              </div>
              <h3 className="mb-2 font-headline text-2xl font-bold">Education</h3>
              <p className="text-muted-foreground">Providing quality education and learning resources to unlock each child's potential.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg transition-all duration-300 hover:bg-primary/5 hover:shadow-lg hover:-translate-y-1">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <HeartHandshake className="h-8 w-8" />
              </div>
              <h3 className="mb-2 font-headline text-2xl font-bold">Care & Support</h3>
              <p className="text-muted-foreground">Ensuring children have access to healthcare, nutrition, and a safe, nurturing environment.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg transition-all duration-300 hover:bg-primary/5 hover:shadow-lg hover:-translate-y-1">
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
               {featuredChild && (
                <Image
                  src={featuredChild.imageUrl}
                  alt={featuredChild.name}
                  fill
                  className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
               )}
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
               <div className="relative z-10 mt-auto flex flex-col p-6 text-white">
                 <CardDescription className="text-white/80">Sponsor a Child</CardDescription>
                 {featuredChild && (
                   <>
                    <CardTitle className="font-headline text-3xl">Meet {featuredChild.name.toUpperCase()}</CardTitle>
                    <p className="mt-2 text-white/90">{featuredChild.name} dreams of becoming a {featuredChild.dream}. Your sponsorship can make {featuredChild.gender === 'Female' ? 'her' : 'his'} dream a reality.</p>
                    <Button asChild className="mt-4 w-fit bg-accent text-accent-foreground hover:bg-accent/90">
                        <Link href={`/sponsorship/${featuredChild.id}`}>Sponsor {featuredChild.name}</Link>
                    </Button>
                   </>
                 )}
               </div>
            </Card>

            <Card className="group relative col-span-1 row-span-1 flex flex-col justify-center overflow-hidden bg-primary text-primary-foreground transition-transform duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl lg:col-span-1">
              <div className="p-6 text-center">
                <h3 className="font-headline text-3xl font-bold">Futures Changed</h3>
                <p className="mt-1">Countless children sponsored, transforming their lives.</p>
              </div>
            </Card>

            <Card className="group relative col-span-1 row-span-1 flex flex-col justify-center overflow-hidden bg-accent text-accent-foreground transition-transform duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl lg:col-span-1">
              <div className="p-6 text-center">
                <h3 className="font-headline text-3xl font-bold">Vital Funds Raised</h3>
                <p className="mt-1">Supporting education, health, and care programs.</p>
              </div>
            </Card>

            {impactImage && (
              <Card className="group relative col-span-1 row-span-1 flex flex-col overflow-hidden transition-transform duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl lg:col-span-2">
                <Image
                  src={impactImage.imageUrl}
                  alt={impactImage.description}
                  data-ai-hint={impactImage.imageHint}
                  fill
                  className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="relative z-10 mt-auto flex flex-col p-6 text-white">
                  <CardDescription className="text-white/80">Our Impact</CardDescription>
                  <CardTitle className="font-headline text-3xl">Stories of Transformation</CardTitle>
                  <Button asChild variant="link" className="mt-4 w-fit p-0 text-white">
                    <Link href="/impact">Read More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </div>
              </Card>
            )}

          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-primary-foreground md:py-24">
        <div className="container mx-auto grid grid-cols-1 gap-y-12 px-4 md:grid-cols-3 md:gap-x-12">
          <div className="text-center">
            <h3 className="font-headline text-3xl font-bold">Empowering Children</h3>
            <p className="mt-2 text-lg text-primary-foreground/80">Our educational and support programs empower children for a brighter future.</p>
          </div>
          <div className="text-center">
            <h3 className="font-headline text-3xl font-bold">Serving Communities</h3>
            <p className="mt-2 text-lg text-primary-foreground/80">We build local capacity and provide resources to uplift entire communities.</p>
          </div>
          <div className="text-center">
            <h3 className="font-headline text-3xl font-bold">Creating Direct Impact</h3>
            <p className="mt-2 text-lg text-primary-foreground/80">Your donation goes directly to our programs, ensuring maximum positive change.</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="font-semibold uppercase tracking-wider text-primary">What we do</p>
            <h2 className="mt-2 font-headline text-3xl font-bold md:text-4xl">We Are Messengers of Hope</h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              We are dedicated to breaking the cycle of poverty and building a hopeful future for every child. Through our comprehensive programs, we provide not just aid, but empowerment.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="group relative flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-2xl">
              {whatWeDoImage1 && <Image src={whatWeDoImage1.imageUrl} alt="Children's Home Services" data-ai-hint="child care" width={600} height={400} className="object-cover transition-transform duration-300 group-hover:scale-105" />}
              <CardHeader>
                <CardTitle className="font-headline">Children’s Home Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Emergency shelter, healing, medical support, and family reintegration.</p>
              </CardContent>
            </Card>
            <Card className="group relative flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-2xl">
              {whatWeDoImage2 && <Image src={whatWeDoImage2.imageUrl} alt="Community Outreach" data-ai-hint="community outreach" width={600} height={400} className="object-cover transition-transform duration-300 group-hover:scale-105" />}
              <CardHeader>
                <CardTitle className="font-headline">Community Outreach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Skills development, economic empowerment, and community education.</p>
              </CardContent>
            </Card>
            <Card className="group relative flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-2xl">
              {whatWeDoImage3 && <Image src={whatWeDoImage3.imageUrl} alt="Education Support" data-ai-hint="child studying" width={600} height={400} className="object-cover transition-transform duration-300 group-hover:scale-105" />}
              <CardHeader>
                <CardTitle className="font-headline">Education Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Ensuring school access and providing necessary learning materials.</p>
              </CardContent>
            </Card>
            <Card className="group relative flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-2xl">
              {whatWeDoImage4 && <Image src={whatWeDoImage4.imageUrl} alt="Discipleship & Spiritual Development" data-ai-hint="spiritual guidance" width={600} height={400} className="object-cover transition-transform duration-300 group-hover:scale-105" />}
              <CardHeader>
                <CardTitle className="font-headline">Spiritual Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Faith formation and moral guidance through discipleship and service.</p>
              </CardContent>
            </Card>
          </div>
           <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/what-we-do">Learn More About What We Do <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-foreground text-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div>
              <h2 className="font-headline text-3xl font-bold md:text-4xl text-primary-foreground">A Lifeline of Hope and Opportunity</h2>
              <p className="mt-4 text-muted">
                Our programs are meticulously designed to address the most critical needs of children in impoverished communities. We believe in a holistic approach, ensuring that every child receives the care, education, and support needed to not just survive, but thrive.
              </p>
              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-foreground">Education for All</h3>
                    <p className="text-muted">From building schools to providing scholarships, we make education accessible.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Heart className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-foreground">Health & Nutrition</h3>
                    <p className="text-muted">We ensure children have access to healthcare, clean water, and nutritious food.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Briefcase className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-foreground">Livelihood Programs</h3>
                    <p className="text-muted">We empower families with skills and resources to achieve financial stability.</p>
                  </div>
                </div>
              </div>
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
