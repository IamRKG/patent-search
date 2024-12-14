'use client'

export default function ErrorComponent({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-red-50 border border-red-200 p-4 rounded">
        <h2 className="text-red-800 font-bold">Search Error</h2>
        <p className="text-red-600">Unable to fetch results. Please try again.</p>
        <button
          onClick={reset}
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded"
        >
          Try Again
        </button>
      </div>
    </div>
  )
}
