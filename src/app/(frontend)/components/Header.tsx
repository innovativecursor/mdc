'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { FaFacebookF, FaWhatsapp, FaInstagram } from 'react-icons/fa'
import { FiPhone } from 'react-icons/fi'
import mdcLogo from '../public/assets/mdc_logo.png'
import { IoIosArrowDown } from 'react-icons/io'

const Header = () => {
  const [services, setServices] = useState<{ id: number; service_name: string; url: string }[]>([])
  // Fetch Services from PayloadCMS API
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/services`)
        if (!response.ok) throw new Error('Failed to fetch services')
        const data = await response.json()
        setServices(data.docs) // Payload stores results in 'docs'
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }

    fetchServices()
  }, [])
  return (
    <header className="bg-[#282828] py-8">
      <div className="container mx-auto flex text-white items-center justify-between">
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
        <nav className="hidden md:flex space-x-16 tracking-wide">
          <a href="/" className="text-[18px] hover:text-[#E37715] ">
            HOME
          </a>
          <div className="relative group z-50">
            <a href="/about" className="text-[18px] flex items-center hover:text-[#E37715]">
              ABOUT US{' '}
              <span className="ml-1">
                <IoIosArrowDown fill="#E37715" />
              </span>
            </a>
            {/* Dropdown (Fixed) */}
            <div className="absolute top-full left-0 w-48 bg-[#282828] text-white rounded shadow-lg z-50 opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300 pt-2">
              <a href="/about/team" className="block px-4 py-2 hover:bg-gray-700">
                About the Company
              </a>
              <a href="/about/company" className="block px-4 py-2 hover:bg-gray-700">
                About the Owner
              </a>
            </div>
          </div>
          <div className="relative group">
            <a
              href="/projects"
              className="text-[18px]  flex items-center hover:text-text-[#E37715]"
            >
              PROJECTS
            </a>
          </div>
          <div className="relative group">
            <a
              href="/services"
              className="text-[18px]  flex items-center hover:text-text-[#E37715]"
            >
              SERVICES
              <span className="ml-1">
                <IoIosArrowDown fill="#E37715" />
              </span>
            </a>
            {/* Dropdown */}
            <div className="absolute left-0 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible flex flex-col bg-[#282828] text-white mt-2 py-2 w-48 rounded shadow-lg transition-all duration-300">
              {services.map((service) => (
                <a
                  key={service.id}
                  href={`/services/${service.id}`}
                  className="block px-4 py-2 hover:bg-gray-700"
                >
                  {service.service_name}
                </a>
              ))}
            </div>
          </div>
          <a href="/contact" className="text-[18px]  hover:text-orange-500">
            CONTACT
          </a>
        </nav>

        {/* Contact Info */}
        <div className="flex items-center space-x-4">
          <a href="tel:+639568594396" className="flex items-center text-[#fff] text-sm">
            <FiPhone fill="#E37715" className="mr-2 w-[23px] h-[23px] text-[#E37715]" />{' '}
            <span className="text-[18px]  text-[#fff]">+63 956 859 4396</span>
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
      </div>
    </header>
  )
}

export default Header
