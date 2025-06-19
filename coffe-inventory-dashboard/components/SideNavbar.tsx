'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Dashboard', href: '/' },
  { name: 'Sales', href: '/sales' },
  { name: 'Inventory', href: '/inventory' },
  { name: 'Menu', href: '/menu' },
  { name: 'Spoil items', href: '/spoil-items' },
  { name: 'Additional items', href: '/additional-items' },
  { name: 'cashflow', href: '/cashflow' },
  { name: 'reports', href: '/reports' },
  { name: 'Settings', href: '/settings' },
];

export default function SideNavbar() {
    const pathname = usePathname();

    return (
        <aside className="w-64 bg-gray-800 text-white h-screen p-4">
            <h1></h1>
        </aside>
    )
}