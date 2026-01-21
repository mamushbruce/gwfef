import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function AdminContentPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <h1 className="font-headline text-3xl font-bold mb-6">Content Management</h1>
      
      <div className="grid gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Edit Homepage</CardTitle>
            <CardDescription>Update sections on the main landing page.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="hero-title">Hero Title</Label>
              <Input id="hero-title" defaultValue="Change a Life Today" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="hero-subtitle">Hero Subtitle</Label>
              <Textarea id="hero-subtitle" defaultValue="Your contribution provides hope and a future for children in need. Join us in making a lasting impact." />
            </div>
            <Button>Save Changes</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Manage Stories</CardTitle>
            <CardDescription>Create, edit, or delete success stories.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>A table of stories with CRUD actions will be here.</p>
            <Button className="mt-4">Add New Story</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
