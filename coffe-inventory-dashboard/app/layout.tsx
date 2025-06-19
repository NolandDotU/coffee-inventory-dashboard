// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import SideNavbar from '@/components/SideNavbar';

export const metadata: Metadata = {
  title: 'Coffee Inventory',
  description: 'Admin panel for managing coffee inventory',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          <SideNavbar />
          <main className="ml-64 p-6 w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
