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
      const data = await signUp(email, password, name);

      if (data) {
        toast.success('User created! Please check your inbox for verification.', {
          position: "top-right",
          autoClose: 3000,
        });

        setTimeout(() => {
          router.push('/');
        }, 3000);
      }
    } catch (error) {
      toast.error('Sign up failed. Please try again.', {
        position: "top-right",
        autoClose: 3000,
      });
      console.log(error);
    }
  };

  return (
    <div className='flex w-full h-[500px] justify-center items-center'>
      <ToastContainer />
      <div className='flex flex-col bg-primary w-[400px] h-auto text-white p-5 gap-4 
                      justify-center items-center rounded-md shadow-md'>
        <UserIcon
          size={60}
          className='bg-white text-gray-700 rounded-full p-2'
        />
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='p-2 rounded-full focus:border-yellow-500 text-black w-[250px]'
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='p-2 rounded-full focus:border-yellow-500 text-black w-[250px]'
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='p-2 rounded-full focus:border-yellow-500 text-black w-[250px]'
        />
        <Button
          className="bg-accent hover:bg-accent"
          onClick={handleSignUp}>
          Sign Up
        </Button>

        <p>
          Already signed in?{' '}
          <span className='font-bold cursor-pointer'>
            <Link href="/pages/Auth/Login">Login</Link>
          </span>
        </p>
      </div>
    </div>
  );
}
