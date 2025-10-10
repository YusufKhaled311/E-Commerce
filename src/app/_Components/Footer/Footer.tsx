import React from "react";
import Link from "next/link";

import logo from '../../assets/images/imgi_1_freshcart-logo.53f7a424c3aedc30a0fb46dc2278137c.svg'
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
   
        <div>
          <h2 className="text-xl font-bold text-white bg-white py-3 flex justify-center items-center rounded-xl ">
            <Image src={logo} alt="fresh cart" width={100} height={100} />  
          </h2>
          <p className="mt-3 text-sm">
            Your one-stop shop for fresh groceries and daily essentials.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-green-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/categories" className="hover:text-green-500 transition">
                Categories
              </Link>
            </li>
            <li>
              <Link href="/cart" className="hover:text-green-500 transition">
                Cart
              </Link>
            </li>
            <li>
              <Link href="/login" className="hover:text-green-500 transition">
                Login / Register
              </Link>
            </li>
          </ul>
        </div>

      
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Customer Service</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-green-500 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-green-500 transition">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-green-500 transition">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-green-500 transition">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Stay Updated</h3>
          <p className="text-sm mb-3">
            Subscribe to get special offers, free giveaways, and updates.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 w-full rounded-l-lg text-gray-800 bg-white focus:outline-none"
            />
            <button
              type="submit"
              className="bg-green-600 px-4 py-2 rounded-r-lg text-white hover:bg-green-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>


      <div className="border-t border-gray-700 py-4 mt-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>©  FreshCart. All rights reserved.</p>
          <div className="flex gap-4 mt-3 md:mt-0">
            <span  className="hover:text-green-600 cursor-pointer">
              <i className="fa-brands fa-square-facebook text-2xl"></i>
            </span>
            <span  className="hover:text-green-600 cursor-pointer">
              <i className="text-2xl fa-brands fa-square-x-twitter"></i>
            </span>
            <span  className="hover:text-green-600 cursor-pointer"><i className="text-2xl fa-brands fa-instagram"></i></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
