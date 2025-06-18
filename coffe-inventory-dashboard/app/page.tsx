'use client';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function HomePage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [loading, user, router]);

  if (loading) return <p>Loading...</p>;

  return (
    <main className="p-4">
      <h1 className="text-2xl">Welcome, {user?.email}</h1>
    </main>
  );
}
