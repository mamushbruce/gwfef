
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function ImpactPage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'impact-hero');
  const lifeImpactImage = PlaceHolderImages.find(p => p.id === 'impact-life');

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
          <p className="font-semibold uppercase tracking-wider">Home / Our Impact</p>
          <h1 className="font-headline text-4xl font-bold md:text-6xl">Our Impact</h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-lg text-muted-foreground">
            Discover the profound difference your support makes in children's lives and communities worldwide. Our Impact extends beyond immediate needs, fostering long-term growth, resilience and opportunity for children, families, and their communities. Join us as we build a brighter future, one child and one community at a time.
            </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <p className="font-semibold uppercase tracking-wider text-primary">In Numbers</p>
                    <h2 className="mt-2 font-headline text-3xl font-bold md:text-4xl">Life Impact</h2>
                    <p className="mt-4 text-muted-foreground">
                        Healthcare & Wellness Initiatives provide essential medical services, health education, and nutritional support, significantly improving the overall well-being of children. We prioritize formal and informal education, fostering a sense of stability and security. By empowering children with life skills training, we equip them with the tools they need to navigate life's challenges, pursue their aspirations, and make informed decisions about their future.
                    </p>
                    <div className="mt-8 space-y-6">
                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="font-semibold">Enhanced Education</h3>
                                <p className="font-bold text-primary">40%</p>
                            </div>
                            <Progress value={40} className="h-2" />
                        </div>
                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="font-semibold">Health Improvements</h3>
                                <p className="font-bold text-primary">30%</p>
                            </div>
                            <Progress value={30} className="h-2" />
                        </div>
                        <div>
                            <div className="flex justify-between items-center">
                                <h3 className="font-semibold">Empowered through Life Skills</h3>
                                <p className="font-bold text-primary text-2xl">200+</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden">
                    {lifeImpactImage && (
                        <Image
                            src={lifeImpactImage.imageUrl}
                            alt={lifeImpactImage.description}
                            data-ai-hint={lifeImpactImage.imageHint}
                            fill
                            className="object-cover"
                        />
                    )}
                </div>
            </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
                <p className="font-semibold uppercase tracking-wider text-primary">In Numbers</p>
                <h2 className="mt-2 font-headline text-3xl font-bold md:text-4xl">Community Impact</h2>
                <p className="mt-4 text-muted-foreground">
                    Emergency & Crisis Relief efforts provide immediate support during disasters or crises, helping communities rebound and rebuild. By addressing educational gaps and providing resources, we uplift entire communities, paving the way for future generations to thrive. Our comprehensive programs focus on enhancing not only the lives of individuals but also contributing to the social and economic development of communities as a whole, leading to positive change.
                </p>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <Card className="bg-foreground text-background p-8 text-center">
                    <p className="font-headline text-6xl font-bold">400+</p>
                    <p className="mt-2 text-muted">Community Engagement</p>
                </Card>
                 <Card className="bg-primary/5 p-8 text-center">
                    <p className="font-headline text-6xl font-bold">8</p>
                    <p className="mt-2 text-muted-foreground">Crisis Responses</p>
                </Card>
            </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4 text-center max-w-3xl">
            <blockquote className="font-headline text-3xl font-bold italic">
                "Investing in children today creates a brighter future for entire communities tomorrow."
            </blockquote>
            <div className="mt-8">
                <Progress value={25} className="h-1 w-24 mx-auto" />
            </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-accent/20">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="font-headline text-3xl font-bold md:text-4xl">Make an Impact</h2>
                    <p className="mt-4 text-muted-foreground">
                        We are dedicated to unlocking the potential of every child by creating a nurturing, safe, and empowering environment that fosters personal growth and community development. Your generous contributions directly impact the lives of children, providing them with essential resources and opportunities for a brighter future.
                    </p>
                </div>
                <div className="flex justify-center">
                    <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground border-2 p-10 text-lg">
                        <Link href="/donate">Donate to Gods Will for Eternity</Link>
                    </Button>
                </div>
            </div>
        </div>
      </section>

    </div>
  );
}
