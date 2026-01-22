"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarTrigger,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarInset,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HandHeart, LayoutDashboard, Users, BookOpen, HeartHandshake, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const adminNavLinks = [
    { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/admin/sponsors", label: "Sponsors", icon: Users },
    { href: "/admin/children", label: "Children", icon: HeartHandshake },
    { href: "/admin/content", label: "Content", icon: BookOpen },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <Sidebar>
          <SidebarContent>
            <SidebarHeader>
              <div className="flex items-center gap-2">
                 <Link href="/" className="flex items-center gap-2">
                    <HandHeart className="h-6 w-6 text-primary" />
                    <span className="font-headline text-lg font-bold">Gods Will for Eternity</span>
                </Link>
                <SidebarTrigger className="ml-auto" />
              </div>
            </SidebarHeader>
            <SidebarMenu>
              {adminNavLinks.map(link => (
                  <SidebarMenuItem key={link.href}>
                    <Link href={link.href}>
                      <SidebarMenuButton isActive={pathname === link.href}>
                        <link.icon className="h-4 w-4" />
                        <span>{link.label}</span>
                      </SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter>
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://avatar.vercel.sh/admin.png" alt="Admin" />
                <AvatarFallback>A</AvatarFallback>
              </Avatar>
              <div className="flex flex-col text-sm group-data-[collapsible=icon]:hidden">
                <span className="font-semibold text-foreground">Admin User</span>
                <span className="text-muted-foreground">admin@example.com</span>
              </div>
              <Link href="/" className="ml-auto group-data-[collapsible=icon]:hidden">
                <Button variant="ghost" size="icon">
                  <LogOut className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </SidebarFooter>
        </Sidebar>
        <SidebarInset className="max-w-full flex-1 overflow-y-auto bg-background">
          {children}
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
