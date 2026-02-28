import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { IndustryDetailClient } from '@/components/pages/IndustryDetailClient';

export const metadata = {
  title: 'Banking & Finance AI | Nonacrypt',
  description: 'AI and data solutions for Banking and Finance.',
};

export default function FinancePage() {
  return (
    <main className="min-h-screen bg-slate-950 selection:bg-amber-500/30 selection:text-amber-200">
      <Header />
      <IndustryDetailClient 
        title="Banking & Finance"
        subtitle="Real-time Fraud Detection and Risk Modeling"
        description="We build robust, high-frequency data pipelines and predictive models that secure assets, optimize trading strategies, and automate credit scoring. Our solutions are designed to handle massive volumes of transactional data with zero latency and absolute precision."
        benefits={[
          { title: "Real-time Fraud Detection", desc: "Advanced anomaly detection algorithms that identify and block fraudulent transactions instantly." },
          { title: "Automated Credit Scoring", desc: "Machine learning models that assess credit risk with greater accuracy than traditional FICO scores." },
          { title: "Algorithmic Trading Models", desc: "High-frequency trading algorithms that execute trades based on real-time market data and predictive analytics." },
          { title: "Regulatory Compliance Automation", desc: "Automated reporting and auditing pipelines that ensure full compliance with SEC, FINRA, and global regulations." }
        ]}
      />
      <Footer />
    </main>
  );
}
