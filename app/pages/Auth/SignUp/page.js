"use client";

import { useState } from 'react';
import { signUp } from '@/app/backend/API/Auth/AuthFunction/AuthFunction';
import Link from 'next/link';
import { UserIcon } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      const data = await signUp(email, name, password);

      if (data) {
        toast.success('User created! Please check your inbox for verification.', {
          position: 'top-right',
          autoClose: 3000,
        });

        setTimeout(() => {
          router.push('/');
        }, 3000);
      }
    } catch (error) {
      toast.error('Sign up failed. Please try again.', {
        position: 'top-right',
        autoClose: 3000,
      });
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-200 via-yellow-500 to-yellow-800">
      <ToastContainer />
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md space-y-6">
        <div className="flex flex-col items-center gap-4">
          <UserIcon size={60} className="text-gray-700" />
          <h2 className="text-2xl font-bold text-gray-800">Create Your Account</h2>
          <p className="text-gray-500">Get started with your free account</p>
        </div>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border rounded-full focus:ring-2 focus:ring-yellow-200 focus:outline-none text-gray-900"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-full focus:ring-2 focus:ring-yellow-200 focus:outline-none text-gray-900"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border rounded-full focus:ring-2 focus:ring-yellow-200 focus:outline-none text-gray-900"
          />
        </div>
        <Button
          onClick={handleSignUp}
          className="w-full py-3 bg-accent text-black rounded-full hover:bg-primary hover:text-white transition-all duration-300"
        >
          Sign Up
        </Button>
        <p className="text-center text-gray-600">
          Already have an account?{' '}
          <Link href="/pages/Auth/Login">
            <span className="text-purple-600 font-semibold hover:underline">Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
}
