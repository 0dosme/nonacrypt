import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceDetailClient } from '@/components/pages/ServiceDetailClient';

export const metadata = {
  title: 'Advanced Data Analytics | Nonacrypt',
  description: 'Transforming messy data into a Single Source of Truth.',
};

export default function AdvancedDataAnalyticsPage() {
  return (
    <main className="min-h-screen bg-slate-950 selection:bg-amber-500/30 selection:text-amber-200">
      <Header />
      <ServiceDetailClient 
        title="Advanced Data Analytics"
        subtitle="Transforming messy data into a 'Single Source of Truth'"
        description="We don't just build dashboards; we build cognitive environments. By unifying your fragmented data sources, we create a real-time pulse of your business operations. Our advanced analytics solutions provide deep visibility into every aspect of your enterprise, enabling data-driven decisions that drive growth and operational efficiency."
        features={[
          { title: "Executive Dashboards", desc: "Real-time KPI tracking with interactive visualizations tailored for C-suite decision-making." },
          { title: "Customer Intelligence", desc: "Deep behavioral analysis and churn prediction models to maximize customer lifetime value." },
          { title: "Multi-touch Marketing ROI", desc: "Accurate attribution modeling to determine the true ROI of your marketing spend across all channels." },
          { title: "Automated Financial Reporting", desc: "Streamlined financial forecasting and reporting pipelines that eliminate manual data entry errors." }
        ]}
      />
      <Footer />
    </main>
  );
}
