// src/Data/Vintage.jsx
import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const products = [
  {
    id: 1,
    title: 'Reebok casual Blue Sneakers',
    price: 489,
    mrp: 999,
    discount: 51,
    deal: 'Hot Deal',
    sizes: [4, 5, 6, 7, 8],
    image: '/New/blue1.png',
    buttonColor: 'bg-blue-600 hover:bg-blue-700',
  },
  {
    id: 2,
    title: 'Soft wear Cyan Sneakers',
    price: 260,
    mrp: 999,
    discount: 73,
    deal: 'Trendy',
    sizes: [5, 6, 7],
    image: '/New/cyan1.png',
    buttonColor: 'bg-cyan-600 hover:bg-cyan-700',
  },
  {
    id: 3,
    title: 'Trendy purple sneakers',
    price: 378,
    mrp: 799,
    discount: 52,
    deal: 'Hot Deal',
    sizes: [6, 7, 8],
    image: '/New/purple.png',
    buttonColor: 'bg-purple-600 hover:bg-purple-700',
  },
  {
    id: 4,
    title: 'Puma Red Running Shoes',
    price: 1359,
    mrp: 1599,
    discount: 15,
    deal: 'Only 3 left',
    sizes: [6, 7],
    image: '/New/red1.png',
    buttonColor: 'bg-red-600 hover:bg-red-700',
  },
  {
    id: 5,
    title: 'Adidas Vibrant Stylish Shoes',
    price: 1359,
    mrp: 1599,
    discount: 15,
    deal: 'Only 2 left',
    sizes: [6, 7],
    image: '/New/orange.png',
    buttonColor: 'bg-orange-300 hover:bg-orange-400',
  },
  {
    id: 6,
    title: 'Adidas Vibrant Stylish Shoes',
    price: 1359,
    mrp: 1599,
    discount: 15,
    deal: 'Only 2 left',
    sizes: [6, 7],
    image: '/New/turquoise.png',
    buttonColor: 'bg-teal-300 hover:bg-teal-500',
  },
  {
    id: 7,
    title: 'Adidas Vibrant Stylish Shoes',
    price: 1359,
    mrp: 1599,
    discount: 15,
    deal: 'Only 2 left',
    sizes: [6, 7],
    image: '/New/pink.png',
    buttonColor: 'bg-red-400 hover:bg-red-500',
  },
  {
    id: 8,
    title: 'Adidas Vibrant Stylish Shoes',
    price: 1359,
    mrp: 1599,
    discount: 15,
    deal: 'Only 2 left',
    sizes: [6, 7],
    image: '/New/yellow.png',
    buttonColor: 'bg-yellow-600 hover:bg-yellow-700',
  },
];

export default function Trend() {
  const [liked, setLiked] = useState(Array(products.length).fill(false));
  const [cart, setCart] = useState(Array(products.length).fill(0));

  const toggleLike = (index) => {
    const updated = [...liked];
    updated[index] = !updated[index];
    setLiked(updated);
  };

  const addToCart = (index) => {
    const updated = [...cart];
    updated[index] += 1;
    setCart(updated);
  };

  return (
    <div className="p-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-gray-100 h-115">
      {products.map((product, index) => (
        <div
          key={product.id}
          className="bg-white rounded shadow-md relative flex flex-col justify-between min-h-[480px]"
        >
          <button
            onClick={() => toggleLike(index)}
            className="absolute top-2 right-2 p-2 bg-white rounded-full shadow hover:scale-110 transition"
          >
            {liked[index] ? (
              <FaHeart className="text-red-500" />
            ) : (
              <FaRegHeart className="text-gray-500" />
            )}
          </button>

          <img
            src={product.image}
            alt={product.title}
            className="w-full h-48 object-cover rounded-t"
          />

          <div className="p-4 flex-grow flex flex-col">
            <h3 className="text-sm font-semibold mb-1">{product.title}</h3>
            <div className="text-gray-800 text-base">
              ₹{product.price}{' '}
              <span className="line-through text-gray-500 text-sm">₹{product.mrp}</span>{' '}
              <span className="text-green-600 font-medium text-sm">{product.discount}% off</span>
            </div>

            {product.deal && (
              <div className="inline-block bg-green-100 text-green-700 text-xs font-semibold mt-2 px-2 py-1 rounded">
                {product.deal}
              </div>
            )}

            <p className="text-sm text-gray-600 mt-2 mb-4">
              Size {product.sizes.join(', ')}
            </p>
          </div>

          <div className="px-4 pb-4">
            <button
              onClick={() => addToCart(index)}
              className={`mt-auto w-full text-white py-2 rounded transition ${product.buttonColor}`}
            >
              Add to Cart
            </button>
            {cart[index] > 0 && (
              <p className="text-sm text-green-600 mt-1">
                Added {cart[index]} {cart[index] === 1 ? 'time' : 'times'}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
