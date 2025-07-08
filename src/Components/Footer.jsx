import Link from "next/link";
function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 justify-center h-auto font-Primary overflow-hidden">
      <div className="max-full flex flex-col sm:flex-row place-content-around flex-wrap items-center ">

        
        <div className="flex-row justify-center text-center my-2">
          <div className="w-full flex justify-center"><img src="Vectors/Logo.png" className="h-20 justify-center" alt="" /></div>
          <h2 className="text-2xl font-bold mb-4">ShoeMe</h2>
          <p className="text-gray-400 text-sm">
            Define Style
          </p>
          
        </div>

        
        

        
        <div className="flex-row  text-center my-2">
          <h3 className="text-lg font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/Contact" className="hover:text-white">Contact Us</Link></li>
            <li><Link href="/About" className="hover:text-white">About Us</Link></li>
          </ul>

        </div>

        
        <div className="flex-row items-center text-center my-2">
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a target="_blank" href="https://www.instagram.com/p/BgSlRglAKBn/?igsh=MXVvbWhpcGdjaHQzeQ==" className="hover:text-white">Instagram</a></li>
            
            <li><a href="#" className="hover:text-white">YouTube</a></li>
          </ul>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} ShoeMe. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
