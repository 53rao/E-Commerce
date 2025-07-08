'use client';

import Link from 'next/link';

export default function ItemNotFound() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-6 py-12 font-Primary text-center">
      <h1 className="text-6xl font-extrabold mb-4">Oops!</h1>
      <p className="text-2xl sm:text-3xl mb-2">This item is more elusive than a sneaker raffle win 🎯👟</p>
      <p className="text-lg text-gray-400 mb-6">
        Either it’s out of stock, discontinued, or just hiding better than your left sock.
      </p>

      <Link href="/Shop">
        <button className="mt-4 bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition-all">
          Browse More Items
        </button>
      </Link>
    </div>
  );
}
