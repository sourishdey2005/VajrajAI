'use server';
/**
 * @fileOverview Detects faults from FRA data and classifies them into specific types.
 *
 * - detectFaultsAndClassify - A function that handles the fault detection and classification process.
 * - DetectFaultsAndClassifyInput - The input type for the detectFaultsAndClassify function.
 * - DetectFaultsAndClassifyOutput - The return type for the detectFaultsAndClassify function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DetectFaultsAndClassifyInputSchema = z.object({
  fraData: z.string().describe('FRA data in CSV, XML, or binary format.'),
});
export type DetectFaultsAndClassifyInput = z.infer<typeof DetectFaultsAndClassifyInputSchema>;

const DetectFaultsAndClassifyOutputSchema = z.object({
  faultDetected: z.boolean().describe('Whether a fault is detected in the FRA data.'),
  faultType: z.string().describe('The type of fault detected (e.g., axial displacement, radial deformation, core grounding).'),
  severity: z.string().describe('The severity of the fault (e.g., low, medium, high).'),
  confidenceScore: z.number().describe('The confidence score of the fault detection and classification.'),
  reasoning: z.string().describe('The reasoning behind the fault detection and classification.'),
});
export type DetectFaultsAndClassifyOutput = z.infer<typeof DetectFaultsAndClassifyOutputSchema>;

export async function detectFaultsAndClassify(input: DetectFaultsAndClassifyInput): Promise<DetectFaultsAndClassifyOutput> {
  return detectFaultsAndClassifyFlow(input);
}

const prompt = ai.definePrompt({
  name: 'detectFaultsAndClassifyPrompt',
  input: {schema: DetectFaultsAndClassifyInputSchema},
  output: {schema: DetectFaultsAndClassifyOutputSchema},
  prompt: `You are an expert in Frequency Response Analysis (FRA) for transformers. You will analyze the provided FRA data to detect potential faults and classify them into specific types. You will also determine the severity of the fault and provide a confidence score for your analysis.

Analyze the following FRA data:

{{{fraData}}}

Based on your analysis, determine if a fault is detected, the type of fault, its severity, a confidence score, and your reasoning.

Output:
faultDetected: Whether a fault is detected in the FRA data.
faultType: The type of fault detected (e.g., axial displacement, radial deformation, core grounding).
severity: The severity of the fault (e.g., low, medium, high).
confidenceScore: The confidence score of the fault detection and classification (0-1).
reasoning: The reasoning behind the fault detection and classification.
`,
});

const detectFaultsAndClassifyFlow = ai.defineFlow(
  {
    name: 'detectFaultsAndClassifyFlow',
    inputSchema: DetectFaultsAndClassifyInputSchema,
    outputSchema: DetectFaultsAndClassifyOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
