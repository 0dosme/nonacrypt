import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { IndustryDetailClient } from '@/components/pages/IndustryDetailClient';

export const metadata = {
  title: 'Healthcare & Life Sciences AI | Nonacrypt',
  description: 'AI and data solutions for Healthcare and Life Sciences.',
};

export default function HealthcarePage() {
  return (
    <main className="min-h-screen bg-slate-950 selection:bg-amber-500/30 selection:text-amber-200">
      <Header />
      <IndustryDetailClient 
        title="Healthcare & Life Sciences"
        subtitle="Predictive Diagnostics and Resource Allocation"
        description="We engineer HIPAA-compliant data security architectures and predictive models that improve patient outcomes and optimize hospital resource allocation. Our solutions empower healthcare providers to make data-driven decisions that save lives and reduce operational costs."
        benefits={[
          { title: "Predictive Diagnostics", desc: "Machine learning models that analyze patient data to predict disease onset and recommend preventative care." },
          { title: "Medical Imaging Analysis", desc: "Computer vision algorithms that assist radiologists in detecting anomalies with higher accuracy and speed." },
          { title: "Resource Allocation", desc: "Predictive analytics to optimize staffing, bed availability, and medical supply inventory." },
          { title: "HIPAA-Compliant Data Pipelines", desc: "Secure, encrypted data architectures that ensure full regulatory compliance while enabling advanced analytics." }
        ]}
      />
      <Footer />
    </main>
  );
}
