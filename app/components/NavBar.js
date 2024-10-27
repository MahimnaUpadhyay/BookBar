"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import InitialsAvatar from 'react-initials-avatar';
import 'react-initials-avatar/lib/ReactInitialsAvatar.css';
import { useAuth } from "../backend/API/Auth/supabase/SupabaseWrapper.js";
import { supabase } from "../backend/API/Auth/supabase/supabase.js";

const NavBar = () => {
  const router = useRouter();
  const { user } = useAuth();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  return (
    <header className="text-gray-600 body-font shadow-sm">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex text-xl font-medium items-center text-gray-900 mb-4 md:mb-0">
          Book<span className="bg-primary text-white">Bar</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/" className="mr-5 hover:text-gray-950 hover:cursor-pointer text-xl text-gray-700">
            Home
          </Link>
          <Link href="/pages/Books" className="mr-5 hover:text-gray-950 hover:cursor-pointer text-xl text-gray-700">
            Book
          </Link>
          <Link href="/pages/About" className="mr-5 hover:text-gray-950 hover:cursor-pointer text-xl text-gray-700">
            About Us
          </Link>
        </nav>

        <div className="flex gap-5 justify-between items-center">
          {user ? (
            <>
              <InitialsAvatar name={user?.email}/>
              <Button
                onClick={handleSignOut}
                className="inline-flex items-center bg-secondary border-0 py-1 px-3 focus:outline-none 
                hover:bg-primary rounded text-base mt-4 md:mt-0 hover:text-white font-medium"
              >
                Sign Out
              </Button>
            </>
          ) : (
            <>
              <Button
                onClick={() => router.push("/pages/Auth/SignUp")}
                className="inline-flex items-center bg-secondary border-0 py-1 px-3 focus:outline-none 
                hover:bg-primary rounded text-base mt-4 md:mt-0 hover:text-white font-medium"
              >
                Sign Up
              </Button>

              <Button
                onClick={() => router.push("/pages/Auth/Login")}
                className="inline-flex items-center bg-primary border-0 py-1 px-3 focus:outline-none 
                rounded text-base mt-4 md:mt-0 text-white font-medium"
              >
                Login
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
