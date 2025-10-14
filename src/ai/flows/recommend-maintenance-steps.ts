'use server';

/**
 * @fileOverview A flow for recommending maintenance steps based on fault severity and transformer criticality.
 *
 * - recommendMaintenanceSteps - A function that recommends maintenance steps.
 * - MaintenanceRecommendationInput - The input type for the recommendMaintenanceSteps function.
 * - MaintenanceRecommendationOutput - The return type for the recommendMaintenanceSteps function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const MaintenanceRecommendationInputSchema = z.object({
  faultSeverity: z
    .string()
    .describe(
      'The severity of the detected fault (e.g., low, medium, high, critical).'
    ),
  transformerCriticality: z
    .string()
    .describe(
      'The criticality of the transformer (e.g., low, medium, high) in the overall system.'
    ),
});

export type MaintenanceRecommendationInput = z.infer<
  typeof MaintenanceRecommendationInputSchema
>;

const MaintenanceRecommendationOutputSchema = z.object({
  recommendations: z
    .string()
    .describe(
      'A list of actionable maintenance steps tailored to the fault severity and transformer criticality.'
    ),
});

export type MaintenanceRecommendationOutput = z.infer<
  typeof MaintenanceRecommendationOutputSchema
>;

export async function recommendMaintenanceSteps(
  input: MaintenanceRecommendationInput
): Promise<MaintenanceRecommendationOutput> {
  return recommendMaintenanceStepsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'recommendMaintenanceStepsPrompt',
  input: {schema: MaintenanceRecommendationInputSchema},
  output: {schema: MaintenanceRecommendationOutputSchema},
  prompt: `You are an expert in transformer maintenance.

  Based on the fault severity and transformer criticality, provide a list of actionable maintenance steps.

  Fault Severity: {{{faultSeverity}}}
  Transformer Criticality: {{{transformerCriticality}}}

  Recommendations:`,
});

const recommendMaintenanceStepsFlow = ai.defineFlow(
  {
    name: 'recommendMaintenanceStepsFlow',
    inputSchema: MaintenanceRecommendationInputSchema,
    outputSchema: MaintenanceRecommendationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
