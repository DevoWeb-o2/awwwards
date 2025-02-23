import React from "react";
import Hero from "./components/Hero.jsx";

export default function App() {
   return (
      <section className="relative min-h-screen w-screen overflow-x-hidden">
         <Hero />

          <section className="z-0 min-h-screen bg-blue-500" />
      </section>
   );
}
