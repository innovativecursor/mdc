import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import AboutSection from '../pages/AboutSection'

const Home = () => {
  return (
    <div>
      {/* Header Component */}
      <Header />
      <Hero />
      <AboutSection />
      {/* Main Content */}
    </div>
  )
}

export default Home
