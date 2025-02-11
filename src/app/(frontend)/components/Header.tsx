import React from 'react'
import Image from 'next/image'
import { FaFacebookF, FaWhatsapp, FaInstagram } from 'react-icons/fa'
import { FiPhone } from 'react-icons/fi'
import mdcLogo from '../public/assets/mdc_logo.png'
const Header = () => {
  return (
    <header className="bg-[#282828] text-white py-10 px-10 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <Image
          src={mdcLogo} // Replace with your actual logo path
          alt="MDC Logo"
          width={100}
          height={100}
        />
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex space-x-6">
        <a href="/" className="text-sm hover:text-orange-500">
          HOME
        </a>
        <div className="relative group">
          <a href="/about" className="text-sm flex items-center hover:text-orange-500">
            ABOUT US <span className="ml-1">▼</span>
          </a>
          {/* Dropdown (if needed) */}
          <div className="absolute hidden group-hover:block bg-gray-800 text-white mt-2 py-2 w-40 rounded shadow-lg">
            <a href="/about/team" className="block px-4 py-2 hover:bg-gray-700">
              Our Team
            </a>
            <a href="/about/company" className="block px-4 py-2 hover:bg-gray-700">
              Company
            </a>
          </div>
        </div>
        <div className="relative group">
          <a href="/projects" className="text-sm flex items-center hover:text-orange-500">
            PROJECTS <span className="ml-1">▼</span>
          </a>
          {/* Dropdown */}
          <div className="absolute hidden group-hover:block bg-gray-800 text-white mt-2 py-2 w-40 rounded shadow-lg">
            <a href="/projects/commercial" className="block px-4 py-2 hover:bg-gray-700">
              Commercial
            </a>
            <a href="/projects/residential" className="block px-4 py-2 hover:bg-gray-700">
              Residential
            </a>
          </div>
        </div>
        <a href="/services" className="text-sm hover:text-orange-500">
          SERVICES
        </a>
        <a href="/contact" className="text-sm hover:text-orange-500">
          CONTACT
        </a>
      </nav>

      {/* Contact Info */}
      <div className="flex items-center space-x-4">
        <a href="tel:+639568594396" className="flex items-center text-orange-500 text-sm">
          <FiPhone className="mr-2" /> +63 956 859 4396
        </a>
        <div className="border-l border-gray-600 h-6"></div>
        {/* Social Icons */}
        <div className="flex space-x-3 text-orange-500">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
