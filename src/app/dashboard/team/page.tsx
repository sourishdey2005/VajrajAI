import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { teamMembers } from "@/lib/data";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function TeamPage() {

  return (
    <div className="animate-in fade-in slide-in-from-bottom-16 duration-1000">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-headline">Our Team</h1>
        <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">
          The minds behind the innovation, dedicated to advancing grid reliability.
        </p>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {teamMembers.map((member, index) => {
          return (
            <Card key={member.id} className="text-center transition-all hover:shadow-lg hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-24 duration-1000" style={{ animationDelay: `${index * 150}ms` }}>
              <CardHeader className="items-center">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <CardTitle className="font-headline text-xl">{member.name}</CardTitle>
                <p className="text-sm text-primary">{member.role}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </CardContent>
              <CardFooter className="justify-center gap-4">
                <Twitter className="h-5 w-5 text-muted-foreground hover:text-foreground cursor-pointer" />
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground cursor-pointer" />
                <Github className="h-5 w-5 text-muted-foreground hover:text-foreground cursor-pointer" />
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
