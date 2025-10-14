
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
import { Separator } from "@/components/ui/separator";
import { Github, Chrome } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SiApple } from '@icons-pack/react-simple-icons';


export default function LoginPage() {
  return (
    <div className="w-full min-h-screen lg:grid lg:grid-cols-2">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[380px] gap-6">
          <div className="grid gap-4 text-center">
            <div className="flex justify-center">
                <Logo />
            </div>
            <h1 className="text-3xl font-bold font-headline">VajraAI Diagnostics</h1>
            <p className="text-balance text-muted-foreground">
              Login to access the future of transformer fault analysis
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="manager@vajra.ai"
                required
                defaultValue="manager@vajra.ai"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="role">Role</Label>
              <Select defaultValue="manager">
                <SelectTrigger>
                  <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="manager">Manager</SelectItem>
                  <SelectItem value="engineer">Engineer</SelectItem>
                  <SelectItem value="admin">Administrator</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot password?
                </Link>
              </div>
              <Input id="password" type="password" required defaultValue="-"/>
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </div>
          <div className="relative">
            <Separator />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-background text-muted-foreground text-sm">
                OR CONTINUE WITH
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
              <Button variant="outline">
                  <Chrome className="mr-2 h-4 w-4" />
                  Google
              </Button>
              <Button variant="outline">
                  <SiApple className="mr-2 h-4 w-4" />
                  Apple
              </Button>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="https://picsum.photos/seed/ocean-wave/1080/1920"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          data-ai-hint="ocean wave"
        />
      </div>
    </div>
  );
}
