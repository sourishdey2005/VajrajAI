
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from '@/components/ui/chart';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';
import {
  dashboardStats,
  recentAnalyses,
  faultsBySeverityData,
  faultsBySeverityConfig,
} from '@/lib/data';
import { Activity, ArrowUp, ShieldAlert, Wrench } from 'lucide-react';

export default function DashboardPage() {
  const getBadgeVariant = (status: string) => {
    switch (status.toLowerCase()) {
      case 'critical':
        return 'destructive';
      case 'high':
        return 'destructive';
      case 'medium':
        return 'secondary';
      case 'healthy':
        return 'default';
      default:
        return 'outline';
    }
  };

  const icons = [<Activity />, <ShieldAlert />, <Wrench />, <Activity />];

  return (
    <div className="grid gap-8 animate-in fade-in slide-in-from-bottom-16 duration-1000">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {dashboardStats.map((stat, index) => (
          <Card key={stat.title} className="transition-all hover:shadow-lg hover:-translate-y-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <div className="text-muted-foreground h-4 w-4">
                {icons[index] || <Activity />}
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground flex items-center">
                <span className="flex items-center text-primary mr-1">
                  <ArrowUp className="h-3 w-3" /> {stat.change}
                </span>
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-8">
        <Card className="transition-all hover:shadow-lg hover:-translate-y-1">
          <CardHeader>
            <CardTitle className="font-headline">Recent Analyses</CardTitle>
            <CardDescription>
              A log of the most recent transformer diagnostic reports.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Transformer ID</TableHead>
                  <TableHead>Fault Type</TableHead>
                  <TableHead className="text-right">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentAnalyses.map((analysis) => (
                  <TableRow key={analysis.id}>
                    <TableCell>
                      <div className="font-medium">{analysis.transformerId}</div>
                      <div className="text-xs text-muted-foreground">
                        {analysis.date}
                      </div>
                    </TableCell>
                    <TableCell>{analysis.faultType}</TableCell>
                    <TableCell className="text-right">
                      <Badge variant={getBadgeVariant(analysis.status)}>
                        {analysis.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="transition-all hover:shadow-lg hover:-translate-y-1">
          <CardHeader>
            <CardTitle className="font-headline">Faults by Severity</CardTitle>
            <CardDescription>
              Distribution of all detected faults by severity level.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={faultsBySeverityConfig} className="h-[250px] w-full">
              <BarChart
                accessibilityLayer
                data={faultsBySeverityData}
                margin={{ top: 20 }}
              >
                <XAxis
                  dataKey="name"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <YAxis tickLine={false} axisLine={false} tickMargin={8} />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="dot" />}
                />
                 <ChartLegend content={<ChartLegendContent />} />
                <Bar dataKey="value" radius={4} fill="var(--color-value)" />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
