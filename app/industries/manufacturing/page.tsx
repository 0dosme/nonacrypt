import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { IndustryDetailClient } from '@/components/pages/IndustryDetailClient';

export const metadata = {
  title: 'Manufacturing AI | Nonacrypt',
  description: 'AI and data solutions for Manufacturing.',
};

export default function ManufacturingPage() {
  return (
    <main className="min-h-screen bg-slate-950 selection:bg-amber-500/30 selection:text-amber-200">
      <Header />
      <IndustryDetailClient 
        title="Manufacturing"
        subtitle="Smart factory engines and waste reduction"
        description="We engineer heavy-duty data pipelines for sensor data, supply chains, and physical assets. Our solutions turn raw production data into actionable insights that increase yield, reduce downtime, and improve quality control."
        benefits={[
          { title: "Smart Factory Engines", desc: "IoT data integration and real-time analytics to monitor and optimize production lines." },
          { title: "Quality Control", desc: "Computer vision models that automatically detect defects and anomalies on the assembly line." },
          { title: "Waste Reduction", desc: "Predictive analytics to minimize material waste and optimize energy consumption." },
          { title: "Digital Twins", desc: "Virtual replicas of physical assets to simulate and optimize manufacturing processes." }
        ]}
      />
      <Footer />
    </main>
  );
}
