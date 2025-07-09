'use client';
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Button from "@/Components/Button";
import Card from "@/Components/Card";
import newshoeData from "@/Data/New";
import vintageshoes from "@/Data/Vintage";
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
 
  return (
    <>
      <div className="Main flex-row justify-center mx-auto font-Primary bg-gray-950">
        <Navbar/>
        <div className="section bg-transparent py-10 px-4">
            <h1 className="text-5xl text-white font-bold mb-8 font-Primary">New Collections</h1>


          <div className="CardHolder px-auto flex flex-wrap w-full justify-center xxs:place-content-between px-10">
            {newshoeData.slice(0, 4).map((shoe, idx) => (
                <Card key={shoe.id || idx} shoe={shoe} />
            ))}
          </div>
          <Link href={`/Shop/New`}><Button text="View More" buttonColor="bg-blue-500"></Button></Link>

        </div>

        
<div className="section bg-sky-200 py-10 px-4 flex-col ">
        <h1 className="text-5xl text-blac font-bold mb-8 font-Primary ">Vintage Collections</h1>

        
        <div className="CardHolder px-auto flex flex-wrap w-full justify-center xxs:place-content-between px-10  ">
            {vintageshoes.slice(0,4).map((shoe, idx) => (
              <Card key={shoe.id || idx} shoe={shoe} />
            ))}
        </div>
          <Link href={`/Shop/New`}><Button text="View More" buttonColor="bg-blue-500"></Button></Link>
        </div>

        

        <Footer />
      </div>
    </>
  );
}
export default Shop;
