import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Bot, Cog, Cpu, LineChart, Palette, Shapes, Sparkles, Wind, Code, Table2, BrainCircuit, Sigma } from 'lucide-react';
import { SiTypescript } from '@icons-pack/react-simple-icons';

const technologies = [
    {
        icon: <Bot className="h-8 w-8 text-primary" />,
        title: 'Google AI & Genkit',
        description: 'Leveraging cutting-edge large language models from Google to provide deep analysis and generate human-readable insights from complex data.'
    },
    {
        icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 fill-primary"><path d="M12.332 24H5.337a1.332 1.332 0 0 1-1.332-1.332V8.337c0-.737.595-1.332 1.332-1.332h9.33c.737 0 1.332.595 1.332 1.332v3.665h-2.664V9.669H6.669v11.997h5.663v-2.664h2.664v4.002c0 .737-.595 1.33-1.332 1.33zM18.663 0h-9.33a1.332 1.332 0 0 0-1.332 1.332v3.665h2.664V2.664h7.998v12h-5.664v2.664h7.001a1.332 1.332 0 0 0 1.332-1.332V1.332A1.332 1.332 0 0 0 18.663 0z"/></svg>,
        title: 'Python',
        description: 'The core programming language for our data science and machine learning backend, enabling powerful and efficient analysis.'
    },
    {
        icon: <BrainCircuit className="h-8 w-8 text-primary" />,
        title: 'Scikit-learn',
        description: 'The essential machine learning library for building predictive models that classify faults and assess transformer health with high accuracy.'
    },
    {
        icon: <Table2 className="h-8 w-8 text-primary" />,
        title: 'Pandas',
        description: 'The cornerstone of our data manipulation and analysis workflow, allowing us to process and clean large FRA datasets efficiently.'
    },
    {
        icon: <Sigma className="h-8 w-8 text-primary" />,
        title: 'NumPy',
        description: 'Fundamental for scientific computing, providing support for large, multi-dimensional arrays and matrices of numerical data.'
    },
    {
        icon: <Cog className="h-8 w-8 text-primary" />,
        title: 'Next.js & React',
        description: 'The foundation of our application, providing a powerful and responsive user interface for visualizing data and insights.'
    },
    {
        icon: <Palette className="h-8 w-8 text-primary" />,
        title: 'Tailwind CSS',
        description: 'A utility-first CSS framework for rapidly building custom designs to present complex data in a clear, intuitive way.'
    },
     {
        icon: <LineChart className="h-8 w-8 text-primary" />,
        title: 'Recharts',
        description: 'Creating interactive and informative charts to visualize complex transformer frequency response data effectively.'
    },
]

export default function TechnologyPage() {
    return (
        <div className="animate-in fade-in slide-in-from-bottom-16 duration-1000">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold font-headline">Technology Stack</h1>
                <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">
                    A look at the powerful and modern technologies that bring VajraAI to life.
                </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {technologies.map((tech, index) => (
                    <Card key={index} className="transition-all hover:shadow-lg animate-in fade-in slide-in-from-bottom-24 duration-1000" style={{ animationDelay: `${index * 150}ms` }}>
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
