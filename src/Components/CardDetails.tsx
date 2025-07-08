import Footer from "../Components/Footer";

import Navbar from "../Components/Navbar";
import Button from "../Components/Button";
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
            <Button buttonColor={shoe.buttonColor} text={"Coming Soon"}/>
            
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
export default CardDetails;
