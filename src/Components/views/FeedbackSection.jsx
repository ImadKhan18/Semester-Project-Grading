import React from 'react'

const FeedbackSection = () => {
  return (
    <section className="py-16 px-6 bg-gray-100">
      <h2 className="text-3xl font-semibold text-center mb-6">Feedback</h2>
      <div className="max-w-xl mx-auto">
        <textarea
          placeholder="Enter your feedback or queries..."
          className="w-full p-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          rows="5"
        />
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
          Submit
        </button>
      </div>
    </section>
  )
}

export default FeedbackSection
