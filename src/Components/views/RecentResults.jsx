import React from 'react'

const RecentResults = () => {
  const results = [
    { subject: 'Mathematics', grade: 'A' },
    { subject: 'Physics', grade: 'B+' },
    { subject: 'English', grade: 'A-' },
  ]

  return (
    <section className="py-16 px-6 bg-gray-100 text-center">
      <h2 className="text-3xl font-semibold mb-6">Recent Results</h2>
      <div className="grid gap-4 md:grid-cols-3 max-w-4xl mx-auto">
        {results.map((item, idx) => (
          <div key={idx} className="bg-white p-6 shadow rounded">
            <h3 className="text-xl font-bold">{item.subject}</h3>
            <p className="text-lg text-green-600 font-medium">Grade: {item.grade}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default RecentResults
