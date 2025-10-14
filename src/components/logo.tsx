import { cn } from "@/lib/utils";
import { Leaf } from "lucide-react";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Leaf className="h-6 w-6 text-primary" />
      <h1 className="text-xl font-bold font-headline text-primary">VajraAI</h1>
    </div>
  );
}
