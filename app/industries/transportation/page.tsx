import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { IndustryDetailClient } from '@/components/pages/IndustryDetailClient';

export const metadata = {
  title: 'Transportation & Logistics AI | Nonacrypt',
  description: 'AI and data solutions for Transportation and Logistics.',
};

export default function TransportationPage() {
  return (
    <main className="min-h-screen bg-slate-950 selection:bg-amber-500/30 selection:text-amber-200">
      <Header />
      <IndustryDetailClient 
        title="Transportation & Logistics"
        subtitle="Route Optimization and Fleet Analytics"
        description="We build dynamic data pipelines and predictive models that optimize route efficiency, reduce fuel consumption, and automate fleet management. Our solutions turn complex logistical challenges into streamlined, profitable operations."
        benefits={[
          { title: "Route Optimization", desc: "Machine learning algorithms that calculate the most efficient routes based on traffic, weather, and delivery schedules." },
          { title: "Fuel Consumption Analytics", desc: "Predictive models that analyze driving patterns and vehicle performance to minimize fuel costs." },
          { title: "Autonomous Fleet Management", desc: "Advanced data pipelines that monitor and manage autonomous vehicles in real-time." },
          { title: "Demand Forecasting", desc: "Predictive analytics to forecast shipping demand and optimize warehouse inventory levels." }
        ]}
      />
      <Footer />
    </main>
  );
}
