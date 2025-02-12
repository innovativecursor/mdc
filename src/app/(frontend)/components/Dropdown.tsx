'use client'
import React from 'react'

interface DropdownProps {
  services: { id: number; service_name: string }[]
}

const Dropdown: React.FC<DropdownProps> = ({ services }) => {
  return (
    <div className="absolute left-0 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible flex flex-col bg-[#f5deb3] text-black mt-2 py-2 w-48 rounded shadow-lg transition-all duration-300">
      {services.map((service) => (
        <a
          key={service.id}
          href={`/services/${service.id}`}
          className="block px-4 py-2 hover:bg-[#E37715] hover:text-white transition-colors duration-300"
        >
          {service.service_name}
        </a>
      ))}
    </div>
  )
}

export default Dropdown
