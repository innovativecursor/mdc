'use client'

import { useState } from 'react'
import Image from 'next/image'

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('mdc')

  return (
    <div className="bg-gray-900 p-6 flex justify-center">
      <div className="bg-[#F7E9D5] p-8 rounded-lg max-w-6xl w-full relative flex">
        {/* Sidebar */}
        <div className="flex flex-col w-1/4 border-r border-orange-300 pr-6">
          <button
            className={`text-left text-xl font-bold ${activeTab === 'mdc' ? 'text-black' : 'text-gray-500'}`}
            onClick={() => setActiveTab('mdc')}
          >
            ABOUT
            <br /> MDC
          </button>
          <button
            className={`mt-6 text-left text-xl font-bold ${activeTab === 'owner' ? 'text-black' : 'text-gray-500'}`}
            onClick={() => setActiveTab('owner')}
          >
            ABOUT THE
            <br /> OWNER
          </button>
        </div>

        {/* Content */}
        <div className="pl-6 flex-1">
          {activeTab === 'mdc' ? (
            <div>
              <h2 className="text-3xl font-bold">ABOUT US</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                We specialize in high-quality architectural glass, aluminum, and stainless-steel
                solutions tailored to meet the unique needs of modern construction and design.
              </p>
              <button className="mt-6 px-5 py-2 border border-orange-500 text-orange-500 rounded-md hover:bg-orange-500 hover:text-white">
                Company Profile
              </button>

              {/* Image Section */}
              <div className="mt-6 flex gap-4">
                <Image src="/team.jpg" width={200} height={150} alt="Team" className="rounded-lg" />
                <Image
                  src="/factory.jpg"
                  width={100}
                  height={75}
                  alt="Factory"
                  className="rounded-lg"
                />
              </div>

              {/* Mission, Vision, Core Values */}
              <div className="mt-8 flex gap-8">
                <div className="flex-1">
                  <h3 className="font-bold text-lg">
                    OUR <span className="text-orange-500">MISSION</span>
                  </h3>
                  <p className="text-gray-700 text-sm mt-2">
                    To provide top-tier architectural glass solutions with precision, efficiency,
                    and modern innovation.
                  </p>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg">
                    OUR <span className="text-orange-500">VISION</span>
                  </h3>
                  <p className="text-gray-700 text-sm mt-2">
                    To be a leading architectural glass provider in the Philippines, recognized for
                    excellence, sustainability, and innovation.
                  </p>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg">
                    OUR <span className="text-orange-500">CORE VALUES</span>
                  </h3>
                  <p className="text-gray-700 text-sm mt-2">
                    <strong>Integrity & Trust</strong> – Honesty and transparency in all our
                    dealings.
                  </p>
                  <p className="text-gray-700 text-sm mt-2">
                    <strong>Excellence in Craftsmanship</strong> – Precision and quality at the
                    heart of our work.
                  </p>
                  <p className="text-gray-700 text-sm mt-2">
                    <strong>Innovation & Modern Solutions</strong> – Embracing new technologies to
                    enhance services.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <h2 className="text-3xl font-bold">ABOUT THE OWNER</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Details about the owner go here...
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AboutSection
