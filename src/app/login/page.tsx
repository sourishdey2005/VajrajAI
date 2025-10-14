
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
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

export default function LoginPage() {
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
                  <Link href="/login">Get Started</Link>
              </Button>
          </div>
      </header>
      <main className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center py-12 md:py-24 pt-32 md:pt-40">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full max-w-6xl">
          <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-left-24 duration-1000">
            <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tighter">
              Welcome Back
            </h1>
            <p className="max-w-md text-lg text-slate-200">
              Log in to access your dashboard, analyze new FRA data, and review AI-driven maintenance recommendations for your transformer fleet.
            </p>
            <Card className="bg-primary/10 border-primary/20 max-w-md">
              <CardHeader>
                <CardTitle className="font-headline">Demo Credentials</CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-2">
                <div>
                  <p className="font-semibold">Email: manager@vajra.ai</p>
                  <p>Password: admin</p>
                </div>
                <div>
                  <p className="font-semibold">Email: engineer@vajra.ai</p>
                  <p>Password: user</p>
                </div>
                 <div>
                  <p className="font-semibold">Email: user@vajra.ai</p>
                  <p>Password: password</p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="animate-in fade-in slide-in-from-right-24 duration-1000">
            <Tabs defaultValue="manager" className="w-full max-w-md">
              <Card className="bg-card/90 backdrop-blur-sm">
                <CardHeader>
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="manager">Manager</TabsTrigger>
                    <TabsTrigger value="engineer">Engineer</TabsTrigger>
                    <TabsTrigger value="user">User</TabsTrigger>
                  </TabsList>
                </CardHeader>
                <TabsContent value="manager">
                  <CardContent className="space-y-6">
                    <CardTitle className="text-center font-headline text-2xl">
                      Sign in as Manager
                    </CardTitle>
                    <div className="grid gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="email-manager">Email Address</Label>
                        <Input
                          id="email-manager"
                          type="email"
                          placeholder="manager@vajra.ai"
                          required
                          defaultValue="manager@vajra.ai"
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="password-manager">Password</Label>
                        <Input
                          id="password-manager"
                          type="password"
                          required
                          defaultValue="admin"
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="remember-manager" />
                          <Label htmlFor="remember-manager" className="text-sm font-normal">Remember Me</Label>
                        </div>
                        <Link
                          href="#"
                          className="text-sm text-primary hover:underline"
                        >
                          Lost your password?
                        </Link>
                      </div>
                      <Button type="submit" className="w-full">
                        Sign in
                      </Button>
                      <div className="text-center text-sm text-muted-foreground">
                        Don&apos;t have an account?{' '}
                        <Link href="/signup" className="text-primary hover:underline">
                          Sign Up
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </TabsContent>
                <TabsContent value="engineer">
                   <CardContent className="space-y-6">
                    <CardTitle className="text-center font-headline text-2xl">
                      Sign in as Engineer
                    </CardTitle>
                    <div className="grid gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="email-engineer">Email Address</Label>
                        <Input
                          id="email-engineer"
                          type="email"
                          placeholder="engineer@vajra.ai"
                          required
                           defaultValue="engineer@vajra.ai"
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="password-engineer">Password</Label>
                        <Input
                          id="password-engineer"
                          type="password"
                          required
                          defaultValue="user"
                        />
                      </div>
                       <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="remember-engineer" />
                          <Label htmlFor="remember-engineer" className="text-sm font-normal">Remember Me</Label>
                        </div>
                        <Link
                          href="#"
                          className="text-sm text-primary hover:underline"
                        >
                          Lost your password?
                        </Link>
                      </div>
                      <Button type="submit" className="w-full">
                        Sign in
                      </Button>
                       <div className="text-center text-sm text-muted-foreground">
                        Don&apos;t have an account?{' '}
                        <Link href="/signup" className="text-primary hover:underline">
                          Sign Up
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </TabsContent>
                 <TabsContent value="user">
                   <CardContent className="space-y-6">
                    <CardTitle className="text-center font-headline text-2xl">
                      Sign in as User
                    </CardTitle>
                    <div className="grid gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="email-user">Email Address</Label>
                        <Input
                          id="email-user"
                          type="email"
                          placeholder="user@vajra.ai"
                          required
                          defaultValue="user@vajra.ai"
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="password-user">Password</Label>
                        <Input
                          id="password-user"
                          type="password"
                          required
                          defaultValue="password"
                        />
                      </div>
                       <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="remember-user" />
                          <Label htmlFor="remember-user" className="text-sm font-normal">Remember Me</Label>
                        </div>
                        <Link
                          href="#"
                          className="text-sm text-primary hover:underline"
                        >
                          Lost your password?
                        </Link>
                      </div>
                      <Button type="submit" className="w-full">
                        Sign in
                      </Button>
                       <div className="text-center text-sm text-muted-foreground">
                        Don&apos;t have an account?{' '}
                        <Link href="/signup" className="text-primary hover:underline">
                          Sign Up
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </TabsContent>
              </Card>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
}
