import Link from 'next/link'

export default function NotFound() {
  const basePath = process.env.BASEPATH || '';
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h2 className="text-2xl font-bold mb-4">Not Found</h2>
      <p className="mb-4">Could not find requested resource</p>
      <Link href={`${basePath}/`} className="text-blue-500 hover:text-blue-700">
        Return Home
      </Link>
    </div>
  )
} 