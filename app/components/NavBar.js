import React from 'react'

const NavBar = () => {
    return (
        <>
            <header className="text-gray-600 body-font shadow-sm">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex text-xl font-medium items-center text-gray-900 mb-4 md:mb-0">
                        Book<span className="bg-primary text-white">Bar</span>
                    </a>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <a className="mr-5 hover:text-gray-950 hover:cursor-pointer text-xl text-gray-700">Home</a>
                        <a className="mr-5 hover:text-gray-950 hover:cursor-pointer text-xl text-gray-700">Book</a>
                        <a className="mr-5 hover:text-gray-950 hover:cursor-pointer text-xl text-gray-700">About Us</a>
                        <a className="mr-5 hover:text-gray-950 hover:cursor-pointer text-xl text-gray-700">Become Member</a>
                    </nav>

                    <div className='flex gap-5'>
                        <button className="inline-flex items-center bg-secondary border-0 py-1 px-3 focus:outline-none 
                    hover:bg-primary rounded text-base mt-4 md:mt-0 hover:text-white font-medium">
                            Sign Up
                        </button>

                        <button className="inline-flex items-center bg-primary border-0 py-1 px-3 focus:outline-none 
                                        rounded text-base mt-4 md:mt-0 text-white font-medium">
                            Login
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default NavBar