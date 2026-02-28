import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { IndustryDetailClient } from '@/components/pages/IndustryDetailClient';

export const metadata = {
  title: 'Real Estate AI | Nonacrypt',
  description: 'AI and data solutions for Real Estate.',
};

export default function RealEstatePage() {
  return (
    <main className="min-h-screen bg-slate-950 selection:bg-amber-500/30 selection:text-amber-200">
      <Header />
      <IndustryDetailClient 
        title="Real Estate"
        subtitle="Market intelligence and lead-to-deal conversion"
        description="We build predictive models and data pipelines that optimize property valuation, identify investment opportunities, and streamline lead generation. Our solutions turn market data into a competitive advantage."
        benefits={[
          { title: "Valuation Models", desc: "Machine learning algorithms that accurately predict property values based on market trends and historical data." },
          { title: "Market Intelligence", desc: "Predictive analytics to identify emerging neighborhoods and investment opportunities." },
          { title: "Lead Scoring", desc: "Automated lead qualification models that prioritize high-intent buyers and sellers." },
          { title: "Conversion Analytics", desc: "Track and optimize the entire lead-to-deal process to increase close rates." }
        ]}
      />
      <Footer />
    </main>
  );
}
