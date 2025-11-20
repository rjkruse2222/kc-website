import Hero from '../components/Hero';
import About from '../components/About';
import WhatWeDo from '../components/WhatWeDo';
import Insights from '../components/Insights';
import Connect from '../components/Connect';
import CredentialsBar from './components/CredentialsBar';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import TeamSection from './components/TeamSection';
import FAQ from './components/FAQ';

export default function Home10() {
  return (
    <main className="min-h-screen">
      <Hero />
      <CredentialsBar />
      <About />
      <WhyChooseUs />
      <WhatWeDo />
      <Testimonials />
      <TeamSection />
      <Insights />
      <FAQ />
      <Connect />
    </main>
  );
}
