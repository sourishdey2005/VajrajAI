
'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import {
  ArrowRight,
  Bot,
  UploadCloud,
  Wrench,
  Quote,
  Layers,
  BrainCircuit,
  Table2,
  Lock,
  Sparkles,
  Shapes,
  Github,
  Linkedin,
  Twitter,
  CheckCircle2,
} from 'lucide-react';
import { Logo } from '@/components/logo';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { teamMembers, faultsBySeverityData, faultsBySeverityConfig } from '@/lib/data';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from '@/components/ui/chart';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

export default function Home() {
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
      step: 1,
      title: 'Upload Your Data',
      description:
        "Log into the dashboard and upload your transformer's Frequency Response Analysis (FRA) data. Our platform accepts a wide range of formats for your convenience.",
    },
    {
      step: 2,
      title: 'AI Analyzes',
      description:
        "VajraAI's sophisticated algorithms process the data, comparing it against thousands of historical signatures to detect and classify potential faults with high accuracy.",
    },
    {
      step: 3,
      title: 'Receive Insights',
      description:
        'Get a detailed report with a clear summary, fault classification, severity level, and a list of prioritized, actionable recommendations for your maintenance team.',
    },
  ];

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

  const testimonials = [
    {
      quote:
        'VajraAI has revolutionized our predictive maintenance program. We caught a critical fault in a key transformer weeks before it would have failed, saving us from a costly outage.',
      name: 'Rajesh Kumar',
      company: 'Bharat Power Corp',
      avatar: 'https://picsum.photos/seed/testimonial1/100/100',
    },
    {
      quote:
        'The platform is incredibly user-friendly. The insights are clear and actionable, allowing our team to work more efficiently and with greater confidence.',
      name: 'Priya Sharma',
      company: 'Adani Power',
      avatar: 'https://picsum.photos/seed/testimonial2/100/100',
    },
    {
      quote:
        "The speed and accuracy of the analysis are unparalleled. What used to take days of manual review now takes minutes. It's a game-changer for grid reliability.",
      name: 'Amit Verma',
      company: 'Reliance Energy',
      avatar: 'https://picsum.photos/seed/testimonial3/100/100',
    },
    {
      quote:
        'Integrating VajraAI has been a paradigm shift for our operations. The predictive capabilities have drastically reduced our downtime and improved grid stability for millions in the capital.',
      name: 'Vikram Singh',
      company: 'Tata Power Delhi Distribution',
      avatar: 'https://picsum.photos/seed/testimonial4/100/100',
    },
    {
      quote:
        'As a major power distributor in Southern India, reliability is everything. VajraAI gives us the foresight we need to manage our assets proactively. It\'s an essential tool for the modern utility.',
      name: 'Lakshmi Rao',
      company: 'Southern Power Distribution Company of Telangana',
      avatar: 'https://picsum.photos/seed/testimonial5/100/100',
    },
    {
      quote:
        'The detailed fault classifications and maintenance recommendations have saved us countless man-hours. We can now focus our resources where they are needed most.',
      name: 'Karan Desai',
      company: 'West Bengal State Electricity Distribution Company',
      avatar: 'https://picsum.photos/seed/testimonial6/100/100',
    },
  ];

  const technologies = [
    {
      icon: <Bot className="h-8 w-8 text-primary" />,
      title: 'Google AI & Genkit',
      description:
        'Leveraging cutting-edge large language models for deep analysis and human-readable insights.',
    },
    {
      icon: (
        <svg
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7 fill-primary"
        >
          <path d="M12.332 24H5.337a1.332 1.332 0 0 1-1.332-1.332V8.337c0-.737.595-1.332 1.332-1.332h9.33c.737 0 1.332.595 1.332 1.332v3.665h-2.664V9.669H6.669v11.997h5.663v-2.664h2.664v4.002c0 .737-.595 1.33-1.332 1.33zM18.663 0h-9.33a1.332 1.332 0 0 0-1.332 1.332v3.665h2.664V2.664h7.998v12h-5.664v2.664h7.001a1.332 1.332 0 0 0 1.332-1.332V1.332A1.332 1.332 0 0 0 18.663 0z" />
        </svg>
      ),
      title: 'Python',
      description:
        'The core language for our data science backend, enabling powerful and efficient analysis.',
    },
    {
      icon: <BrainCircuit className="h-8 w-8 text-primary" />,
      title: 'Scikit-learn',
      description:
        'Building predictive models that classify faults and assess transformer health with high accuracy.',
    },
    {
      icon: <Shapes className="h-8 w-8 text-primary" />,
      title: 'TensorFlow & PyTorch',
      description:
        'Utilizing deep learning frameworks for more nuanced fault detection and predictive analytics.',
    },
    {
      icon: <Sparkles className="h-8 w-8 text-primary" />,
      title: 'Explainable AI (XAI)',
      description:
        "Providing transparency into our models' decisions, building trust in the AI-driven insights.",
    },
    {
      icon: <Lock className="h-8 w-8 text-primary" />,
      title: 'Hyperledger Fabric',
      description:
        'Employing blockchain for an immutable, transparent, and auditable log of all data analyses.',
    },
    {
      icon: <Table2 className="h-8 w-8 text-primary" />,
      title: 'Pandas & NumPy',
      description:
        'The cornerstone of our data manipulation and scientific computing for large datasets.',
    },
    {
      icon: <Layers className="h-8 w-8 text-primary" />,
      title: 'Docker & Kubernetes',
      description:
        'Containerizing our application for scalable, resilient, and consistent deployment.',
    },
  ];

  const landingHeroImage = PlaceHolderImages.find(
    (img) => img.id === 'landing-hero'
  );
  const transformerImage = PlaceHolderImages.find(
    (img) => img.id === 'transformer-illustration'
  );
  
  const getImage = (imageId: string) => {
    return PlaceHolderImages.find((img) => img.id === imageId);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section
          className="relative min-h-[50vh] md:min-h-[60vh] lg:min-h-[70vh] flex items-center justify-center text-center py-24 md:py-32 lg:py-40 bg-card overflow-hidden"
        >
            <header className="absolute top-0 left-0 right-0 z-20 container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                <Logo />
                <nav className="hidden md:flex items-center gap-6">
                <Link
                    href="#features"
                    className="text-sm font-medium text-white hover:text-foreground transition-colors"
                >
                    Features
                </Link>
                <Link
                    href="#how-it-works"
                    className="text-sm font-medium text-white hover:text-foreground transition-colors"
                >
                    How It Works
                </Link>
                 <Link
                    href="#benefits"
                    className="text-sm font-medium text-white hover:text-foreground transition-colors"
                >
                    Benefits
                </Link>
                <Link
                    href="#tech-stack"
                    className="text-sm font-medium text-white hover:text-foreground transition-colors"
                >
                    Technology
                </Link>
                <Link
                    href="#team"
                    className="text-sm font-medium text-white hover:text-foreground transition-colors"
                >
                    Team
                </Link>
                <Link
                    href="#testimonials"
                    className="text-sm font-medium text-white hover:text-foreground transition-colors"
                >
                    Testimonials
                </Link>
                <Link
                    href="/learn-more"
                    className="text-sm font-medium text-white hover:text-foreground transition-colors"
                >
                    Learn More
                </Link>
                </nav>
                <Button asChild>
                <Link href="https://vajraj-ai-diagonostics.vercel.app/login">
                    Get Started
                </Link>
                </Button>
            </header>
          <div className="absolute inset-0 bg-black/60 z-0"></div>
          <Image
            src="https://www.gazabhindi.com/wp-content/uploads/2017/07/bijli-girna.jpg"
            alt="Hero background"
            fill
            className="object-cover -z-10"
            data-ai-hint="lightning strike"
          />
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 animate-in fade-in slide-in-from-bottom-24 duration-1000">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline tracking-tighter text-white">
              Intelligent Transformer Diagnostics
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-slate-200">
              VajraAI leverages state-of-the-art AI to analyze Frequency
              Response Analysis (FRA) data, providing rapid fault detection and
              actionable maintenance insights.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="https://vajraj-ai-diagonostics.vercel.app/login">
                  Go to Dashboard <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/learn-more">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="features" className="py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-in fade-in slide-in-from-bottom-16 duration-1000">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">
                Why VajraAI?
              </h2>
              <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">
                Empower your team with predictive maintenance and prevent
                critical failures.
              </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="flex flex-col items-center text-center p-6 transition-all transform hover:-translate-y-2 hover:shadow-xl animate-in fade-in slide-in-from-bottom-24 duration-1000"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardHeader>
                    {feature.icon}
                    <CardTitle className="mt-4 font-headline">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        <section id="benefits" className="py-20 md:py-28 bg-card">
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
          id="visualize"
          className="relative py-20 md:py-28 bg-card parallax"
          style={{ backgroundImage: `url(https://picsum.photos/seed/electricity-arc/1920/1080)`}}
        >
           <div className="absolute inset-0 bg-background/80 z-0"></div>
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-in fade-in slide-in-from-left-24 duration-1000">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">
                  Visualizing Insights
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Our platform transforms raw data into intuitive visualizations, making it easy to understand transformer health at a glance. Track fault trends, compare assets, and make data-driven decisions with confidence.
                </p>
                {transformerImage && (
                  <div className="mt-8 rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src={transformerImage.imageUrl}
                    alt={transformerImage.description}
                    width={1200}
                    height={800}
                    className="object-cover"
                    data-ai-hint={transformerImage.imageHint}
                  />
                  </div>
                )}
              </div>
              <div className="animate-in fade-in slide-in-from-right-24 duration-1000">
                <Card className="lg:col-span-3">
                  <CardHeader>
                    <CardTitle className="font-headline">Faults by Severity</CardTitle>
                    <CardContent className="text-muted-foreground p-0 pt-2">
                      Distribution of all detected faults by severity level.
                    </CardContent>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer
                      config={faultsBySeverityConfig}
                      className="h-[300px] w-full"
                    >
                      <BarChart
                        accessibilityLayer
                        data={faultsBySeverityData}
                        margin={{ top: 20 }}
                      >
                        <XAxis
                          dataKey="name"
                          tickLine={false}
                          axisLine={false}
                          tickMargin={8}
                        />
                        <YAxis tickLine={false} axisLine={false} tickMargin={8} />
                        <ChartTooltip
                          cursor={false}
                          content={<ChartTooltipContent indicator="dot" />}
                        />
                        <ChartLegend content={<ChartLegendContent />} />
                        <Bar dataKey="value" radius={4} />
                      </BarChart>
                    </ChartContainer>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-in fade-in slide-in-from-bottom-16 duration-1000">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">
                How It Works
              </h2>
              <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">
                A simple, three-step process to transform your data into
                actionable intelligence.
              </p>
            </div>
            <div className="mt-16 grid gap-12 md:grid-cols-3">
              {howItWorksSteps.map((step, index) => (
                <div
                  key={step.step}
                  className="relative text-center animate-in fade-in slide-in-from-bottom-24 duration-1000"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-center justify-center">
                    <div className="flex items-center justify-center w-20 h-20 rounded-full bg-primary text-primary-foreground text-3xl font-bold font-headline">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="mt-6 text-xl font-bold font-headline">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="tech-stack"
          className="relative py-20 md:py-28 bg-card parallax"
          style={{ backgroundImage: `url(https://picsum.photos/seed/tech-bg/1920/1080)`}}
        >
          <div className="absolute inset-0 bg-background/80 z-0"></div>
          <div className="container relative z-10 mx-auto px-4 smpx-6 lg:px-8">
            <div className="text-center animate-in fade-in slide-in-from-bottom-16 duration-1000">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">
                Built with the Best
              </h2>
              <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">
                Our platform is built on a foundation of modern, reliable, and
                scalable technologies.
              </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {technologies.map((tech, index) => (
                <Card
                  key={index}
                  className="text-center p-6 transition-all transform hover:-translate-y-2 hover:shadow-xl animate-in fade-in slide-in-from-bottom-24 duration-1000"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardHeader className="flex flex-col items-center">
                    {tech.icon}
                    <CardTitle className="mt-4 font-headline text-xl leading-snug">
                      {tech.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      {tech.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="team" className="py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-in fade-in slide-in-from-bottom-16 duration-1000">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">
                Meet the Team
              </h2>
              <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">
                The minds behind the innovation, dedicated to advancing grid
                reliability.
              </p>
            </div>
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {teamMembers.map((member, index) => {
                return (
                  <Card
                    key={member.id}
                    className="text-center transition-all hover:shadow-lg hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-24 duration-1000"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <CardHeader className="items-center">
                      <Avatar className="h-24 w-24 mb-4">
                        <AvatarFallback>
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <CardTitle className="font-headline text-xl">
                        {member.name}
                      </CardTitle>
                      <p className="text-sm text-primary">{member.role}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">
                        {member.bio}
                      </p>
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
        </section>

        <section
          id="testimonials"
          className="relative py-20 md:py-28 bg-card parallax"
          style={{ backgroundImage: `url(https://picsum.photos/seed/city-power/1920/1080)`}}
        >
          <div className="absolute inset-0 bg-background/80 z-0"></div>
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-in fade-in slide-in-from-bottom-16 duration-1000">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">
                Trusted by Industry Leaders
              </h2>
              <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">
                See what our partners are saying about VajraAI.
              </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="flex flex-col justify-between animate-in fade-in slide-in-from-bottom-24 duration-1000"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardHeader>
                    <Quote className="h-8 w-8 text-primary" />
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground italic">
                      "{testimonial.quote}"
                    </p>
                  </CardContent>
                  <CardContent className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage
                        src={testimonial.avatar}
                        alt={testimonial.name}
                      />
                      <AvatarFallback>
                        {testimonial.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.company}
                      </p>
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
          <p className="text-xs mt-1">Made by Team Code &amp;karma</p>
        </div>
      </footer>
    </div>
  );
}

    

    


