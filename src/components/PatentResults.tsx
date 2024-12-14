'use client'

import { Patent } from '@/types/patent'

export default function PatentResults({ patents }: { patents: Patent[] }) {
  return (
    <div className="space-y-4">
      {patents.map((patent) => (
        <div key={patent.id} className="border p-4 rounded shadow">
          <h2 className="text-xl font-bold">{patent.title}</h2>
          <p className="text-gray-600 mt-2">{patent.abstract}</p>
          <div className="mt-2 text-sm text-gray-500">
            Patent: {patent.patentNumber} | Filed: {patent.filingDate}
          </div>
        </div>
      ))}
    </div>
  )
}
