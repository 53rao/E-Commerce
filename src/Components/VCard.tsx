"use client"

import Image from "next/image";

type Shoe = {
  id: number;
  name: string;
  title: string;
  desc?: string;
  price: number;
  mrp: number;
  discount: number;
  deal?: string;
  sizes?: number[];
  image: string;
  buttonColor: string;
  collectionType: string;
};
type ButtonProps = {
  
  onClick?: () => void;
};

type VCardProps = {
  shoe: Shoe;
  props?: ButtonProps;
};


export default function VCard({ shoe, props }: VCardProps) {
  return (
    <div className="w-full max-w-3xl mx-auto mb-4 bg-transparent">
      <div className="flex items-center bg-white shadow-md rounded-lg overflow-hidden w-full">
        {/* Image section */}
        <div className="w-40 h-40 relative flex-shrink-0 p-2 bg-white">
          <Image
            src={shoe.image}
            alt={shoe.name}
            fill
            sizes="160px"
            className="object-cover rounded-l"/>
        </div>

        {/* Text section */}
        <div className="ml-4 flex flex-col justify-center h-full w-full text-center">
          <h2 className="text-xl font-semibold text-gray-800">{shoe.name}</h2>
          <p className="text-gray-600 text-sm">{shoe.title}</p>

          <div className="mt-2">
            <span className="text-lg font-bold text-gray-900">₹{shoe.price}</span>
            <span className="line-through text-sm text-gray-400 ml-2">₹{shoe.mrp}</span>
            <span className={`ml-2 text-sm px-2 py-0.5 rounded text-white ${shoe.buttonColor}`}>
              {shoe.discount}% off
            </span>
          </div>
          <div className="flex justify-center">
            <button className="text-white bg-red-500  hover:bg-red-600 px-3 py-1 text-xl rounded" onClick={props?.onClick} >
                Remove
            </button>
          </div>

        </div>
        

      </div>
    </div>
  );
}
