import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { About } from '@/components/About';
import { WhyUs } from '@/components/WhyUs';
import { Approach } from '@/components/Approach';
import { Process } from '@/components/Process';

export const metadata = {
  title: 'About Us | Nonacrypt',
  description: 'Learn more about our mission to transform companies from Data-Driven to AI-First.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 selection:bg-amber-500/30 selection:text-amber-200">
      <Header />
      <div className="pt-20">
        <About />
        <WhyUs />
        <Approach />
        <Process />
      </div>
      <Footer />
    </main>
  );
}
