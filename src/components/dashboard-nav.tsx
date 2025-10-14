'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FileText,
  LayoutDashboard,
  Users,
  CheckCircle2,
  Workflow,
  Cpu,
} from 'lucide-react';

import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';

export function DashboardNav() {
  const pathname = usePathname();

  const navItems = [
    {
      href: '/dashboard',
      icon: <LayoutDashboard />,
      label: 'Dashboard',
    },
    {
      href: '/dashboard/analysis',
      icon: <FileText />,
      label: 'Analysis',
    },
    {
      href: '/dashboard/how-it-works',
      icon: <Workflow />,
      label: 'How It Works',
    },
    {
      href: '/dashboard/benefits',
      icon: <CheckCircle2 />,
      label: 'Benefits',
    },
    {
      href: '/dashboard/technology',
      icon: <Cpu />,
      label: 'Technology',
    },
    {
      href: '/dashboard/team',
      icon: <Users />,
      label: 'Team',
    },
  ];

  return (
    <SidebarMenu>
      {navItems.map((item) => (
        <SidebarMenuItem key={item.href}>
          <SidebarMenuButton
            asChild
            isActive={pathname === item.href}
            tooltip={{
              children: item.label,
              className: 'bg-sidebar-accent text-sidebar-accent-foreground',
            }}
          >
            <Link href={item.href}>
              {item.icon}
              <span>{item.label}</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
