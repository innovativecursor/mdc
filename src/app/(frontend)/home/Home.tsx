import React from 'react'
import Header from '../components/Header'

const Home = () => {
  return (
    <div>
      {/* Header Component */}
      <Header />

      {/* Main Content */}
      <main className="min-h-screen bg-gray-100 flex items-center justify-center">
        <h1 className="text-3xl font-semibold text-gray-800">Welcome to MDC</h1>
      </main>
    </div>
  )
}

export default Home
