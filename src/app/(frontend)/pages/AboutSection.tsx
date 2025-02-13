'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { wrap } from 'module'
const BASE_URL = 'http://localhost:3001'

const AboutSection = () => {
  interface AboutData {
    id: number
    about_description: string
    about_image1: {
      id: number
      url: string
      alt: string
    }
    about_image2: {
      id: number
      url: string
      alt: string
    }
    about_mission: {
      root: any
    }
    about_vision: {
      root: any
    }
    about_core_values: {
      root: any
    }
  }
  const [activeTab, setActiveTab] = useState('mdc')
  const [about, setAbout] = useState<AboutData | null>(null)
  useEffect(() => {
    const aboutUs = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/globals/about`)
        if (!response.ok) throw new Error('Failed to fetch services')
        const data = await response.json()
        setAbout(data) // Payload stores results in 'docs'
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }

    aboutUs()
  }, [])
  return (
    <section id="#about">
      <div className="bg-[#282828] flex justify-center">
        <div className="bg-[#F7E9D5] my-32 pr-8 py-8 rounded-3xl w-full relative flex container mx-auto">
          {/* Sidebar */}
          <div className="flex flex-col justify-evenly w-1/4 pr-6">
            <div className="flex justify-center min-h-[50%]">
              <button
                className={`text-left text-[16px] font-semibold ${activeTab === 'mdc' ? 'text-black bg-[#F7E9D5]' : 'text-gray-500 bg-[#282828]'}`}
                onClick={() => setActiveTab('mdc')}
              >
                ABOUT
                <br />
                <div className="text-[40px] font-bold">
                  <span>MDC</span>
                </div>
              </button>
            </div>
            <div className="flex justify-center min-h-[50%]">
              <button
                className={`mt-6 text-left text-[16px] font-semibold ${activeTab === 'owner' ? 'text-black bg-[#F7E9D5]' : 'text-gray-500 bg-[#282828]'}`}
                onClick={() => setActiveTab('owner')}
              >
                ABOUT THE
                <br />
                <div className="text-[40px] font-bold">
                  <span>OWNER</span>
                </div>
              </button>
            </div>
          </div>
          {/* Content */}
          <div className="flex px-10 py-28 ">
            {activeTab === 'mdc' ? (
              <div className="flex flex-col gap-44  ">
                <div className="flex gap-4">
                  {/* Image Section */}
                  <div className="flex relative">
                    {about?.about_image1?.url ? (
                      <Image
                        width="1000"
                        height="1000"
                        quality={100}
                        loading="eager"
                        className="rounded-3xl"
                        objectFit="cover"
                        src={`${process.env.NEXT_PUBLIC_API_URL}${about?.about_image1?.url}`}
                        alt="Description of my image"
                      />
                    ) : null}
                    <div className="absolute  -bottom-10 right-0">
                      {about?.about_image1?.url ? (
                        <Image
                          width="100"
                          height="100"
                          quality={100}
                          loading="eager"
                          objectFit=""
                          className=" rounded-3xl"
                          src={`${process.env.NEXT_PUBLIC_API_URL}${about?.about_image2?.url}`}
                          alt="Description of my image"
                        />
                      ) : null}
                    </div>
                  </div>
                  <div className="flex flex-col " style={{ flexFlow: 'wrap' }}>
                    <h2 className="text-5xl font-bold">ABOUT US</h2>
                    <p className="text-[#4A4A4A] leading-relaxed max-w-3xl">
                      {about?.about_description}
                    </p>
                    <div className="flex items-end justify-start">
                      <button className="px-5 py-2 border border-orange-500 text-orange-500 rounded-md hover:bg-orange-500 hover:text-white">
                        Company Profile
                      </button>
                    </div>
                  </div>
                </div>
                {/* Mission, Vision, Core Values */}
                <div className="flex gap-8">
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
                      To be a leading architectural glass provider in the Philippines, recognized
                      for excellence, sustainability, and innovation.
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
    </section>
  )
}

export default AboutSection
