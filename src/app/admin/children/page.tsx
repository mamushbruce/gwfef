import Image from "next/image";
import { MoreHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { children } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function AdminChildrenPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-headline text-3xl font-bold">Manage Children</h1>
        <Button>Add New Child</Button>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Child Profiles</CardTitle>
          <CardDescription>A list of all children in the program.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="hidden w-[100px] sm:table-cell">
                  <span className="sr-only">Image</span>
                </TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="hidden md:table-cell">Age</TableHead>
                <TableHead className="hidden md:table-cell">Location</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {children.map((child) => {
                const childImage = PlaceHolderImages.find(p => p.id === child.imageId);
                return (
                  <TableRow key={child.id}>
                    <TableCell className="hidden sm:table-cell">
                      {childImage && (
                        <Image
                          alt={child.name}
                          className="aspect-square rounded-md object-cover"
                          height="64"
                          src={childImage.imageUrl}
                          width="64"
                        />
                      )}
                    </TableCell>
                    <TableCell className="font-medium">{child.name}</TableCell>
                    <TableCell>
                      <Badge variant={child.sponsorshipStatus === 'Sponsored' ? 'secondary' : 'default'} className={child.sponsorshipStatus === 'Available' ? 'bg-accent text-accent-foreground' : ''}>
                        {child.sponsorshipStatus}
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">{child.age}</TableCell>
                    <TableCell className="hidden md:table-cell">{child.location}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button aria-haspopup="true" size="icon" variant="ghost">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Toggle menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
