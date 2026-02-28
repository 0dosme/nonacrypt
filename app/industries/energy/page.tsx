import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { IndustryDetailClient } from '@/components/pages/IndustryDetailClient';

export const metadata = {
  title: 'Energy & Oil AI | Nonacrypt',
  description: 'AI and data solutions for Energy and Oil.',
};

export default function EnergyPage() {
  return (
    <main className="min-h-screen bg-slate-950 selection:bg-amber-500/30 selection:text-amber-200">
      <Header />
      <IndustryDetailClient 
        title="Energy & Oil"
        subtitle="Predictive Maintenance and Yield Optimization"
        description="We engineer IoT-driven data pipelines and predictive models that optimize rig maintenance, streamline supply chains, and maximize energy yield. Our solutions turn sensor data into actionable insights that reduce downtime and increase operational efficiency."
        benefits={[
          { title: "Predictive Maintenance", desc: "Machine learning models that analyze sensor data to predict equipment failure before it happens." },
          { title: "Yield Optimization", desc: "Advanced algorithms that analyze geological data to maximize oil extraction and energy production." },
          { title: "Supply Chain Optimization", desc: "Predictive analytics to optimize the transportation and storage of energy resources." },
          { title: "IoT Sensor Data Integration", desc: "Robust data pipelines that collect, process, and analyze massive volumes of sensor data in real-time." }
        ]}
      />
      <Footer />
    </main>
  );
}
