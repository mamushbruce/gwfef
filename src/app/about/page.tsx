
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function AboutPage() {
  const whoWeAreHero = PlaceHolderImages.find(p => p.id === 'group-happy-children');
  const historyImage = PlaceHolderImages.find(p => p.id === 'story-community-build');

  return (
    <div>
      <section className="relative h-[40vh] min-h-[300px] w-full">
        {whoWeAreHero && (
            <Image
            src={whoWeAreHero.imageUrl}
            alt={whoWeAreHero.description}
            data-ai-hint={whoWeAreHero.imageHint}
            fill
            className="object-cover object-center"
            />
        )}
        <div className="absolute inset-0 bg-primary/60" />
        <div className="container relative mx-auto flex h-full flex-col items-start justify-center px-4 text-left text-white">
          <p className="font-semibold uppercase tracking-wider">Home / Who we are</p>
          <h1 className="font-headline text-4xl font-bold md:text-6xl">Who We Are</h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div className="md:col-span-2">
              <p className="text-muted-foreground">
                Our organization is dedicated to creating brighter futures for children and families in need. Rooted in compassion and driven by purpose, we believe that every child deserves access to education, healthcare, and the support to reach their fullest potential. Through our programs, we work hand-in-hand with communities to break cycles of poverty, uplift lives, and nurture potential. With a commitment to transparency, integrity, and sustainable impact, our mission is to empower the next generation with opportunities that build lifelong resilience. Guided by our core values of empathy, equality, and community, we are here to inspire change, one child at a time.
              </p>
            </div>
            <div>
              <h3 className="font-headline text-xl font-bold">Quick Links</h3>
              <Separator className="my-4" />
              <ul className="space-y-2">
                <li><Link href="/donate" className="flex items-center text-primary hover:underline">Donate to Gods Will for Eternity <ArrowRight className="ml-2 h-4 w-4"/></Link></li>
                <li><Link href="/sponsorship" className="flex items-center text-primary hover:underline">See our Programs & Services <ArrowRight className="ml-2 h-4 w-4"/></Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-primary/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">We're Proud of Our Purpose</h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h3 className="font-headline text-2xl font-bold relative pl-4">
                <span className="absolute left-0 top-0 bottom-0 w-1 bg-accent"></span>
                Our Mission
              </h3>
              <p className="mt-4 text-muted-foreground">To break the cycle of poverty by providing children with the tools they need to build a better future: education, health, and a loving community.</p>
            </div>
            <div>
              <h3 className="font-headline text-2xl font-bold relative pl-4">
                <span className="absolute left-0 top-0 bottom-0 w-1 bg-accent"></span>
                Our Vision
              </h3>
              <p className="mt-4 text-muted-foreground">We envision a world where every child, regardless of their circumstances, has the opportunity to reach their full potential. A world where communities are empowered to support their youngest members, and hope is a reality for all.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-foreground text-background py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold text-primary-foreground md:text-4xl">Our Core Values</h2>
          </div>
          <Accordion type="single" collapsible className="w-full mt-12">
            <AccordionItem value="item-1" className="border-border/20">
              <AccordionTrigger className="hover:no-underline text-primary-foreground/90 font-semibold text-lg">Empathy</AccordionTrigger>
              <AccordionContent className="text-muted">
                We listen and connect with compassion, understanding the unique needs and perspectives of every child and community we serve.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-border/20">
              <AccordionTrigger className="hover:no-underline text-primary-foreground/90 font-semibold text-lg">Integrity</AccordionTrigger>
              <AccordionContent className="text-muted">
                We act with honesty and transparency in all we do, ensuring that our actions are always aligned with our mission and the trust placed in us.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-border/20">
              <AccordionTrigger className="hover:no-underline text-primary-foreground/90 font-semibold text-lg">Empowerment</AccordionTrigger>
              <AccordionContent className="text-muted">
                We equip children and communities with the tools, knowledge, and opportunities they need to build their own successful futures.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border-border/20">
              <AccordionTrigger className="hover:no-underline text-primary-foreground/90 font-semibold text-lg">Inclusive</AccordionTrigger>
              <AccordionContent className="text-muted">
                We embrace diversity in all its forms and are committed to creating an environment where everyone has a voice and feels a sense of belonging.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="border-border/20">
              <AccordionTrigger className="hover:no-underline text-primary-foreground/90 font-semibold text-lg">Sustainability</AccordionTrigger>
              <AccordionContent className="text-muted">
                We focus on creating lasting, self-sustaining impact that endures for generations, ensuring that our work continues to make a difference long into the future.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="font-semibold uppercase tracking-wider text-primary">Our Impact</p>
              <h2 className="mt-2 font-headline text-3xl font-bold md:text-4xl">Transforming Lives, One Opportunity at a Time</h2>
            </div>
            <div>
              <p className="text-muted-foreground">Our commitment reaches beyond funding. Through our tailored programs and dedicated support, we empower children to thrive, learn, and grow into confident, capable individuals. Every donation, every volunteer, and every program fuels a brighter future, creating real change in the lives of children and their communities.</p>
              <Button asChild variant="link" className="p-0 mt-4 text-primary">
                  <Link href="/stories">Our Impact<ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="font-semibold uppercase tracking-wider text-primary">Our History</p>
              <h2 className="mt-2 font-headline text-3xl font-bold md:text-4xl">A history of Child keeping</h2>
              <p className="mt-4 text-muted-foreground">Founded with a mission to empower underprivileged children, our organization began as a local initiative to provide educational support and essential resources. Over the years, we've grown into a trusted non-profit expanding our reach and programs to positively impact children's lives through education, arts, and community support. Today, we proudly serve numerous communities, continually inspired by the resilience and potential of every child we support.</p>
              <Button asChild variant="outline" className="mt-6">
                <Link href="/stories">Learn more about our stories</Link>
              </Button>
            </div>
            <div className="relative h-96 md:h-[400px] rounded-lg overflow-hidden">
                {historyImage && (
                    <Image
                        src={historyImage.imageUrl}
                        alt={historyImage.description}
                        data-ai-hint={historyImage.imageHint}
                        fill
                        className="object-cover"
                    />
                )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
