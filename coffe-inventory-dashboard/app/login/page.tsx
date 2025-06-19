'use client';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '@/lib/firebase/auth';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { doc, getDoc } from 'firebase/firestore'; // 👈 should be getDoc, not getDocs

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      // 👇 Fetch the email from the username document
      const usernameDocRef = doc(db, 'usernames', username);
      const usernameDocSnap = await getDoc(usernameDocRef);

      if (!usernameDocSnap.exists()) {
        setError('Username does not exist');
        return;
      }

      const email = usernameDocSnap.data().email;

      // 👇 Sign in using the retrieved email
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/');
    } catch (err: any) {
      setError(err.message || 'Login failed');
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="border p-2"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="border p-2"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button type="submit" className="bg-blue-500 text-white py-2 px-4">
          Login
        </button>
      </form>
    </main>
  );
}
