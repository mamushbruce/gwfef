import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { stories } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function StoriesPage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'story-graduation-day');
  if (!heroImage) return notFound();
  
  return (
    <div>
      <section className="relative h-[40vh] min-h-[300px] w-full">
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          data-ai-hint={heroImage.imageHint}
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-primary/60" />
        <div className="container relative mx-auto flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="font-headline text-4xl font-bold md:text-6xl">Stories of Hope</h1>
          <p className="mt-4 max-w-2xl text-lg text-primary-foreground/90">
            Read about the lives you are changing. These are the stories of transformation, resilience, and joy made possible by your support.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {stories.map((story, index) => {
              const storyImage = PlaceHolderImages.find(p => p.id === story.imageId);
              const isFeatured = index === 0;

              return (
                <Card key={story.id} className={`group flex transform flex-col overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${isFeatured ? 'lg:col-span-3 lg:flex-row' : 'lg:col-span-1'}`}>
                  <Link href={`/stories/${story.slug}`} className={`flex flex-col ${isFeatured ? 'lg:flex-row w-full' : ''}`}>
                    <div className={`relative ${isFeatured ? 'lg:w-1/2 h-64 lg:h-auto' : 'h-64'}`}>
                      {storyImage && (
                        <Image
                          src={storyImage.imageUrl}
                          alt={story.title}
                          data-ai-hint={storyImage.imageHint}
                          fill
                          className="object-cover"
                        />
                      )}
                    </div>
                    <div className={`flex flex-col ${isFeatured ? 'lg:w-1/2' : ''}`}>
                       <CardHeader className="flex-grow p-6">
                        <CardDescription>{story.date}</CardDescription>
                        <CardTitle className={`font-headline ${isFeatured ? 'text-4xl' : 'text-2xl'}`}>{story.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-6 pt-0">
                        <p className="text-muted-foreground">{story.excerpt}</p>
                      </CardContent>
                      <CardContent className="p-6 pt-0">
                        <Button variant="link" className="p-0">Read More <ArrowRight className="ml-2 h-4 w-4"/></Button>
                      </CardContent>
                    </div>
                  </Link>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
