
'use client';

import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

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
  const [executiveDirector, coo, ...otherMembers] = teamMembers;

  const [isVisible, setIsVisible] = useState(false);
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ref = chartRef.current;
    if (!ref) return;

    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target); // Animate only once
            }
        },
        {
            root: null,
            rootMargin: '0px',
            threshold: 0.1 // Trigger when 10% of the element is visible
        }
    );

    observer.observe(ref);

    return () => {
        if (ref) {
            observer.unobserve(ref);
        }
    };
  }, []);

  return (
    <div>
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container mx-auto px-4">
          <p className="font-semibold uppercase tracking-wider text-primary-foreground/80">Home / Our Team</p>
          <h1 className="mt-2 font-headline text-4xl font-bold md:text-5xl">Meet Our Team</h1>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="font-headline text-3xl font-bold md:text-4xl text-primary">Our Organizational Structure</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    Our dedicated team is the driving force behind our mission. Each member brings passion, expertise, and unwavering commitment to empowering children and transforming communities.
                </p>
            </div>

            <div ref={chartRef} className="mt-20 flex flex-col items-center gap-8 font-headline">
                {/* Executive Director */}
                <div className="relative flex flex-col items-center">
                    <Card className="w-72 text-center shadow-lg z-10">
                        <CardHeader>
                            <CardTitle>{executiveDirector.role}</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm text-muted-foreground">
                            <p>{executiveDirector.description}</p>
                        </CardContent>
                    </Card>
                    <div className={cn("absolute top-full h-8 w-0.5 bg-border origin-top transition-transform duration-500 ease-out", isVisible ? 'scale-y-100' : 'scale-y-0')}></div>
                </div>

                {/* COO */}
                <div className="relative flex flex-col items-center pt-8">
                     <Card className="w-72 text-center shadow-lg z-10">
                        <CardHeader>
                            <CardTitle>{coo.role}</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm text-muted-foreground">
                            <p>{coo.description}</p>
                        </CardContent>
                    </Card>
                     <div className={cn("absolute top-full h-8 w-0.5 bg-border origin-top transition-transform duration-500 ease-out delay-200", isVisible ? 'scale-y-100' : 'scale-y-0')}></div>
                </div>

                {/* Connecting lines */}
                <div className="w-full max-w-5xl relative pt-8">
                    <div className={cn("absolute left-1/2 top-0 h-full w-0.5 bg-border -translate-x-1/2 origin-top transition-transform duration-500 ease-out delay-300", isVisible ? 'scale-y-100' : 'scale-y-0')}></div>
                    <div className={cn("absolute left-0 top-0 h-0.5 w-full bg-border origin-center transition-transform duration-700 ease-out delay-500", isVisible ? 'scale-x-100' : 'scale-x-0')}></div>
                </div>

                {/* Other Members */}
                <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 pt-16">
                    {otherMembers.map((member, index) => (
                        <div key={index} className="relative flex flex-col items-center">
                            <div className={cn("absolute bottom-full h-8 w-0.5 bg-border origin-bottom transition-transform duration-500 ease-out delay-700", isVisible ? 'scale-y-100' : 'scale-y-0')}></div>
                            <Card className="w-full text-center shadow-md hover:shadow-xl transition-shadow duration-300">
                                <CardHeader>
                                    <CardTitle className="text-xl">{member.role}</CardTitle>
                                </CardHeader>
                                <CardContent className="text-sm text-muted-foreground">
                                    <p>{member.description}</p>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
