import React from 'react'
import Image from 'next/image'
import { FaFacebookF, FaWhatsapp, FaInstagram } from 'react-icons/fa'
import { FiPhone } from 'react-icons/fi'
import mdcLogo from '../public/assets/mdc_logo.png'
import { IoIosArrowDown } from 'react-icons/io'
const Header = () => {
  return (
    <header className="bg-[#282828] text-white py-8 px-8 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <Image
          src={mdcLogo} // Replace with your actual logo path
          alt="MDC Logo"
          width={150}
          height={150}
        />
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex space-x-16">
        <a href="/" className="text-[18px] hover:text-[#E37715] font-light">
          HOME
        </a>
        <div className="relative group">
          <a
            href="/about"
            className="text-[18px] font-light flex items-center hover:text-[#E37715]"
          >
            ABOUT US{' '}
            <span className="ml-1">
              <IoIosArrowDown fill="#E37715" />
            </span>
          </a>
          {/* Dropdown (if needed) */}
          <div className="absolute hidden group-hover:block bg-gray-800 text-white mt-2 py-2 w-40 rounded shadow-lg">
            <a href="/about/team" className="block px-4 py-2 hover:bg-gray-700">
              About the owner
            </a>
            <a href="/about/company" className="block px-4 py-2 hover:bg-gray-700">
              Company
            </a>
            <a href="/about/company" className="block px-4 py-2 hover:bg-gray-700">
              Company
            </a>
            <a href="/about/company" className="block px-4 py-2 hover:bg-gray-700">
              Company
            </a>
          </div>
        </div>
        <div className="relative group">
          <a
            href="/projects"
            className="text-[18px] font-light flex items-center hover:text-text-[#E37715]"
          >
            PROJECTS{' '}
            <span className="ml-1">
              <IoIosArrowDown fill="#E37715" />
            </span>
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
        <a href="/services" className="text-[18px] font-light hover:text-[#E37715]">
          SERVICES
        </a>
        <a href="/contact" className="text-[18px] font-light hover:text-orange-500">
          CONTACT
        </a>
      </nav>

      {/* Contact Info */}
      <div className="flex items-center space-x-4">
        <a href="tel:+639568594396" className="flex items-center text-[#fff] text-sm">
          <FiPhone fill="#E37715" className="mr-2 w-[23px] h-[23px] text-[#E37715]" />{' '}
          <span className="text-[18px] font-light text-[#fff]">+63 956 859 4396</span>
        </a>
        <div className="border-l border-[#D0D0D0] h-6"></div>
        {/* Social Icons */}
        <div className="flex space-x-3">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-[#E37715] rounded-2xl border border-[#E37715] flex items-center justify-center"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-[#E37715] rounded-2xl border border-[#E37715] flex items-center justify-center"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-[#E37715] rounded-2xl border border-[#E37715] flex items-center justify-center"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
