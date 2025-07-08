'use client';

import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
function About() {
  return (
    <>
      <div className="main bg-blue-500">
        <Navbar  />
        <div className="min-h-screen bg-gray-800 text-white px-6 py-12 font-Primary flex flex-col items-center text-center">
          <h1 className="text-5xl font-bold text-orange-400 mb-4">
            About ShoeMe
          </h1>
          <p className="text-xl italic text-gray-300 mb-2">Define Style.</p>

          <div className="max-w-3xl text-gray-200 text-lg space-y-6 mt-6">
            <p>
              Born in the chaos of fashion weeks, streetwear drops, and meme
              pages, ShoeMe is not just a brand— it's a rebellion wrapped in
              laces. We were tired of the same recycled “drip” that looked like
              it came from a 2016 Pinterest board. So, we made something that
              says, “I'm him.” Or her. Or them.
            </p>

            <p>
              Whether you're walking into your 9 AM lecture, sprinting to your
              situationship’s house, or just out here dodging responsibilities
              like it’s GTA, ShoeMe is built for it. And if someone says “Nice
              shoes,” just hit them with that smug nod like, “ShoeMe, bro.”
            </p>

            <p>
              Every collection is brewed with the chaos of Gen Z humor, the
              precision of sneakerhead obsession, and the sauce of an Instagram
              thirst trap. We’re talking: certified drip, FBI-level comfort, and
              enough colorways to make a Crayola box jealous.
            </p>

            <p>
              Our motto?{" "}
              <span className="text-orange-500 font-bold">Define Style.</span>
              Because trends fade, but memes—and your fit—are forever.
            </p>

            <p>
              Also, fun fact: Our first ever design was inspired by a tweet that
              said, “These shoes got me walking like I just dropped an album.”
              You're welcome.
            </p>

            <p>
              So yeah. Welcome to ShoeMe. Where fashion meets flavor, and your
              feet are finally allowed to main character their way through life.
            </p>

            <p className="text-sm italic text-gray-500 mt-10">
              “ShoeMe or lose me.” — probably you after this launch.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
export default About;
