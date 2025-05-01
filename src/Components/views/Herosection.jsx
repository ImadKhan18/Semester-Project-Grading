import React from 'react'

const HeroSection = () => {
  return (
    <section className="bg-blue-50 py-20 px-6 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Grading System</h1>
      <p className="text-lg text-gray-700 mb-6">
        View your grades, understand your performance, and stay informed.
      </p>
      <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
        Login to View Grades
      </button>
    </section>
  )
}

export default HeroSection
