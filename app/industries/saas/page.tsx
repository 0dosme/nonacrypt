import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { IndustryDetailClient } from '@/components/pages/IndustryDetailClient';

export const metadata = {
  title: 'SaaS & Software AI | Nonacrypt',
  description: 'AI and data solutions for SaaS and Software.',
};

export default function SaaSPage() {
  return (
    <main className="min-h-screen bg-slate-950 selection:bg-amber-500/30 selection:text-amber-200">
      <Header />
      <IndustryDetailClient 
        title="SaaS & Software"
        subtitle="Full funnel optimization and churn reduction"
        description="We build data-driven growth engines for SaaS companies. Our predictive models analyze user behavior, optimize onboarding flows, and identify upsell opportunities to maximize recurring revenue."
        benefits={[
          { title: "Funnel Optimization", desc: "Identify drop-off points and optimize conversion rates across the entire customer journey." },
          { title: "Feature Usage Analytics", desc: "Track and analyze how users interact with your product to inform roadmap decisions." },
          { title: "Predictive Churn Reduction", desc: "Machine learning models that identify at-risk accounts before they cancel." },
          { title: "Upsell Identification", desc: "Predictive analytics to identify accounts with high expansion potential." }
        ]}
      />
      <Footer />
    </main>
  );
}
