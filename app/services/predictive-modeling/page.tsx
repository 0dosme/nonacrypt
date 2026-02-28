import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceDetailClient } from '@/components/pages/ServiceDetailClient';

export const metadata = {
  title: 'Predictive Modeling | Nonacrypt',
  description: 'Anticipate market shifts before they happen.',
};

export default function PredictiveModelingPage() {
  return (
    <main className="min-h-screen bg-slate-950 selection:bg-amber-500/30 selection:text-amber-200">
      <Header />
      <ServiceDetailClient 
        title="Predictive Modeling"
        subtitle="Anticipate market shifts before they happen"
        description="Stop reacting to the past and start preparing for the future. Our predictive modeling solutions use advanced statistical techniques and machine learning algorithms to forecast trends, identify risks, and uncover hidden opportunities. We turn historical data into actionable foresight."
        features={[
          { title: "Demand Forecasting", desc: "Accurately predict future sales volume to optimize inventory levels and reduce stockouts." },
          { title: "Risk Analysis", desc: "Identify potential financial, operational, or market risks before they impact your bottom line." },
          { title: "Price Optimization", desc: "Dynamic pricing models that adjust to market conditions, competitor pricing, and consumer demand." },
          { title: "Customer Lifetime Value", desc: "Predict the long-term value of individual customers to optimize acquisition and retention strategies." }
        ]}
      />
      <Footer />
    </main>
  );
}
