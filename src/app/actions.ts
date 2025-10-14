'use server';

import {
  summarizeFraData,
  type SummarizeFraDataInput,
} from '@/ai/flows/summarize-fra-data';
import { z } from 'zod';

const formSchema = z.object({
  transformerDetails: z.string(),
  fraData: z.string(),
});

export async function summarizeFraDataAction(input: z.infer<typeof formSchema>) {
  // Validate input
  const validatedInput = formSchema.safeParse(input);
  if (!validatedInput.success) {
    throw new Error('Invalid input');
  }

  try {
    const result = await summarizeFraData(validatedInput.data);
    return result;
  } catch (error) {
    console.error('Error in summarizeFraDataAction:', error);
    // Optionally re-throw or return a structured error
    throw new Error('Failed to get analysis from AI service.');
  }
}
