import Hero from './components/Hero';
import About from './components/About';
import WhatWeDo from './components/WhatWeDo';
import Insights from './components/Insights';
import Connect from './components/Connect';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <WhatWeDo />
      <Insights />
      <Connect />
    </main>
  );
}
