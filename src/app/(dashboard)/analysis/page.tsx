import { AnalysisForm } from "./analysis-form";

export default function AnalysisPage() {
  return (
    <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-headline">FRA Data Analysis</h1>
        <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">
          Upload your FRA data to get an instant AI-powered diagnostic summary and actionable maintenance recommendations.
        </p>
      </div>
      <AnalysisForm />
    </div>
  );
}
