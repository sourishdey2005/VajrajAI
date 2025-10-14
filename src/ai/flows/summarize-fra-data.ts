'use server';

/**
 * @fileOverview Summarizes FRA (Frequency Response Analysis) data to provide a concise overview of transformer health.
 *
 * - summarizeFraData - A function that processes FRA data and returns a summary of key findings and potential issues.
 * - SummarizeFraDataInput - The input type for the summarizeFraData function.
 * - SummarizeFraDataOutput - The return type for the summarizeFraData function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeFraDataInputSchema = z.object({
  fraData: z.string().describe('The FRA data in CSV, XML, or other text format.'),
  transformerDetails: z
    .string()
    .optional()
    .describe('Optional details about the transformer, such as model and location.'),
});
export type SummarizeFraDataInput = z.infer<typeof SummarizeFraDataInputSchema>;

const SummarizeFraDataOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the key findings and potential issues identified in the FRA data.'),
  faultTypes: z.array(z.string()).describe('Potential fault types detected (e.g., axial displacement, radial deformation, core grounding).'),
  severity: z.string().describe('The severity of the identified issues (e.g., low, medium, high).'),
  recommendations: z.string().describe('Actionable maintenance steps based on fault severity and transformer criticality.'),
});
export type SummarizeFraDataOutput = z.infer<typeof SummarizeFraDataOutputSchema>;

export async function summarizeFraData(input: SummarizeFraDataInput): Promise<SummarizeFraDataOutput> {
  return summarizeFraDataFlow(input);
}

const summarizeFraDataPrompt = ai.definePrompt({
  name: 'summarizeFraDataPrompt',
  input: {schema: SummarizeFraDataInputSchema},
  output: {schema: SummarizeFraDataOutputSchema},
  prompt: `You are an expert in transformer Frequency Response Analysis (FRA).
  Analyze the provided FRA data and provide a concise summary of the key findings and potential issues.
  Also, classify potential fault types (e.g., axial displacement, radial deformation, core grounding) based on historical FRA signatures.
  Determine the severity of the issues (low, medium, high) and suggest actionable maintenance steps based on the severity and transformer criticality.

  FRA Data: {{{fraData}}}
  Transformer Details: {{{transformerDetails}}}

  Respond in the following format:
  Summary: [A concise summary of the key findings]
  Fault Types: [List of potential fault types]
  Severity: [Severity of the issues]
  Recommendations: [Actionable maintenance steps]`,
});

const summarizeFraDataFlow = ai.defineFlow(
  {
    name: 'summarizeFraDataFlow',
    inputSchema: SummarizeFraDataInputSchema,
    outputSchema: SummarizeFraDataOutputSchema,
  },
  async input => {
    const {output} = await summarizeFraDataPrompt(input);
    return output!;
  }
);
