'use client';

import Link from 'next/link';

export default function CollectionNotFound() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-6 py-12 font-Primary text-center">
      <h1 className="text-6xl font-extrabold mb-4">404</h1>
      <p className="text-2xl sm:text-3xl mb-2">Oops... That collection walked right out of the catalog 👟🚪</p>
      <p className="text-lg text-gray-400 mb-6">We tried chasing it, but it was faster than a limited-edition drop on release day.</p>
      
      <Link href="/Shop">
        <button className="mt-4 bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition-all">
          Back to Shop
        </button>
      </Link>
    </div>
  );
}
