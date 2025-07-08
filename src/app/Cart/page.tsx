'use client';
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
function Cart() {
  
  return (
    <>
      <div className="main bg-red-500">
        <Navbar  />
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-950 text-white font-Primary px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-orange-400">
            🛒 Your Cart is Empty
          </h1>

          <p className="text-lg md:text-2xl text-gray-300 mb-6">
            But baby, just like your ex, we’re coming back stronger.
            <br />
            <span className="text-orange-500 font-bold">
              Grand Launch on June 27th, 12 PM.
            </span>
            <br />
            Oil up those soles. It’s time to flex.
          </p>

          <div className="text-sm md:text-lg italic text-gray-400 space-y-2 max-w-xl">
            <p>“Is your cart empty, or are you just waiting for June 27th?”</p>
            <p>“You must be the drop, 'cause my wallet's ready to fall.”</p>
            <p>
              “They said true love doesn’t exist, then we launched on June
              27th.”
            </p>
            <p>
              “You looking like the reason my card's about to get declined.”
            </p>
            <p>“Oil up, lace tight. This launch ain’t for the faint.”</p>
          </div>
          <p className="mt-10 text-sm text-gray-500 italic">—P. Diddy</p>
        </div>
        <Footer />
      </div>
    </>
  );
}
export default Cart;
