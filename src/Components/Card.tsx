"use-client"
import Link from "next/link";
import Button from "./Button";

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

 
function Card({ shoe }: {shoe:Shoe}) {
  


  return (
   <>
   
  <div className=" group holder w-[80vw] xxs:w-[40vw] md:w-[40vw]  jl:max-w-80 h-auto p-4 shadow-md rounded bg-gray-100 flex flex-col my-3 font-Primary  mx-auto xxs:mx-0 motion-opacity-in-[0%] motion-blur-in-[5px] motion-duration-1000 
 
   ">
  <div className="imageholder h-50 jl:max-h-3/5 w-full relative">
 
    <img 
      src={shoe.image} 
      alt={shoe.name}
      className="w-full h-full object-cover rounded-t-xl " 

    />
   
  </div>
   <div className="textholder h-full   flex-row items-center pt-3">
      <span className={`${shoe.buttonColor} text-2xl p-1 text-white text-center mr-1`}>{shoe.collectionType}</span><span className={`${shoe.buttonColor} text-2xl p-1 text-white text-center`}>{shoe.deal}</span>
        <div className="text-lg font-semibold mb-2">{shoe.name}</div>
       <div className="mt-2 text-md text-gray-600 flex">₹{shoe.price}<p className="px-3 line-through">₹{shoe.mrp}</p><span className={`${shoe.buttonColor}  text-white  text-center`}>{shoe.discount}% off</span></div>
       <div className="mt-1 text-xs text-gray-500">Sizes: {shoe.sizes.join(', ')}</div>


       <Link href={`/Shop/${shoe.collectionType}/${shoe.id}`}>
       <Button buttonColor={shoe.buttonColor} text={"Know More"}/>
       </Link>
      </div>
</div>
   
   </>

  );
}

export default Card;

      