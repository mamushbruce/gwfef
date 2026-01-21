import Image from "next/image";
import { notFound } from "next/navigation";
import { stories } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Calendar } from "lucide-react";

export default function StoryDetailPage({ params }: { params: { slug: string } }) {
  const story = stories.find(s => s.slug === params.slug);

  if (!story) {
    notFound();
  }

  const storyImage = PlaceHolderImages.find(p => p.id === story.imageId);

  return (
    <article>
      <header className="relative h-[60vh] min-h-[400px] w-full">
        {storyImage && (
          <Image
            src={storyImage.imageUrl}
            alt={story.title}
            data-ai-hint={storyImage.imageHint}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="container relative mx-auto flex h-full flex-col items-start justify-end px-4 pb-12">
          <h1 className="max-w-4xl font-headline text-4xl font-bold text-foreground md:text-6xl">
            {story.title}
          </h1>
          <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>Published on {new Date(story.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
        </div>
      </header>
      
      <div className="container mx-auto max-w-3xl px-4 py-16">
        <div 
          className="prose prose-lg max-w-none text-foreground prose-p:text-muted-foreground prose-headings:font-headline prose-headings:text-foreground" 
          dangerouslySetInnerHTML={{ __html: story.content }}
        />
      </div>
    </article>
  );
}
