import { config } from 'dotenv';
config();

import '@/ai/flows/summarize-fra-data.ts';
import '@/ai/flows/recommend-maintenance-steps.ts';
import '@/ai/flows/detect-faults-and-classify.ts';