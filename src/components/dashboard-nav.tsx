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
  Info,
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
      href: '/',
      icon: <LayoutDashboard />,
      label: 'Dashboard',
    },
    {
      href: '/analysis',
      icon: <FileText />,
      label: 'Analysis',
    },
    {
      href: '/how-it-works',
      icon: <Workflow />,
      label: 'How It Works',
    },
    {
      href: '/benefits',
      icon: <CheckCircle2 />,
      label: 'Benefits',
    },
    {
      href: '/technology',
      icon: <Cpu />,
      label: 'Technology',
    },
    {
      href: '/team',
      icon: <Users />,
      label: 'Team',
    },
    {
      href: '/learn-more',
      icon: <Info />,
      label: 'Learn More',
    },
  ];

  return (
    <SidebarMenu>
      {navItems.map((item) => (
        <SidebarMenuItem key={item.href}>
          <SidebarMenuButton
            asChild
            isActive={pathname === `/dashboard${item.href === '/' ? '' : item.href}`}
            tooltip={{
              children: item.label,
              className: 'bg-sidebar-accent text-sidebar-accent-foreground',
            }}
          >
            <Link href={`/dashboard${item.href === '/' ? '' : item.href}`}>
              {item.icon}
              <span>{item.label}</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
