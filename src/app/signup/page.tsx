

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="relative min-h-screen w-full bg-background text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://picsum.photos/seed/cityscape/1920/1080)",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <header className="absolute top-0 left-0 right-0 z-20 container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center">
          <div className="flex-1 flex justify-start">
            <Link href="/">
              <Logo />
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-8 justify-center flex-1">
              <Link
                  href="/#features"
                  className="text-sm font-medium text-white hover:text-primary transition-colors"
              >
                  Features
              </Link>
              <Link
                  href="/#working"
                  className="text-sm font-medium text-white hover:text-primary transition-colors"
              >
                  Working
              </Link>
              <Link
                  href="/#benefits"
                  className="text-sm font-medium text-white hover:text-primary transition-colors"
              >
                  Benefits
              </Link>
              <Link
                  href="/#tech-stack"
                  className="text-sm font-medium text-white hover:text-primary transition-colors"
              >
                  Technology
              </Link>
              <Link
                  href="/#team"
                  className="text-sm font-medium text-white hover:text-primary transition-colors"
              >
                  Team
              </Link>
              <Link
                  href="/about"
                  className="text-sm font-medium text-white hover:text-primary transition-colors"
              >
                  About
              </Link>
          </nav>
          <div className="flex-1 flex justify-end">
              <Button asChild>
                  <Link href="https://vajra-ai.netlify.app/login">Get Started</Link>
              </Button>
          </div>
      </header>
      <main className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center py-12 md:py-24 pt-32 md:pt-40">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full max-w-6xl">
          <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-left-24 duration-1000">
            <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tighter">
              Create an Account
            </h1>
            <p className="max-w-md text-lg text-slate-200">
              Join VajraAI and start transforming your grid reliability today. Sign up to get access to our powerful diagnostics platform.
            </p>
          </div>
          <div className="animate-in fade-in slide-in-from-right-24 duration-1000">
            <Card className="w-full max-w-md bg-card/90 backdrop-blur-sm">
                <CardHeader>
                    <CardTitle className="text-center font-headline text-2xl">
                      Sign Up
                    </CardTitle>
                    <CardDescription className="text-center">
                        Enter your information to create an account.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                <div className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" placeholder="John Doe" required />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                        id="email"
                        type="email"
                        placeholder="name@example.com"
                        required
                        />
                    </div>
                     <div className="grid gap-2">
                        <Label htmlFor="role">Role</Label>
                        <Select>
                          <SelectTrigger id="role">
                            <SelectValue placeholder="Select your role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="manager">Manager</SelectItem>
                            <SelectItem value="engineer">Engineer</SelectItem>
                            <SelectItem value="user">User</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" required />
                    </div>
                    <Button type="submit" className="w-full" asChild>
                      <Link href="/dashboard">Create Account</Link>
                    </Button>
                </div>
                <div className="mt-4 text-center text-sm text-muted-foreground">
                    Already have an account?{' '}
                    <Link href="/login" className="text-primary hover:underline">
                    Sign In
                    </Link>
                </div>
                </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
