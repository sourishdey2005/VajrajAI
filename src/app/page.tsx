import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Bot, UploadCloud, Wrench, Quote, Cog, Sparkles, Palette, Shapes, Wind, LineChart, Github, Linkedin, Twitter, BrainCircuit, Table2, Sigma } from "lucide-react";
import { Logo } from "@/components/logo";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { teamMembers } from "@/lib/data";

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

  const howItWorksSteps = [
    {
      step: 1,
      title: "Upload Your Data",
      description: "Log into the dashboard and upload your transformer's Frequency Response Analysis (FRA) data. Our platform accepts a wide range of formats for your convenience.",
    },
    {
      step: 2,
      title: "AI Analyzes",
      description: "VajraAI's sophisticated algorithms process the data, comparing it against thousands of historical signatures to detect and classify potential faults with high accuracy.",
    },
    {
      step: 3,
      title: "Receive Insights",
      description: "Get a detailed report with a clear summary, fault classification, severity level, and a list of prioritized, actionable recommendations for your maintenance team.",
    },
  ];

  const testimonials = [
    {
      quote: "VajraAI has revolutionized our predictive maintenance program. We caught a critical fault in a key transformer weeks before it would have failed, saving us from a costly outage.",
      name: "Rajesh Kumar",
      company: "Bharat Power Corp",
      avatar: "https://picsum.photos/seed/testimonial1/100/100"
    },
    {
      quote: "The platform is incredibly user-friendly. The insights are clear and actionable, allowing our team to work more efficiently and with greater confidence.",
      name: "Priya Sharma",
      company: "Adani Power",
      avatar: "https://picsum.photos/seed/testimonial2/100/100"
    },
    {
      quote: "The speed and accuracy of the analysis are unparalleled. What used to take days of manual review now takes minutes. It's a game-changer for grid reliability.",
      name: "Amit Verma",
      company: "Reliance Energy",
      avatar: "https://picsum.photos/seed/testimonial3/100/100"
    },
    {
      quote: "Integrating VajraAI has been a paradigm shift for our operations. The predictive capabilities have drastically reduced our downtime and improved grid stability for millions in the capital.",
      name: "Vikram Singh",
      company: "Tata Power Delhi Distribution",
      avatar: "https://picsum.photos/seed/testimonial4/100/100"
    },
    {
      quote: "As a major power distributor in Southern India, reliability is everything. VajraAI gives us the foresight we need to manage our assets proactively. It's an essential tool for the modern utility.",
      name: "Lakshmi Rao",
      company: "Southern Power Distribution Company of Telangana",
      avatar: "https://picsum.photos/seed/testimonial5/100/100"
    },
    {
      quote: "The detailed fault classifications and maintenance recommendations have saved us countless man-hours. We can now focus our resources where they are needed most.",
      name: "Karan Desai",
      company: "West Bengal State Electricity Distribution Company",
      avatar: "https://picsum.photos/seed/testimonial6/100/100"
    }
  ];

  const technologies = [
    {
        icon: <Bot className="h-8 w-8 text-primary" />,
        title: 'Google AI & Genkit',
        description: 'Leveraging cutting-edge large language models from Google to provide deep analysis of FRA data.'
    },
    {
        icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 fill-primary"><path d="M12.332 24H5.337a1.332 1.332 0 0 1-1.332-1.332V8.337c0-.737.595-1.332 1.332-1.332h9.33c.737 0 1.332.595 1.332 1.332v3.665h-2.664V9.669H6.669v11.997h5.663v-2.664h2.664v4.002c0 .737-.595 1.33-1.332 1.33zM18.663 0h-9.33a1.332 1.332 0 0 0-1.332 1.332v3.665h2.664V2.664h7.998v12h-5.664v2.664h7.001a1.332 1.332 0 0 0 1.332-1.332V1.332A1.332 1.332 0 0 0 18.663 0z"/></svg>,
        title: 'Python',
        description: 'The core language for our data science backend, enabling powerful and efficient analysis.'
    },
    {
        icon: <BrainCircuit className="h-8 w-8 text-primary" />,
        title: 'Scikit-learn',
        description: 'Essential for building predictive models that classify faults and assess transformer health.'
    },
    {
        icon: <Table2 className="h-8 w-8 text-primary" />,
        title: 'Pandas',
        description: 'The cornerstone of our data manipulation and analysis workflow for large datasets.'
    },
    {
        icon: <Sigma className="h-8 w-8 text-primary" />,
        title: 'NumPy',
        description: 'Fundamental for scientific computing and handling complex numerical operations.'
    },
    {
        icon: <Cog className="h-8 w-8 text-primary" />,
        title: 'Next.js & React',
        description: 'The foundation for a responsive user interface to visualize data and insights.'
    },
    {
        icon: <Palette className="h-8 w-8 text-primary" />,
        title: 'Tailwind CSS',
        description: 'A utility-first CSS framework for rapidly building a clear and intuitive user interface.'
    },
     {
        icon: <LineChart className="h-8 w-8 text-primary" />,
        title: 'Recharts',
        description: 'Creating interactive charts to visualize complex transformer frequency response data.'
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <header className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Features</Link>
            <Link href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">How It Works</Link>
            <Link href="#tech-stack" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Technology</Link>
            <Link href="#team" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Team</Link>
            <Link href="#testimonials" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Testimonials</Link>
            <Link href="/dashboard/benefits" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Benefits</Link>
        </nav>
        <Button asChild>
          <Link href="https://9000-firebase-studio-1760367559810.cluster-ulqnojp5endvgve6krhe7klaws.cloudworkstations.dev/login">Get Started</Link>
        </Button>
      </header>

      <main className="flex-grow">
        <section className="relative py-24 md:py-32 lg:py-40 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center animate-in fade-in slide-in-from-bottom-16 duration-1000">
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
              <Button size="lg" variant="outline" asChild>
                 <Link href="#features">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="features" className="py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-in fade-in slide-in-from-bottom-16 duration-1000">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Why VajraAI?</h2>
              <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">
                Empower your team with predictive maintenance and prevent critical failures.
              </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {features.map((feature, index) => (
                <Card key={index} className="flex flex-col items-center text-center p-6 transition-all transform hover:-translate-y-2 hover:shadow-xl animate-in fade-in slide-in-from-bottom-24 duration-1000" style={{ animationDelay: `${index * 200}ms` }}>
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

        <section id="how-it-works" className="py-20 md:py-28 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-in fade-in slide-in-from-bottom-16 duration-1000">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">How It Works</h2>
              <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">
                A simple, three-step process to transform your data into actionable intelligence.
              </p>
            </div>
            <div className="mt-16 grid gap-12 md:grid-cols-3">
              {howItWorksSteps.map((step, index) => (
                <div key={step.step} className="relative text-center animate-in fade-in slide-in-from-bottom-24 duration-1000" style={{ animationDelay: `${index * 200}ms` }}>
                  <div className="flex items-center justify-center">
                    <div className="flex items-center justify-center w-20 h-20 rounded-full bg-primary text-primary-foreground text-3xl font-bold font-headline">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="mt-6 text-xl font-bold font-headline">{step.title}</h3>
                  <p className="mt-2 text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section id="tech-stack" className="py-20 md:py-28">
          <div className="container mx-auto px-4 smpx-6 lg:px-8">
            <div className="text-center animate-in fade-in slide-in-from-bottom-16 duration-1000">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">Built with the Best</h2>
                <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">
                    Our platform is built on a foundation of modern, reliable, and scalable technologies.
                </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {technologies.map((tech, index) => (
                    <Card key={index} className="text-center p-6 transition-all transform hover:-translate-y-2 hover:shadow-xl animate-in fade-in slide-in-from-bottom-24 duration-1000" style={{ animationDelay: `${index * 150}ms` }}>
                        <CardHeader className="flex flex-col items-center">
                            {tech.icon}
                            <CardTitle className="mt-4 font-headline text-xl leading-snug">
                                {tech.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground text-sm">{tech.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
          </div>
        </section>

        <section id="team" className="py-20 md:py-28 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-in fade-in slide-in-from-bottom-16 duration-1000">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Meet the Team</h2>
              <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">
                The minds behind the innovation, dedicated to advancing grid reliability.
              </p>
            </div>
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {teamMembers.map((member, index) => {
                const image = `https://picsum.photos/seed/person${member.id}/400/400`;
                return (
                  <Card key={member.id} className="text-center transition-all hover:shadow-lg hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-24 duration-1000" style={{ animationDelay: `${index * 150}ms` }}>
                    <CardHeader className="items-center">
                      <Avatar className="h-24 w-24 mb-4">
                        <AvatarImage
                          src={image}
                          alt={member.name}
                        />
                        <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <CardTitle className="font-headline text-xl">{member.name}</CardTitle>
                      <p className="text-sm text-primary">{member.role}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">{member.bio}</p>
                    </CardContent>
                    <CardContent className="flex justify-center gap-4">
                      <Twitter className="h-5 w-5 text-muted-foreground hover:text-foreground cursor-pointer" />
                      <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground cursor-pointer" />
                      <Github className="h-5 w-5 text-muted-foreground hover:text-foreground cursor-pointer" />
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-in fade-in slide-in-from-bottom-16 duration-1000">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Trusted by Industry Leaders</h2>
              <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">
                See what our partners are saying about VajraAI.
              </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="flex flex-col justify-between animate-in fade-in slide-in-from-bottom-24 duration-1000" style={{ animationDelay: `${index * 150}ms` }}>
                  <CardHeader>
                    <Quote className="h-8 w-8 text-primary" />
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                  </CardContent>
                  <CardContent className="flex items-center gap-4">
                     <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
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
