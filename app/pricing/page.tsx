import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PricingClient } from '@/components/pages/PricingClient';

export const metadata = {
  title: 'Industry Pricing | Nonacrypt',
  description: 'Industry-specific pricing and investment plans for AI solutions.',
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-slate-950 selection:bg-amber-500/30 selection:text-amber-200">
      <Header />
      <PricingClient />
      <Footer />
    </main>
  );
}
