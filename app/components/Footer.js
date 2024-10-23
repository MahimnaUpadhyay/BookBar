import { Facebook, Instagram, Twitter } from 'lucide-react'
import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="text-gray-600 body-font border-t-2 border-gray-200">
                <div className="flex flex-wrap md:text-left text-center order-first justify-between p-5">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="font-medium text-gray-900 tracking-widest text-lg mb-3">SITE MAP</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Home</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Books</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">About Us</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Become Member?</a>
                            </li>
                        </nav>
                    </div>

                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="font-medium text-gray-900 tracking-widest text-lg mb-3">SUBSCRIBE</h2>
                        <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                            <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                                <label for="footer-field" className="leading-7 text-sm text-gray-600">Your Email</label>
                                <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-yellow-200 focus:border-yellow-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white 
                                            bg-primary border-0 py-2 px-6 focus:outline-none rounded">
                                Send
                            </button>
                        </div>
                        <p className="text-gray-500 text-sm mt-2 md:text-left text-center">Being subscribe will give you
                            <br className="lg:block hidden" />latest updates about books
                        </p>
                    </div>
                </div>

                <div className="bg-gray-100">
                    <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                            Book<span className="bg-primary text-white">Bar</span>
                        </a>
                        <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© 2024 BookBar —
                            <a href="/" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">
                                @BookBar
                            </a>
                        </p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                            <a className="text-gray-500">
                                <Instagram />
                            </a>
                            <a className="ml-3 text-gray-500">
                                <Twitter />
                            </a>
                            <a className="ml-3 text-gray-500">
                                <Facebook />
                            </a>
                        </span>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer