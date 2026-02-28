import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { IndustryDetailClient } from '@/components/pages/IndustryDetailClient';

export const metadata = {
  title: 'E-commerce & Retail AI | Nonacrypt',
  description: 'AI and data solutions for E-commerce and Retail.',
};

export default function EcommercePage() {
  return (
    <main className="min-h-screen bg-slate-950 selection:bg-amber-500/30 selection:text-amber-200">
      <Header />
      <IndustryDetailClient 
        title="E-commerce & Retail"
        subtitle="Hyper-personalized recommendation engines and dynamic pricing"
        description="We build scalable architectures designed to handle millions of transactions and user events. Our predictive models optimize inventory, personalize the shopping experience, and maximize customer lifetime value."
        benefits={[
          { title: "Recommendation Engines", desc: "Machine learning models that personalize product suggestions to increase average order value." },
          { title: "Dynamic Pricing", desc: "Algorithms that adjust prices in real-time based on demand, competition, and inventory levels." },
          { title: "Churn Prediction", desc: "Identify at-risk customers and trigger automated retention campaigns before they leave." },
          { title: "Inventory Forecasting", desc: "Predictive analytics to optimize stock levels and reduce warehousing costs." }
        ]}
      />
      <Footer />
    </main>
  );
}
