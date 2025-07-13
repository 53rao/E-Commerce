'use client';
import Combined from "@/Data/Combined";
import { use } from 'react';
import { notFound } from 'next/navigation';
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

import Card from "@/Components/Card";

export default function Collection({params}:{
    params:Promise<{ collectionType: string }>;
 //A param property was accessed directly with params.collectionType. params is now a Promise and should be unwrapped with React.use() before accessing properties of the underlying params object. In this version of Next.js direct access to param properties is still supported to facilitate migration but in a future version you will be required to unwrap params with React.use().

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

