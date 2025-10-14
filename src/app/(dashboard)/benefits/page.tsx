import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

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

export default function BenefitsPage() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-headline">Benefits of VajraAI</h1>
        <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">
          Discover how our intelligent diagnostics platform drives reliability,
          efficiency, and cost savings.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit, index) => (
          <Card key={index} className="transition-all hover:shadow-lg animate-in fade-in slide-in-from-bottom-16 duration-1000" style={{ animationDelay: `${index * 100}ms` }}>
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
  );
}
