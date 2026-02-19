
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { UserSquare2 } from "lucide-react";

const teamMembers = [
    {
        role: "Executive Director",
        description: "Provides overall vision, strategy and leadership",
    },
    {
        role: "Chief Operating Officer (COO)",
        description: "Oversees all programs",
    },
    {
        role: "Healthcare & Nutrition Coordinator",
        description: "Manages healthy programs, nutrition support medical check ups and partnership with local clinics",
    },
    {
        role: "Community Outreach Officer",
        description: "Organizes skills training, empowerment programs, awareness campaigns.",
    },
    {
        role: "Spiritual Development Officer / Chaplain",
        description: "Oversees faith-based guidance, moral education, and mentorship programs.",
    },
    {
        role: "Fundraising & Development Manager",
        description: "Develops donor programs, sponsorship campaigns, and fundraising events.",
    },
    {
        role: "Finance & Accounts Manager",
        description: "Manages budgeting, accounts, and financial reporting.",
    },
    {
        role: "Human Resources / Admin Officer",
        description: "Handles recruitment, staff welfare, and administrative tasks.",
    },
    {
        role: "IT & Website Manager",
        description: "Maintains the website, online donations, and digital tools.",
    },
    {
        role: "Logistics & Operations Officer",
        description: "Oversees procurement, transport, and supply chain for program materials.",
    },
    {
        role: "Field Volunteers / Program Assistants",
        description: "Assist with community projects, school visits, medical outreach.",
    },
];


export default function TeamPage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'about-team');

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
          <p className="font-semibold uppercase tracking-wider">Home / Our Team</p>
          <h1 className="font-headline text-4xl font-bold md:text-6xl">Meet Our Team</h1>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center">
                <h2 className="font-headline text-3xl font-bold md:text-4xl text-primary">Our Leadership & Staff</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    Our dedicated team is the driving force behind our mission. Each member brings passion, expertise, and unwavering commitment to empowering children and transforming communities.
                </p>
            </div>
            <Accordion type="single" collapsible className="w-full mt-12">
                {teamMembers.map((member, index) => (
                    <AccordionItem key={index} value={`item-${index + 1}`}>
                        <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                            <div className="flex items-center gap-3">
                                <UserSquare2 className="h-5 w-5 text-primary" />
                                <span>{member.role}</span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-base text-muted-foreground pl-11">
                            {member.description}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
      </section>
    </div>
  );
}
