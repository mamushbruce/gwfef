import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminSponsorsPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <h1 className="font-headline text-3xl font-bold mb-6">Manage Sponsors</h1>
      <Card>
        <CardHeader>
          <CardTitle>Sponsors</CardTitle>
          <CardDescription>A list of all sponsors.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Sponsor management table will be here.</p>
        </CardContent>
      </Card>
    </div>
  );
}
