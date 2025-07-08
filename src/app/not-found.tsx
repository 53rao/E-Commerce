'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-6 py-12 font-Primary text-center">
      <h1 className="text-6xl font-extrabold mb-4">404</h1>
      <p className="text-2xl sm:text-3xl mb-2">Uh oh... This page ran off with our best sneakers 🏃‍♂️💨</p>
      <p className="text-lg text-gray-400 mb-6">We looked everywhere — under the bed, in the closet, even behind the couch. Still no luck!</p>
      
      <Link href="/">
        <button className="mt-4 bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition-all">
          Go Back Home
        </button>
      </Link>
    </div>
  );
}
