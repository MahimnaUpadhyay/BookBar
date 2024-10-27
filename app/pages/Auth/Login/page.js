"use client";

import { useState } from 'react';
import { signIn } from '../../../backend/API/Auth/AuthFunction/AuthFunction.js';
import { UserIcon } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Page() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSignIn = async () => {

        const adminEmail = process.env.ADMIN_EMAIL;
        console.log(adminEmail)
        try {
            const data = await signIn(email, password);
            const isAdmin = data?.user?.email;

            if (isAdmin == adminEmail) {
                toast.success('Welcome Back', { position: 'top-right', autoClose: 3000 });
                setTimeout(() => router.push('/pages/AdminDashboard'), 1000);
            } else if (data) {
                toast.success('Welcome Back', { position: 'top-right', autoClose: 3000 });
                setTimeout(() => router.push('/'), 1000);
            }
            
        } catch (error) {
            toast.error('Login failed. Please try again.', { position: 'top-right', autoClose: 3000 });
            console.error(error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-200 via-yellow-500 to-yellow-800">
            <ToastContainer />
            <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md space-y-6">
                <div className="flex flex-col items-center gap-4">
                    <UserIcon size={60} className="text-gray-700" />
                    <h2 className="text-2xl font-bold text-gray-800">Welcome Back</h2>
                    <p className="text-gray-500">Login to access your account</p>
                </div>
                <div className="space-y-4">
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
                        className="w-full p-3 border rounded-full focus:ring-2 focus:ring-yellow-200     focus:outline-none text-gray-900"
                    />
                </div>
                <Button
                    onClick={handleSignIn}
                    className="w-full py-3 bg-accent text-black rounded-full hover:bg-primary hover:text-white transition-all duration-300"
                >
                    Login
                </Button>
                <p className="text-center text-gray-600">
                    Don't have an account?{' '}
                    <Link href="/pages/Auth/SignUp">
                        <span className="text-purple-600 font-semibold hover:underline">Sign Up</span>
                    </Link>
                </p>
            </div>
        </div>
    );
}
