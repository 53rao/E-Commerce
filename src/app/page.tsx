'use client';

import Navbar from "../Components/Navbar";
import Link from "next/link";
import Footer from "../Components/Footer";
function Home() {
  return (
    <>
      <div className="h-auto overflow-hidden   ">
        <div className="HERO h-auto  lg:h-[95vh] w-screen bg-cgreen-500  place-content-between">
          <Navbar />
          <div className="holder flex justify-center h-4/5 w-full 2xl:h-3/4">
            <img
              src="/Hero/ok1.png"
              alt=""
              className="object-contain max-h-full max-w-full "
            />
          </div>
          <div className="tholder flex place-content-between  px-1 sm:px-3 lg:px-5 pb-4 h-full ">
            <div className="one">
              <p className="text-white  font-Primary sm:text-lg md:text-2xl">
                A perfect blend of{" "}
              </p>
              <p className="text-white">
                <a className=" sm:text-2xl md:text-4xl font-bold ">Luxury</a>{" "}
                and{" "}
                <a className="sm:text-2xl font-extrabold md:text-4xl">
                  Comfort
                </a>
              </p>
            </div>
            <div className=" font-Primary text-white">
              <p className="mr-1 xxs:mr-0 md:text-2xl text-right ">
                Designed by
              </p>
              <p className=" font-bold md:text-4xl sm:text-2xl text-right">
                @KSI
              </p>
            </div>
          </div>
        </div>
        <div className="h-[30vh] w-full bg-gray-800 text-white flex flex-col justify-center items-center px-4 ">
          <div className="flex flex-nowrap items-center justify-center text-center gap-10 font-Primary">
            <div className="w-1/3 text-2xl sm:text-3xl font-light tracking-widest">
              Grand Opening
            </div>
            <div className="w-1/3 text-6xl sm:text-8xl font-extrabold text-white animate-pulse">
              SALE
            </div>
            <div className="w-1/3 text-2xl sm:text-3xl font-light tracking-widest">
              UP TO <span className="font-bold">60% OFF*</span>
            </div>
          </div>

          <div className="mt-3">
            <Link href="/Shop">
              {" "}
              <button className="border-b text-white text-base sm:text-lg font-semibold mt-2">
                SHOP NOW
              </button>
            </Link>
            <p className="text-xs mt-1 text-gray-200">*T&C's Apply.</p>
          </div>
        </div>

        <div className="adholder  bg-white sm:py-2">
          <div className="ad h- w-full sm:px-2 justify-center items-center  mx-auto flex flex-wrap ">
            

            <div className="imageholder w-full  h-80 sm:h-100 sm:w-1/2 sm:pr-2 ">
              <Link href="/Shop/New">
              <img
                src="Hero/9.png"
                alt=""
                className="object-cover w-full h-full "
              />
              </Link>
            </div>
            
            
            <div className="imageholder w-full h-80 sm:h-100  sm:w-1/2 ">
              <Link href="/Shop/Vintage">
              <img
                src="Hero/10.png"
                alt=""
                className="object-cover w-full h-full "
              />
              </Link>
            </div>
            
          </div>
        </div>
        <div className="content text-center flex items-center justify-center py-10 px-4 bg-black  text-white font-Primary">
          <div className="w-full sm:w-3/4 md:w-1/2 text-base leading-relaxed text-left">
            <h1 className="text-3xl px-6 text-center">
              SHOEME : A PERFECT BLEND OF LUXURY AND COMFORT
            </h1>
            <br />
            <br />
            <div className="py-2">
              <p className="mb-4">
                Step into a world where style meets substance. At ShoeMe, we
                believe that every stride tells a story of confidence, ambition,
                and individuality. Since our inception, we’ve been dedicated to
                redefining what it means to walk in luxury, offering footwear
                that’s as comfortable as it is stylish.
              </p>
              <p className="mb-4">
                Our passion is to empower you to express yourself, wherever life
                takes you. Whether you’re conquering the boardroom, exploring
                city streets, or making memories on special occasions, ShoeMe is
                your trusted companion. We blend cutting edge design with the
                finest materials to ensure that every pair delivers unmatched
                comfort and timeless elegance.
              </p>

              <p className="mb-4">
                ShoeMe isn’t just a footwear brand—it’s a movement for those who
                define style on their own terms. Each creation is a testament to
                our commitment to luxury, durability, and meticulous attention
                to detail. We collaborate with visionary designers and artisans
                to ensure every shoe is a perfect blend of comfort and elegance.
              </p>
              <p>
                Wherever your journey leads, ShoeMe is there to support you
                helping you define your style and stride forward with assurance.
                Experience the ultimate in luxury and comfort. With ShoeMe,
                every step is a statement.
              </p>
            </div>
          </div>
        </div>
        <div className="py-4 w-full bg-green-600 text-white flex flex-col justify-center items-center px-4">
  <div className="flex flex-nowrap items-center justify-center text-center gap-10 font-Primary">
    <div className="w-1/3 text-2xl sm:text-3xl font-light tracking-widest">
      ShoeMe Collection
    </div>
    <div className="w-1/3 text-6xl sm:text-8xl font-extrabold text-white animate-pulse">
      MOVE BOLD
    </div>
    <div className="w-1/3 text-2xl sm:text-3xl font-light tracking-widest">
      FIND YOUR EDGE
    </div>
  </div>

  <div className="mt-3">
    <Link href="/Shop">
      <button className="border-b text-white text-base sm:text-lg font-semibold mt-2">
        SHOP NOW
      </button>
    </Link>
    <p className="text-xs mt-1 text-gray-200">*T&C's Apply.</p>
  </div>
</div>


        <Footer />
      </div>
    </>
  );
}
export default Home;
