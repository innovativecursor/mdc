'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import heroSectionImg from './../public/assets/heroSection/hero_section_image.png'
import Button from './Button'

const slides = [
  {
    id: 1,
    title: 'We Are MDC Architectural Glass Installation Services',
    text: 'Supplying and installing architectural glass to meet your modern-day needs.',
    img: heroSectionImg,
  },
  {
    id: 2,
    title: 'Transforming Spaces with Modern Glass Solutions',
    text: 'Quality craftsmanship with cutting-edge glass installation techniques.',
    img: heroSectionImg,
  },
  {
    id: 3,
    title: 'Innovative Glass Designs for Every Structure',
    text: 'From concept to completion, we bring your vision to life.',
    img: heroSectionImg,
  },
]

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full h-[40rem] overflow-hidden">
      {/* Image Slider (Only the image transitions) */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence mode="wait">
          {slides.map((slide, index) =>
            index === currentSlide ? (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.9, ease: 'easeInOut' }}
                className="absolute w-full h-full"
              >
                <Image src={slide.img} alt="Hero Background" layout="fill" objectFit="cover" />
                <div className="absolute inset-0 bg-black/30 md:hidden bg-gradient-to-t from-[#100C0C] to-transparent"></div>
              </motion.div>
            ) : null,
          )}
        </AnimatePresence>
      </div>

      {/* Content (Remains Fixed, Only Text Updates) */}
      <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start text-center md:text-left h-full px-10 md:px-10">
        <div className="relative md:absolute md:left-[92px] md:top-[170px] bg-transparent md:bg-[#E37715] p-6 md:p-10 text-white max-w-[40rem]">
          <h1 className="text-[32px] md:text-4xl font-bold uppercase leading-tight">
            {slides[currentSlide].title}
          </h1>
          <p className="mt-4 text-lg">{slides[currentSlide].text}</p>
          <Button title={'Get a Free consultation'} />
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="hidden md:block absolute left-5 top-1/2 -translate-y-1/2 p-4 bg-white/70 rounded-full"
      >
        <FaArrowLeft className="text-[#E37715]" />
      </button>
      <button
        onClick={nextSlide}
        className="hidden md:block absolute right-5 top-1/2 -translate-y-1/2 p-4 bg-white/70 rounded-full"
      >
        <FaArrowRight className="text-[#E37715]" />
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentSlide ? 'bg-[#E37715]' : 'bg-white/50'
            }`}
          ></span>
        ))}
      </div>
    </section>
  )
}

export default Hero
