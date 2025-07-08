'use client';
import Combined from "@/Data/Combined";
import { use } from 'react';
import CardDetails from "@/Components/CardDetails";

import { notFound } from 'next/navigation';

export default function Collection({params}:{
    params:Promise<{ id: string }>;
}) {
    const {id}=use(params);
  const correct=Combined.find(shoe=>shoe.id=== parseInt(id))
  if(correct==undefined){
    notFound();
  }
  return (
    <>
      <CardDetails shoe={correct}/>
    </>
  );
  
}

