import React from 'react'
import Header from '../components/Header'
import Hero from '../pages/Hero'
import AboutSection from '../pages/AboutSection'

const Home = () => {
  return (
    <div>
      {/* Header Component */}
      <Header />
      <Hero />
      <AboutSection />
    </div>
  )
}

export default Home
