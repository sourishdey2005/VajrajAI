import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Bot, UploadCloud, Wrench } from "lucide-react";
import { Logo } from "@/components/logo";

export default function Home() {
  const features = [
    {
      icon: <UploadCloud className="h-10 w-10 text-primary" />,
      title: "Multi-Format Data Import",
      description: "Seamlessly import FRA data from Omicron, Megger, and Doble in CSV, XML, or proprietary formats.",
    },
    {
      icon: <Bot className="h-10 w-10 text-primary" />,
      title: "AI-Powered Fault Detection",
      description: "Our models detect anomalies and classify fault types with reasoning, pinpointing issues like axial displacement and core grounding.",
    },
    {
      icon: <Wrench className="h-10 w-10 text-primary" />,
      title: "Actionable Recommendations",
      description: "Receive clear, actionable maintenance steps based on fault severity and transformer criticality, optimizing your response.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <header className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Logo />
        <Button asChild>
          <Link href="/dashboard">Get Started</Link>
        </Button>
      </header>

      <main className="flex-grow">
        <section className="relative py-24 md:py-32 lg:py-40 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline tracking-tighter">
              Intelligent Transformer Diagnostics
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
              VajraAI leverages state-of-the-art AI to analyze Frequency Response Analysis (FRA) data, providing rapid fault detection and actionable maintenance insights.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/dashboard">
                  Go to Dashboard <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </section>

        <section id="features" className="py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Why VajraAI?</h2>
              <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">
                Empower your team with predictive maintenance and prevent critical failures.
              </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {features.map((feature, index) => (
                <Card key={index} className="flex flex-col items-center text-center p-6 transition-transform transform hover:-translate-y-2">
                  <CardHeader>
                    {feature.icon}
                    <CardTitle className="mt-4 font-headline">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-card border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} VajraAI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
