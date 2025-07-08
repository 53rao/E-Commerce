'use client';
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Button from "@/Components/Button";
import Card from "@/Components/Card";
import newshoeData from "@/Data/New";
import vintageshoes from "@/Data/Vintage";
import { useState, useEffect } from "react";
import Modal from "@/Components/Modal";
import Link from "next/link";

type Shoe = {
  id: number;
  name: string;
  title: string;
  desc: string;
  price: number;
  mrp: number;
  discount: number;
  deal: string;
  sizes: number[];
  image: string;
  buttonColor: string;
  collectionType: string;
};
function Shop() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);
  }, []);
  return (
    <>
      <div className="Main flex-row justify-center mx-auto font-Primary bg-gray-950">
        <Navbar/>
        <div className="section bg-transparent py-10 px-4">
            <h1 className="text-5xl text-white font-bold mb-8 font-Primary">New Collections</h1>


          <div className="CardHolder px-auto flex flex-wrap w-full justify-center xxs:place-content-between px-10">
            {newshoeData.slice(0, 3).map((shoe, idx) => (
                <Card key={shoe.id || idx} shoe={shoe} />
            ))}

    
            <div className="group holder w-[80vw] xxs:w-[40vw] md:w-[40vw] jl:max-w-80 h-auto p-4 shadow-md rounded bg-gray-100 
                 flex flex-col my-3 font-Primary mx-auto xxs:mx-0 motion-opacity-in-[0%] motion-blur-in-[5px] 
                 motion-duration-1000 text-center justify-center items-center">
                  <Link href={`/Shop/New`}><Button text="View More" buttonColor="bg-blue-600"></Button></Link>
              
            </div>
          </div>
        </div>

        
<div className="section bg-sky-200 py-10 px-4">
            <h1 className="text-5xl text-black font-bold mb-8 font-Primary ">Vintage Collections</h1>

        
          <div className="CardHolder px-auto flex flex-wrap w-full justify-center xxs:place-content-between px-10">
            {vintageshoes.slice(0,3).map((shoe, idx) => (
              <Card key={shoe.id || idx} shoe={shoe} />
            ))}
            
            <div className="group holder w-[80vw] xxs:w-[40vw] md:w-[40vw] jl:max-w-80 h-auto p-4 shadow-md rounded bg-gray-100 
                 flex flex-col my-3 font-Primary mx-auto xxs:mx-0 motion-opacity-in-[0%] motion-blur-in-[5px] 
                 motion-duration-1000 text-center justify-center items-center">
              <Link href={`/Shop/Vintage`}><Button text="View More" buttonColor="bg-blue-600"></Button></Link>
            </div>
            
          </div>
        </div>

        {/* <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <img src="Hero/ok2.jpg" alt="" className="h-1/2" />
          <div className="caption flex items-center text-center h-1/2 w-40  text-gray-600 text-xl">
            "Oil up your game.🔥 The drop hits June 27. Don’t come dry."
          </div>
        </Modal> */}

        <Footer />
      </div>
    </>
  );
}
export default Shop;
