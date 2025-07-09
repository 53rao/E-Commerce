'use client';
import Combined from "@/Data/Combined";
import { use } from 'react';
import CollectionNotFound from "./not-found";
import { notFound } from 'next/navigation';
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

import Card from "@/Components/Card";
import combined from "@/Data/Combined";

export default function Collection({params}:{
    params:Promise<{ collectionType: string }>;
}) {
    const {collectionType}=use(params);
    const results = Combined.filter((shoe) => shoe.collectionType === collectionType );


  const correct=results.find(shoe=>shoe.collectionType==collectionType)
  if(correct==undefined){
    notFound();
  }
  return (
    <>
      <div className="Main flex-row justify-center mx-auto font-Primary bg-gray-800 
	">
        <Navbar/>
        <div className="section bg-transparent py-10 px-4">
            <h1 className="text-5xl text-white font-bold mb-8 font-Primary">{collectionType} Collection</h1>

          <div className="CardHolder px-auto flex flex-wrap w-full justify-center xxs:place-content-between px-10">
            {results.map((shoe, idx) => (
                <Card key={shoe.id || idx} shoe={shoe} />
            ))}
          </div>
        </div>
        

        

        

        <Footer />
      </div>
    </>
  );
  
}

