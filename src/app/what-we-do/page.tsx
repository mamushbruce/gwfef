
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Home, Users, GraduationCap, Heart, ArrowRight } from "lucide-react";

export default function WhatWeDoPage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'what-we-do-hero');

  return (
    <div>
      <section className="relative h-[40vh] min-h-[300px] w-full">
        {heroImage && (
            <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            data-ai-hint={heroImage.imageHint}
            fill
            className="object-cover object-center"
            />
        )}
        <div className="absolute inset-0 bg-primary/60" />
        <div className="container relative mx-auto flex h-full flex-col items-start justify-center px-4 text-left text-white">
          <p className="font-semibold uppercase tracking-wider">Home / What We Do</p>
          <h1 className="font-headline text-4xl font-bold md:text-6xl">What We Do</h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-lg text-muted-foreground text-center">
                We are dedicated to breaking the cycle of poverty and building a hopeful future for every child. Through our comprehensive programs, we provide not just aid, but empowerment. Our work is centered around four key pillars designed to create lasting, sustainable change for children, families, and entire communities.
            </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4 space-y-20">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="md:order-2">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Home className="h-6 w-6" />
                </div>
                <h2 className="font-headline text-3xl font-bold">1. Children’s Home Services</h2>
              </div>
              <Accordion type="single" collapsible className="w-full mt-6">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="font-semibold">Emergency Rescue & Protection</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    As a licensed children’s home, we provide immediate shelter and protection for children at risk of harm. Child welfare officers rely on us during emergencies because of our readiness to respond swiftly and ensure children’s safety.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="font-semibold">Healing & Rehabilitation</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    We offer trauma-informed counseling and holistic care to help children recover from difficult experiences. Through structured play, sports, and guided activities, children are supported to rebuild confidence, develop social skills, and regain a sense of security.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="font-semibold">Health & Medical Support</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Upon admission, every child undergoes a comprehensive medical assessment. We facilitate access to medical insurance and ensure prompt treatment whenever a child is unwell, safeguarding their physical health and overall well-being.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="font-semibold">Family Tracing & Reintegration</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    We prioritize restoring family bonds wherever possible. Our team works to identify and reunite children with their families, providing reintegration support such as bedding and household essentials. Caregivers receive guidance to ensure a safe, stable, and nurturing home environment.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="relative h-96 md:h-full rounded-lg overflow-hidden md:order-1">
                <Image src={PlaceHolderImages.find(p => p.id === 'child-portrait-3')?.imageUrl || ''} alt="Child receiving care" data-ai-hint="child care" fill className="object-cover" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
               <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Users className="h-6 w-6" />
                </div>
                <h2 className="font-headline text-3xl font-bold">2. Community Outreach</h2>
              </div>
              <Accordion type="single" collapsible className="w-full mt-6">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="font-semibold">Community Skills Development Hub</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    To address unemployment and dependency, we empower adolescent girls, young women, boys, and young men with practical skills such as tailoring. Our fully equipped skills center in Lumuli provides access to sewing machines and hands-on training, promoting self-sufficiency and economic independence.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="font-semibold">Socio-Economic Empowerment Groups</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    We establish community savings and economic groups comprising approximately 15 members with shared financial challenges. Participants receive training in saving, responsible lending, and basic investment practices, enabling collective financial growth and resilience.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="font-semibold">Community Awareness & Education</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Our outreach team conducts regular community sensitization sessions focused on positive parenting, child protection, and family responsibilities, strengthening community support systems for vulnerable individuals.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="font-semibold">Post-Reunification Monitoring & Support</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    For children reunited with their families, we carry out follow-up home visits and school monitoring to track attendance and academic progress. We also assist families in identifying viable income-generating activities to promote long-term stability.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="relative h-96 md:h-full rounded-lg overflow-hidden">
                <Image src={PlaceHolderImages.find(p => p.id === 'story-community-build')?.imageUrl || ''} alt="Community outreach program" data-ai-hint="community outreach" fill className="object-cover" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
             <div className="md:order-2">
               <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <h2 className="font-headline text-3xl font-bold">3. Education Support</h2>
              </div>
                <p className="mt-6 text-muted-foreground">
                    We ensure that every child under our care is enrolled in school and receives essential educational materials, including uniforms, books, and stationery. Continuous follow-up helps address learning challenges and encourages academic achievement.
                </p>
             </div>
             <div className="relative h-96 md:h-full rounded-lg overflow-hidden md:order-1">
                <Image src={PlaceHolderImages.find(p => p.id === 'hero-children-reading')?.imageUrl || ''} alt="Child studying" data-ai-hint="child studying" fill className="object-cover" />
             </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Heart className="h-6 w-6" />
                </div>
                <h2 className="font-headline text-3xl font-bold">4. Discipleship & Spiritual Development</h2>
              </div>
                <p className="mt-6 text-muted-foreground">
                   As a Christian-based organization, we demonstrate God’s love through service and compassion, guided by 1 John 3:16–18. Children participate in regular discipleship sessions, and faith-based teachings are integrated into our community outreach to support spiritual growth alongside practical care.
                </p>
            </div>
            <div className="relative h-96 md:h-full rounded-lg overflow-hidden">
                <Image src={PlaceHolderImages.find(p => p.id === 'impact-life')?.imageUrl || ''} alt="Spiritual guidance" data-ai-hint="spiritual guidance" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-accent/20">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="font-headline text-3xl font-bold md:text-4xl">Make an Impact</h2>
                    <p className="mt-4 text-muted-foreground">
                        Your generous contributions directly impact the lives of children, providing them with essential resources and opportunities for a brighter future.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                        <Link href="/donate">Donate Now</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                        <Link href="/sponsorship">Sponsor a Child</Link>
                    </Button>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
