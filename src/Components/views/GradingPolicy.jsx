import React from 'react'

const GradingPolicy = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <h2 className="text-3xl font-semibold text-center mb-6">Grading Policy</h2>
      <div className="max-w-2xl mx-auto text-gray-700">
        <p className="mb-4">Our grading is based on the following scale:</p>
        <ul className="space-y-2 list-disc list-inside">
          <li>A (90-100%)</li>
          <li>B (80-89%)</li>
          <li>C (70-79%)</li>
          <li>D (60-69%)</li>
          <li>F (Below 60%)</li>
        </ul>
      </div>
    </section>
  )
}

export default GradingPolicy
