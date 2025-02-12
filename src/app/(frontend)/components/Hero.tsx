import Image from 'next/image'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import heroSectionImg from './../public/assets/heroSection/hero_section_image.png'
const Hero = () => {
  return (
    <section className="relative w-full h-[40rem] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image src={heroSectionImg} alt="Hero Background" layout="fill" objectFit="cover" />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center h-full px-10 md:px-20">
        <div className="bg-[#E37715] p-6 md:p-10 rounded-lg text-white max-w-[80rem]">
          <h1 className="text-[48px] md:text-4xl font-bold uppercase leading-tight">
            We Are MDC Architectural <br /> Glass Installation Services
          </h1>
          <p className="mt-4 text-lg">
            Supplying and installing architectural glass to meet your modern-day needs.
          </p>
          <button className="mt-6 px-6 py-3 bg-white text-[#E37715] font-semibold rounded-lg">
            Get a Free Quotation
          </button>
        </div>
      </div>

      {/* Arrows */}
      <button className="absolute left-5 top-1/2 -translate-y-1/2 p-3 bg-white/70 rounded-full">
        <FaArrowLeft className="text-[#E37715]" />
      </button>
      <button className="absolute right-5 top-1/2 -translate-y-1/2 p-3 bg-white/70 rounded-full">
        <FaArrowRight className="text-[#E37715]" />
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-2">
        {[1, 2, 3, 4].map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full ${index === 0 ? 'bg-[#E37715]' : 'bg-white/50'}`}
          ></span>
        ))}
      </div>
    </section>
  )
}

export default Hero
