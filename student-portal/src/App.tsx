import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Levels from './components/Levels'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20">
        <Hero />
        <Levels />
        <Features />
      </main>
      <Footer />
    </div>
  )
}

export default App 