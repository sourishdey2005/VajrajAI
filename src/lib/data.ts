import {
  type BarChart,
  type LineChart,
  type AreaChart,
  type PieChart,
} from 'lucide-react';

export const teamMembers = [
  {
    id: 1,
    name: 'Dr. Aris Thorne',
    role: 'Chief AI Scientist',
    bio: 'Lead architect of our core AI engine, with a Ph.D. in Signal Processing and Machine Learning.',
    imageId: 'team-member-1',
  },
  {
    id: 2,
    name: 'Jian Li',
    role: 'Lead Field Engineer',
    bio: 'Bridges the gap between data science and real-world transformer diagnostics with 15 years of experience.',
    imageId: 'team-member-2',
  },
  {
    id: 3,
    name: 'Maya Singh',
    role: 'Head of Product',
    bio: 'Drives the product vision, ensuring our solutions are intuitive, powerful, and meet the needs of asset managers.',
    imageId: 'team-member-3',
  },
  {
    id: 4,
    name: 'David Chen',
    role: 'Senior Software Engineer',
    bio: 'Expert in cloud infrastructure and data visualization, ensuring our platform is scalable and responsive.',
    imageId: 'team-member-4',
  },
];

export const dashboardStats = [
  {
    title: 'Transformers Analyzed',
    value: '1,204',
    change: '+12.5%',
    description: 'since last month',
  },
  {
    title: 'Critical Faults Detected',
    value: '38',
    change: '-5.2%',
    description: 'since last month',
  },
  {
    title: 'Overall System Health',
    value: '96.8%',
    change: '+1.1%',
    description: 'system-wide operational uptime',
  },
  {
    title: 'Pending Reviews',
    value: '12',
    change: '+3',
    description: 'analyses awaiting confirmation',
  },
];

export const faultsBySeverityData = [
  { name: 'Low', value: 150, fill: 'var(--color-chart-2)' },
  { name: 'Medium', value: 75, fill: 'var(--color-chart-3)' },
  { name: 'High', value: 45, fill: 'var(--color-chart-4)' },
  { name: 'Critical', value: 38, fill: 'var(--color-chart-5)' },
];
export const faultsBySeverityConfig = {
  value: {
    label: 'Faults',
  },
  Low: {
    label: 'Low',
    color: 'hsl(var(--chart-2))',
  },
  Medium: {
    label: 'Medium',
    color: 'hsl(var(--chart-3))',
  },
  High: {
    label: 'High',
    color: 'hsl(var(--chart-4))',
  },
  Critical: {
    label: 'Critical',
    color: 'hsl(var(--chart-5))',
  },
};

export const recentAnalyses = [
  {
    id: 'ANL-00876',
    transformerId: 'TX-SUB-A51-01',
    date: '2023-10-26',
    status: 'Critical',
    faultType: 'Axial Displacement',
  },
  {
    id: 'ANL-00875',
    transformerId: 'TX-GEN-B12-05',
    date: '2023-10-25',
    status: 'Medium',
    faultType: 'Radial Deformation',
  },
  {
    id: 'ANL-00874',
    transformerId: 'TX-DIST-C03-11',
    date: '2023-10-25',
    status: 'Healthy',
    faultType: 'N/A',
  },
  {
    id: 'ANL-00872',
    transformerId: 'TX-SUB-A51-02',
    date: '2023-10-24',
    status: 'Healthy',
    faultType: 'N/A',
  },
  {
    id: 'ANL-00871',
    transformerId: 'TX-IND-D44-09',
    date: '2023-10-22',
    status: 'High',
    faultType: 'Core Grounding',
  },
];
