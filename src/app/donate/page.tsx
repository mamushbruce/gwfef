"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DollarSign, Heart, CreditCard, User } from "lucide-react";

const donationTiers = [
  { amount: 35, description: "Sponsor a child for a month" },
  { amount: 75, description: "Provide school supplies for a class" },
  { amount: 150, description: "Fund a community health workshop" },
];

export default function DonatePage() {
  const [amount, setAmount] = useState("35");
  const [customAmount, setCustomAmount] = useState("");

  const handleAmountChange = (value: string) => {
    setAmount(value);
    if (value !== 'custom') {
      setCustomAmount("");
    }
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCustomAmount(value);
    setAmount('custom');
  };
  
  const selectedAmount = amount === 'custom' ? customAmount : amount;

  return (
    <div className="bg-primary/5 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h1 className="font-headline text-4xl font-bold text-primary md:text-5xl">Your Gift Makes a Difference</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Every donation, no matter the size, contributes to a brighter future for children and their communities. Thank you for your generosity.
            </p>
          </div>
          
          <Card className="mt-12 shadow-xl">
            <Tabs defaultValue="monthly" className="w-full">
              <CardHeader className="p-0">
                <TabsList className="grid w-full grid-cols-2 m-2">
                  <TabsTrigger value="monthly">
                    <Heart className="mr-2 h-4 w-4"/> Monthly
                  </TabsTrigger>
                  <TabsTrigger value="one-time">
                    <DollarSign className="mr-2 h-4 w-4"/> One Time
                  </TabsTrigger>
                </TabsList>
                <Separator />
              </CardHeader>
              <TabsContent value="monthly">
                <DonationForm frequency="Monthly" selectedAmount={selectedAmount} onAmountChange={handleAmountChange} customAmount={customAmount} onCustomAmountChange={handleCustomAmountChange} />
              </TabsContent>
              <TabsContent value="one-time">
                <DonationForm frequency="One-Time" selectedAmount={selectedAmount} onAmountChange={handleAmountChange} customAmount={customAmount} onCustomAmountChange={handleCustomAmountChange} />
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </div>
    </div>
  );
}

interface DonationFormProps {
    frequency: string;
    selectedAmount: string;
    onAmountChange: (value: string) => void;
    customAmount: string;
    onCustomAmountChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function DonationForm({ frequency, selectedAmount, onAmountChange, customAmount, onCustomAmountChange }: DonationFormProps) {
  return (
    <form>
      <CardContent className="space-y-8 p-6">
        <div className="space-y-4">
          <Label className="font-headline text-lg">Choose Your {frequency} Donation Amount</Label>
          <RadioGroup value={selectedAmount === customAmount ? 'custom' : selectedAmount} onValueChange={onAmountChange} className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {donationTiers.map((tier) => (
              <Label key={tier.amount} htmlFor={`amount-${tier.amount}`} className="flex flex-col items-start rounded-md border p-4 transition-colors hover:bg-accent/50 has-[:checked]:border-primary has-[:checked]:bg-primary/5">
                <div className="flex w-full justify-between">
                  <span className="font-headline text-2xl font-bold">${tier.amount}</span>
                  <RadioGroupItem value={String(tier.amount)} id={`amount-${tier.amount}`} />
                </div>
                <p className="text-sm text-muted-foreground">{tier.description}</p>
              </Label>
            ))}
            <Label htmlFor="custom-amount" className="flex flex-col items-start rounded-md border p-4 transition-colors hover:bg-accent/50 has-[:checked]:border-primary has-[:checked]:bg-primary/5 md:col-span-2">
              <div className="flex w-full justify-between items-center">
                <span className="font-semibold text-foreground">Custom Amount</span>
                <RadioGroupItem value="custom" id="custom-amount-radio" />
              </div>
              <div className="relative mt-2 w-full">
                <DollarSign className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="number"
                  id="custom-amount-input"
                  placeholder="Enter amount"
                  className="pl-8"
                  value={customAmount}
                  onChange={onCustomAmountChange}
                />
              </div>
            </Label>
          </RadioGroup>
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="font-headline text-lg flex items-center"><User className="mr-2 h-5 w-5"/> Personal Information</h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="first-name">First Name</Label>
              <Input id="first-name" placeholder="John" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="last-name">Last Name</Label>
              <Input id="last-name" placeholder="Doe" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" placeholder="john.doe@example.com" />
          </div>
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="font-headline text-lg flex items-center"><CreditCard className="mr-2 h-5 w-5"/> Payment Details</h3>
          <p className="text-sm text-muted-foreground">Your transaction is secure.</p>
          <div className="rounded-md border bg-muted/50 p-4">
            <p className="text-center text-muted-foreground">[Payment processor placeholder (e.g., Stripe Elements or PayPal button)]</p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
          Donate ${selectedAmount} {frequency}
        </Button>
      </CardFooter>
    </form>
  );
}
