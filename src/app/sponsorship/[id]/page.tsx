import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { children } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Heart } from "lucide-react";

export default function ChildDetailPage({ params }: { params: { id: string } }) {
  const child = children.find(c => c.id.toString() === params.id);

  if (!child) {
    notFound();
  }

  return (
    <div className="bg-primary/5">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
              <div className="md:col-span-2">
                <Card className="overflow-hidden shadow-lg">
                  <Image
                    src={child.imageUrl}
                    alt={child.name}
                    width={600}
                    height={800}
                    className="aspect-[3/4] w-full object-cover"
                  />
                </Card>
              </div>
              <div className="md:col-span-3">
                <p className="text-sm font-semibold uppercase tracking-widest text-primary">Sponsor a Child</p>
                <h1 className="mt-2 font-headline text-4xl font-bold md:text-6xl">{child.name}</h1>
                <p className="mt-4 text-lg text-muted-foreground">
                  {child.age} years old • {child.gender} • From {child.location}
                </p>
                <Separator className="my-6" />
                <h2 className="font-headline text-2xl font-semibold">About {child.name}</h2>
                <p className="mt-4 text-muted-foreground">{child.bio}</p>
                <p className="mt-4 text-muted-foreground">
                  {child.name} dreams of becoming <span className="font-semibold text-foreground">{child.dream}</span> one day.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1">
            <Card className="sticky top-24 shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Sponsor {child.name}</CardTitle>
                <CardDescription>
                  Your monthly gift of $35 makes a world of difference.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Education & school supplies</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Nutritious meals</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Healthcare & check-ups</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Mentorship & support</span>
                  </li>
                </ul>
              </CardContent>
              <CardContent>
                {child.sponsorshipStatus === 'Available' ? (
                  <Button asChild size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link href="/donate">
                      <Heart className="mr-2 h-4 w-4" /> Sponsor {child.name}
                    </Link>
                  </Button>
                ) : (
                  <Button size="lg" className="w-full" disabled>
                    <Heart className="mr-2 h-4 w-4" /> Already Sponsored
                  </Button>
                )}
                <p className="mt-4 text-center text-xs text-muted-foreground">
                  You can build a relationship through letters and photos.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
