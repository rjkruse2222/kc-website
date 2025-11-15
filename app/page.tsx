import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhatWeDo from './components/WhatWeDo';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <WhatWeDo />
    </main>
  );
}
