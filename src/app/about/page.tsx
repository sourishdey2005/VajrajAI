

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ArrowRight,
  Bot,
  UploadCloud,
  Wrench,
  CheckCircle2,
  FileText,
  ArrowDown,
} from 'lucide-react';
import { Logo } from '@/components/logo';
import React from 'react';

const benefits = [
  {
    title: 'Increased Reliability',
    description:
      'Proactively identify and address potential transformer faults before they lead to catastrophic failures and costly outages, ensuring a stable power grid.',
  },
  {
    title: 'Optimized Maintenance',
    description:
      'Move from time-based to condition-based maintenance. Our AI-driven insights help you prioritize repairs, allocate resources effectively, and reduce unnecessary servicing.',
  },
  {
    title: 'Reduced Costs',
    description:
      'Minimize expenses related to unplanned downtime, emergency repairs, and premature asset replacement. Extend the lifespan of your transformers with targeted maintenance.',
  },
  {
    title: 'Enhanced Safety',
    description:
      'By identifying potential risks early, VajraAI helps mitigate safety hazards associated with transformer failure, protecting personnel and the public.',
  },
  {
    title: 'Data-Driven Decisions',
    description:
      'Leverage objective, AI-powered analysis to make informed decisions about asset management, capital investment, and long-term grid strategy.',
  },
  {
    title: 'Improved Efficiency',
    description:
      'Automate the time-consuming process of FRA data analysis. Our platform delivers comprehensive reports in minutes, freeing up your expert engineers for high-value tasks.',
  },
];

const features = [
  {
    icon: <UploadCloud className="h-10 w-10 text-primary" />,
    title: 'Multi-Format Data Import',
    description:
      'Seamlessly import FRA data from Omicron, Megger, and Doble in CSV, XML, or proprietary formats.',
  },
  {
    icon: <Bot className="h-10 w-10 text-primary" />,
    title: 'AI-Powered Fault Detection',
    description:
      'Our models detect anomalies and classify fault types with reasoning, pinpointing issues like axial displacement and core grounding.',
  },
  {
    icon: <Wrench className="h-10 w-10 text-primary" />,
    title: 'Actionable Recommendations',
    description:
      'Receive clear, actionable maintenance steps based on fault severity and transformer criticality, optimizing your response.',
  },
];

const howItWorksSteps = [
    {
      icon: <UploadCloud className="h-10 w-10 text-primary" />,
      step: 1,
      title: 'Upload Your Data',
      description:
        "Log into the dashboard and upload your transformer's Frequency Response Analysis (FRA) data. Our platform accepts a wide range of formats including CSV, XML, and proprietary files from Omicron, Megger, and Doble.",
    },
    {
      icon: <Bot className="h-10 w-10 text-primary" />,
      step: 2,
      title: 'AI Analyzes',
      description:
        "VajraAI's sophisticated algorithms process the data, comparing it against thousands of historical signatures and physics-based models to detect and classify potential faults with high accuracy.",
    },
    {
      icon: <FileText className="h-10 w-10 text-primary" />,
      step: 3,
      title: 'Receive Insights',
      description:
        'Get a detailed report with a clear summary, fault classification, severity level, and a list of prioritized, actionable recommendations for your maintenance team.',
    },
  ];


export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Logo />
        <Button asChild>
          <Link href="https://vajra-ai.netlify.app/login">Go to Dashboard</Link>
        </Button>
      </header>
      <main className="flex-grow">
        <section
          className="relative py-20 md:py-28 bg-card parallax"
          style={{ backgroundImage: `url(https://picsum.photos/seed/substation-dark/1920/1080)`}}
        >
          <div className="absolute inset-0 bg-black/60 z-0"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center animate-in fade-in slide-in-from-bottom-24 duration-1000 relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline tracking-tighter">
              Transforming Grid Reliability with AI
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
              VajraAI is an intelligent diagnostics platform that empowers power
              grid operators to proactively manage transformer health, prevent
              outages, and optimize maintenance strategies through advanced AI.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="https://vajra-ai.netlify.app/login">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="benefits" className="py-20 md:py-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-16 duration-1000">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">The VajraAI Advantage</h2>
                    <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">
                    Discover how our intelligent diagnostics platform drives reliability, efficiency, and cost savings.
                    </p>
                </div>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {benefits.map((benefit, index) => (
                    <Card key={index} className="transition-all hover:shadow-lg animate-in fade-in slide-in-from-bottom-24 duration-1000" style={{ animationDelay: `${index * 150}ms` }}>
                        <CardHeader className="flex flex-row items-start gap-4">
                        <CheckCircle2 className="h-8 w-8 text-primary mt-1" />
                        <div>
                            <CardTitle className="font-headline text-xl">
                            {benefit.title}
                            </CardTitle>
                        </div>
                        </CardHeader>
                        <CardContent>
                        <p className="text-muted-foreground">{benefit.description}</p>
                        </CardContent>
                    </Card>
                    ))}
                </div>
            </div>
        </section>

        <section
          id="working"
          className="py-20 md:py-28 bg-card parallax"
          style={{ backgroundImage: `url(https://picsum.photos/seed/abstract-grid/1920/1080)`}}
        >
          <div className="absolute inset-0 bg-background/80 z-0"></div>
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-16 duration-1000">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Working</h2>
              <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">
                A simple, three-step process to transform your data into actionable intelligence.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex flex-col gap-8 w-full max-w-2xl">
                {howItWorksSteps.map((step, index) => (
                  <React.Fragment key={step.step}>
                    <Card
                      className="w-full transition-all hover:shadow-lg animate-in fade-in slide-in-from-bottom-24 duration-1000"
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <CardHeader>
                        <div className="flex items-start gap-6">
                          {step.icon}
                          <div className="flex-1">
                            <p className="text-sm text-primary font-semibold">
                              STEP {step.step}
                            </p>
                            <CardTitle className="mt-1 font-headline text-2xl">
                              {step.title}
                            </CardTitle>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground ml-16">
                          {step.description}
                        </p>
                      </CardContent>
                    </Card>
                    {index < howItWorksSteps.length - 1 && (
                      <div className="flex justify-center">
                        <ArrowDown className="h-8 w-8 text-muted-foreground/50 animate-bounce" />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-in fade-in slide-in-from-bottom-24 duration-1000">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Core Features</h2>
              <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">
                Everything you need for intelligent asset management.
              </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {features.map((feature, index) => (
                <Card key={index} className="flex flex-col items-center text-center p-6 transition-all transform hover:-translate-y-2 hover:shadow-xl animate-in fade-in slide-in-from-bottom-32 duration-1000" style={{ animationDelay: `${index * 200}ms` }}>
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
          <p className="text-xs mt-1">Made by Team Code &amp;karma</p>
        </div>
      </footer>
    </div>
  );
}
