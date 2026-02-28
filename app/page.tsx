import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { Industries } from '@/components/Industries';
import { WhyUs } from '@/components/WhyUs';
import { Approach } from '@/components/Approach';
import { Process } from '@/components/Process';
import { Pricing } from '@/components/Pricing';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 selection:bg-amber-500/30 selection:text-amber-200">
      <Header />
      <Hero />
      <About />
      <Services />
      <Industries />
      <WhyUs />
      <Approach />
      <Process />
      <Pricing />
      <Footer />
    </main>
  );
}
