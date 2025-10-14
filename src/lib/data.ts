
import {
  type BarChart,
  type LineChart,
  type AreaChart,
  type PieChart,
} from 'lucide-react';

export const teamMembers = [
  {
    id: 1,
    name: 'Shivam Prasad',
    role: 'Team Leader',
    bio: 'Leading the team to new heights of innovation and excellence in AI-driven diagnostics.',
    imageId: 'team-member-1',
  },
  {
    id: 2,
    name: 'Nitish Kumar Pandit',
    role: 'Team Member',
    bio: 'A dedicated engineer contributing to the core development of our analytics platform.',
    imageId: 'team-member-2',
  },
  {
    id: 3,
    name: 'Kushagra Mohan',
    role: 'Team Member',
    bio: 'A creative problem-solver focused on building intuitive and powerful user interfaces.',
    imageId: 'team-member-3',
  },
  {
    id: 4,
    name: 'Sourish Dey',
    role: 'Team Member',
    bio: 'A data science enthusiast passionate about developing and refining our machine learning models.',
    imageId: 'team-member-4',
  },
  {
    id: 5,
    name: 'Raja Kumar Rana',
    role: 'Team Member',
    bio: 'Specializing in backend systems and ensuring the reliability and scalability of our infrastructure.',
    imageId: 'team-member-5',
  },
  {
    id: 6,
    name: 'Bharti Kumari',
    role: 'Team Member',
    bio: 'Focused on quality assurance and ensuring our platform delivers accurate and trustworthy results.',
    imageId: 'team-member-6',
  }
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
  { name: 'Low', value: 150, fill: 'hsl(var(--chart-1))' },
  { name: 'Medium', value: 75, fill: 'hsl(var(--chart-2))' },
  { name: 'High', value: 45, fill: 'hsl(var(--chart-3))' },
  { name: 'Critical', value: 38, fill: 'hsl(var(--chart-4))' },
];
export const faultsBySeverityConfig = {
  value: {
    label: 'Faults',
  },
  Low: {
    label: 'Low',
    color: 'hsl(var(--chart-1))',
  },
  Medium: {
    label: 'Medium',
    color: 'hsl(var(--chart-2))',
  },
  High: {
    label: 'High',
    color: 'hsl(var(--chart-3))',
  },
  Critical: {
    label: 'Critical',
    color: 'hsl(var(--chart-4))',
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
