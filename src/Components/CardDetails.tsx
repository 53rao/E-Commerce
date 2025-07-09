'use client';
import Footer from "../Components/Footer";
import { useState,useEffect } from "react";
import Navbar from "../Components/Navbar";
import Button from "../Components/Button";
import Modal from "./Modal";
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





function CardDetails({ shoe }: {shoe:Shoe}) {
      const [isOpen, setIsOpen] = useState(false);

    // Method 1 : Using useEffect()


    //Load from localStorage only on the client
    //     const [cartIds, setCartIds] = useState<number[]>([]);

    // useEffect(() => {
    //     const stored = localStorage.getItem("PIDS");
    //     if (stored) {
    //     setCartIds(JSON.parse(stored));
    //     }
    // }, []);

    // // Sync to localStorage whenever cartIds changes
    // useEffect(() => {
    //     localStorage.setItem("PIDS", JSON.stringify(cartIds));
    // }, [cartIds]);

    const addToCart = (id: number) => {
        setCartIds((prev) => {
            if (!prev.includes(id)) {
                return [...prev, id];
            }
            return prev;
        });
        setinCart(true);
        setIsOpen(true);
    };


    // Method 2 : Lazy Initilalization

    const [cartIds, setCartIds] = useState<number[]>(()=>{
        if(typeof window!=="undefined" ){
            const stored = localStorage.getItem("PIDS");
            return stored?JSON.parse(stored):[];
        }
      });
      useEffect(() => {
        localStorage.setItem("PIDS", JSON.stringify(cartIds));
      }, [cartIds]);
    

    

    // Method 1 : Using useEffect()
    const [inCart, setinCart] = useState<boolean>(false);
    useEffect(() => {
        if (typeof window !== "undefined") {
            const stored = JSON.parse(localStorage.getItem("PIDS") || "[]");
            setinCart(stored.includes(shoe.id));
        }
    }, [shoe.id]);
    
    // Method 2 : Lazy Initialization 

    // const [inCart, setinCart] = useState<boolean>(()=>{
    //     if(typeof window!=="undefined" ){
    //         const stored = JSON.parse(localStorage.getItem("PIDS") || "[]");
    //         return stored.includes(shoe.id);
    //     }
    // });




     
      
    
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
    };


  
  return (
    <>
      <div
        className={`main flex flex-col justify-center bg-gray-800 font-Primary`}
      >
        <Navbar />
        <div className="group flex sm:flex-row flex-col flex-wrap sm:flex-nowrap   w-screen sm:w-[90vw] items-center sm:h-[95vh] px-4 pt-3">
          <div className="imageholder sm:h-[50vh] sm:w-[50vw] rounded-2xl w-[90vw] h-auto px-5 ">
            <img
              src={shoe.image}
              alt=""
              className="object-contain w-full h-full rounded-4xl"
            />
          </div>
          <div className="textholder text-2xl text-white py-4">
            <p className="text-xl sm:text-3xl text-gray-300 ">
              Collection:{" "}
              <span
                className={`${shoe.buttonColor} sm:text-2xl text-xl p-1 text-white text-center mr-1 animate-pulse`}
              >
                {shoe.collectionType}
              </span>
              <span
                className={`${shoe.buttonColor} animate-pulse sm:text-2xl text-xl p-1 text-white text-center`}
              >
                {shoe.deal}
              </span>
            </p>
            <p className="sm:text-4xl text-3xl py-3">{shoe.name}</p>
            <p className=" text-white font-semibold py-3 mb-2">
              <span className="text-3xl sm:text-5xl pr-3">₹{shoe.price}</span>
              <span className="text-gray-300 line-through ">₹{shoe.mrp}</span>
              <span className={`${shoe.buttonColor} text-xl p-1  text-center`}>
                {shoe.discount}% off
              </span>
            </p>
            <div className="sizes sm:text-3xl text-xl">
              {" "}
              Sizes Available :
              {shoe.sizes.map((sz, index) => (
                <a
                  key={index}
                  className={`rounded-full ${shoe.buttonColor}  p-2 mx-2 `}
                >
                  {sz}
                </a>
              ))}
            </div>
            <p className="sm:text-4xl text-2xl font-extralight py-3">
              {shoe.desc}
            </p>
            {inCart?<Button buttonColor={shoe.buttonColor} text={"Added to Cart"}    />:<Button buttonColor={shoe.buttonColor} text={"Add to cart"}   onClick={() => addToCart(shoe.id)} />
            }
            
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
  <div className="flex flex-col items-center text-center font-Primary p-4">
    
    <img
      src={shoe.image}
      alt={shoe.name}
      className="w-32 h-32 object-contain mb-4"
    />

    
    <h2 className="text-2xl font-bold text-green-600 mb-2">✅ Added to Cart!</h2>
    <p className="text-gray-700 mb-4">{shoe.name}</p>

    
    <div className="flex gap-4">
      <Link
  href="/Shop"
  className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition text-center"
>
  Continue Shopping
</Link>

<Link
  href="/Cart"
  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition text-center"
>
  Go to Cart
</Link>

    </div>
  </div>
</Modal>


            
            
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
export default CardDetails;
