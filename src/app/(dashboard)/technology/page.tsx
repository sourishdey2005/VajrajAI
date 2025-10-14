import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Bot, Cog, Cpu, LineChart, Palette, Shapes, Sparkles, Wind } from 'lucide-react';
import { SiTypescript } from '@icons-pack/react-simple-icons';

const technologies = [
    {
        icon: <Cog className="h-8 w-8 text-primary" />,
        title: 'Next.js',
        description: 'The foundation of our application, providing a powerful React framework with server-side rendering and optimized performance.'
    },
    {
        icon: <Sparkles className="h-8 w-8 text-primary" />,
        title: 'React',
        description: 'Building a dynamic and responsive user interface with the most popular JavaScript library for building UIs.'
    },
    {
        icon: <Palette className="h-8 w-8 text-primary" />,
        title: 'Tailwind CSS',
        description: 'A utility-first CSS framework for rapidly building custom designs without leaving your HTML.'
    },
    {
        icon: <Shapes className="h-8 w-8 text-primary" />,
        title: 'ShadCN UI',
        description: 'A collection of beautifully designed and accessible components that form the backbone of our user interface.'
    },
    {
        icon: <Bot className="h-8 w-8 text-primary" />,
        title: 'Genkit & Google AI',
        description: 'Powering our intelligent features with state-of-the-art generative AI models from Google.'
    },
    {
        icon: <Wind className="h-8 w-8 text-primary" />,
        title: 'Lucide React',
        description: 'Providing a vast library of clean and consistent icons to enhance usability and visual appeal.'
    },
    {
        icon: <LineChart className="h-8 w-8 text-primary" />,
        title: 'Recharts',
        description: 'Creating interactive and informative charts to visualize complex transformer data effectively.'
    },
     {
        icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 fill-primary"><path d="M1.5 0 h21 l-1.915 21.512 h-17.17 L1.5 0 Z M4.085 3 h15.83 l-1.6 18 h-12.63 L4.085 3 Z M12 14.125 h5.42 l-.352 3.96 h-5.068 v-3.96 Z M12 8.01 h5.532 l-.352 3.99 H12 V8.01 Z m-1.012 1.488 v2.484 H6.42l-.24-2.484 H10.988 Z m.002 4.024 V18 H6.872 l-.24-2.464 H10.99 Z"/></svg>,
        title: 'TypeScript',
        description: 'Ensuring code quality and developer productivity with static typing for JavaScript.'
    },
]

export default function TechnologyPage() {
    return (
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold font-headline">Technology Stack</h1>
                <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">
                    A look at the powerful and modern technologies that bring VajraAI to life.
                </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {technologies.map((tech, index) => (
                    <Card key={index} className="transition-all hover:shadow-lg animate-in fade-in slide-in-from-bottom-16 duration-1000" style={{ animationDelay: `${index * 100}ms` }}>
                        <CardHeader className="flex flex-row items-start gap-4">
                            {tech.icon}
                            <CardTitle className="font-headline text-xl leading-snug">
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
    );
}