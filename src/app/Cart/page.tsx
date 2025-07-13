'use client';
import combined from "@/Data/Combined";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import VCard from "@/Components/VCard";
import { useState,useEffect } from "react";





export default function Cart() {
  // Lazy Initlization
  const [cartIds, setCartIds] = useState<number[]>(()=>{
      if(typeof window!=="undefined" ){
          const stored = localStorage.getItem("PIDS");
          return stored?JSON.parse(stored):[];
      }return [];
    }); 


  // const [cartIds, setCartIds] = useState<number[]>([]); // always start empty (matches server render)

  // // Then load from localStorage on client
  // useEffect(() => {
  //   const stored = localStorage.getItem("PIDS");
  //   if (stored) {
  //     setCartIds(JSON.parse(stored));
  //   }
  // }, []);
  
    

    useEffect(() => {
      localStorage.setItem("PIDS", JSON.stringify(cartIds));
    }, [cartIds]);
  
  const removeFromCart = (idToRemove: number) => {
    let removed = false;
    setCartIds(prev =>
      prev.filter(id => {
        if (!removed && id === idToRemove) {
          removed = true;
          return false; 
        }
        return true; 
      })
    );
    window.location.reload();
  };
  const filtered = combined.filter(product => cartIds.includes(product.id));



  const total = filtered.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-gray-950 text-white font-Primary">
      <Navbar />

      <div className="flex flex-col lg:flex-row px-6 py-8 gap-6 min-h-[59vh]">
        
        <div className="w-full lg:w-2/3 space-y-4">
          
          {filtered.map((shoe) => (
            <VCard key={shoe.id} shoe={shoe} props={{
            onClick: () => removeFromCart(shoe.id),
            }} />
          ))}
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-1/3 bg-white text-gray-900 rounded-xl shadow-lg p-6 h-fit">
          <h3 className="text-2xl font-bold mb-4">Order Summary</h3>
          <p className="text-lg font-medium">Items: {filtered.length}</p>
          <p className="text-lg font-medium">Total: ₹{total}</p>
          <button className="mt-6 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
            Proceed to Checkout
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
