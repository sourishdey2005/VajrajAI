import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ArrowDown, Bot, UploadCloud, FileText } from 'lucide-react';

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

export default function WorkingPage() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-16 duration-1000">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-headline">Working</h1>
        <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">
          A simple, three-step process to transform your data into actionable
          intelligence.
        </p>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-8 w-full max-w-2xl">
          {howItWorksSteps.map((step, index) => (
            <>
              <Card
                key={step.step}
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
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
