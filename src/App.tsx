import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import BMICalculator from './components/BMICalculator'
import Experience from './components/Experience'
import Goals from './components/Goals'
import Classes from './components/Classes'
import Footer from './components/Footer'

const App = () => {
  return (
   <div className="min-h-screen">
      <Header />
      <Hero/>
      <BMICalculator />
      <Experience/>
      <Goals />
      <Classes />
      <Footer />
    </div>
  )
}

export default App
