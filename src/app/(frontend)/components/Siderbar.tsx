'use client'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IoMdClose } from 'react-icons/io'
import { IoIosArrowDown } from 'react-icons/io'
import { FaFacebookF, FaWhatsapp, FaInstagram } from 'react-icons/fa'
import { FiPhone } from 'react-icons/fi'

const sidebarVariants = {
  hidden: { x: '100%', opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
  exit: { x: '100%', opacity: 0, transition: { duration: 0.2 } },
}

interface SidebarProps {
  isSidebarOpen: boolean
  closeSidebar: () => void
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, closeSidebar }) => {
  return (
    <AnimatePresence>
      {isSidebarOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={sidebarVariants}
          className="fixed top-0 right-0 h-full w-2/3 bg-[#282828] text-white shadow-lg p-6 flex flex-col z-50"
        >
          <button onClick={closeSidebar} className="self-end text-3xl">
            <IoMdClose />
          </button>
          <nav className="flex flex-col space-y-6 mt-10">
            <a href="/" className="text-[18px] hover:text-[#E37715]">
              HOME
            </a>
            <a href="/about" className="text-[18px] flex items-center hover:text-[#E37715]">
              ABOUT US <IoIosArrowDown className="ml-1" fill="#E37715" />
            </a>
            <a href="/projects" className="text-[18px] hover:text-[#E37715]">
              PROJECTS
            </a>
            <a href="/services" className="text-[18px] flex items-center hover:text-[#E37715]">
              SERVICES <IoIosArrowDown className="ml-1" fill="#E37715" />
            </a>
            <a href="/contact" className="text-[18px] hover:text-orange-500">
              CONTACT
            </a>
          </nav>
          <div className="mt-10 flex flex-col items-center space-y-4">
            <a href="tel:+639568594396" className="flex items-center text-white text-lg">
              <FiPhone className="mr-2 w-[23px] h-[23px] text-[#E37715]" /> +63 956 859 4396
            </a>
            <div className="flex space-x-3">
              <a
                href="https://facebook.com"
                target="_blank"
                className="p-2 text-[#E37715] rounded-2xl border border-[#E37715]"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://whatsapp.com"
                target="_blank"
                className="p-2 text-[#E37715] rounded-2xl border border-[#E37715]"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                className="p-2 text-[#E37715] rounded-2xl border border-[#E37715]"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Sidebar
