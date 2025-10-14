'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Bot, FileText, Loader2, Sparkles } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';
import type { SummarizeFraDataOutput } from '@/ai/flows/summarize-fra-data';
import { summarizeFraDataAction } from '../../actions';

const formSchema = z.object({
  transformerDetails: z.string().min(2, {
    message: 'Transformer details must be at least 2 characters.',
  }),
  fraData: z.string().min(10, {
    message: 'FRA data must be at least 10 characters.',
  }),
});

const mockFraData = `Frequency(Hz),Magnitude(dB),Phase(deg)
20,-4.5,175.3
50,-4.6,170.1
100,-4.8,165.2
200,-5.2,155.8
500,-6.5,140.5
1000,-8.0,125.0
2000,-12.3,100.7
5000,-20.1,60.2
10000,-25.5,30.1
20000,-30.2,5.5
50000,-35.8,-25.4
100000,-40.1,-45.9
200000,-45.2,-65.3
500000,-50.7,-80.1
1000000,-55.9,-88.2
2000000,-60.1,-90.5
`;

export function AnalysisForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<SummarizeFraDataOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      transformerDetails: '',
      fraData: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setResult(null);
    try {
      const response = await summarizeFraDataAction(values);
      if (!response) {
        throw new Error('No response from AI');
      }
      setResult(response);
    } catch (error) {
      console.error('Error analyzing data:', error);
      toast({
        variant: 'destructive',
        title: 'Analysis Failed',
        description: 'An error occurred while analyzing the data. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  }

  const getSeverityBadge = (severity: string) => {
    switch (severity.toLowerCase()) {
      case 'high':
      case 'critical':
        return 'destructive';
      case 'medium':
        return 'secondary';
      default:
        return 'default';
    }
  };

  return (
    <>
      <Card>
        <CardContent className="p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="transformerDetails"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Transformer Details</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g., Model T-800, Substation Alpha"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Provide model, location, or any other identifier.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="fraData"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>FRA Data</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Paste your CSV, XML, or other text-based FRA data here."
                        className="h-48 font-mono"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex items-center gap-4">
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-4 w-4" />
                      Analyze Data
                    </>
                  )}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => form.setValue('fraData', mockFraData)}
                  disabled={isLoading}
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Load Mock Data
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
      
      {isLoading && (
        <div className="mt-8 text-center text-muted-foreground flex items-center justify-center gap-2">
            <Loader2 className="h-5 w-5 animate-spin" />
            <p>AI is analyzing the data. This may take a moment...</p>
        </div>
      )}

      {result && (
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="font-headline text-2xl flex items-center gap-2">
              <Bot className="h-6 w-6" />
              AI Analysis Result
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg">Summary</h3>
              <p className="text-muted-foreground mt-1">{result.summary}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg">Severity</h3>
                <Badge variant={getSeverityBadge(result.severity)} className="mt-2 text-base">
                  {result.severity}
                </Badge>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Potential Fault Types</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {result.faultTypes.map((fault) => (
                    <Badge key={fault} variant="outline">{fault}</Badge>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Recommendations</h3>
              <p className="text-muted-foreground whitespace-pre-line mt-1">{result.recommendations}</p>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
}
