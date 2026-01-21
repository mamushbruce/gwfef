import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const teamMembers = [
  { name: "Dr. Evelyn Reed", role: "Founder & CEO", imageHint: "woman portrait" },
  { name: "Marcus Chen", role: "Director of Operations", imageHint: "man portrait" },
  { name: "Amina Khan", role: "Head of Programs", imageHint: "woman portrait" },
  { name: "David Lee", role: "Chief Financial Officer", imageHint: "man portrait" },
];

export default function AboutPage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'group-happy-children');
  const teamImage = PlaceHolderImages.find(p => p.id === 'about-team');

  return (
    <div>
      <section className="relative py-24 md:py-32 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-semibold uppercase tracking-wider text-primary">About Us</p>
            <h1 className="mt-2 font-headline text-4xl font-bold text-foreground md:text-6xl">
              Our Mission is to Empower Futures
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              We are a dedicated team committed to breaking the cycle of poverty by providing children with the tools they need to build a better future: education, health, and a loving community.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-24">
            <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-xl">
              {heroImage && (
                <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  data-ai-hint={heroImage.imageHint}
                  fill
                  className="object-cover"
                />
              )}
            </div>
            <div>
              <h2 className="font-headline text-3xl font-bold md:text-4xl">Our Vision for a Better World</h2>
              <p className="mt-4 text-muted-foreground">
                We envision a world where every child, regardless of their circumstances, has the opportunity to reach their full potential. A world where communities are empowered to support their youngest members, and hope is a reality for all.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start">
                  <Check className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                  <span><strong>Comprehensive Care:</strong> Providing holistic support including education, nutrition, healthcare, and emotional well-being.</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                  <span><strong>Sustainable Impact:</strong> Creating long-term, positive change by working with local communities and leaders.</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                  <span><strong>Transparency and Trust:</strong> Ensuring every donation is used effectively and ethically to maximize its impact.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="font-headline text-3xl font-bold md:text-4xl">Meet Our Leadership Team</h2>
                <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">The passionate individuals guiding our mission and ensuring our work has a lasting impact.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, i) => (
                <Card key={member.name} className="text-center border-0 shadow-none bg-transparent">
                  <CardHeader className="p-0">
                    <div className="relative h-48 w-48 mx-auto rounded-full overflow-hidden shadow-lg">
                      <Image 
                        src={`https://picsum.photos/seed/team${i+1}/200/200`} 
                        alt={member.name}
                        data-ai-hint={member.imageHint}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="mt-4">
                    <CardTitle className="font-headline text-xl">{member.name}</CardTitle>
                    <p className="text-primary">{member.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
        </div>
      </section>
    </div>
  );
}
