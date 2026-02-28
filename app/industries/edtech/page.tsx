import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { IndustryDetailClient } from '@/components/pages/IndustryDetailClient';

export const metadata = {
  title: 'EdTech AI | Nonacrypt',
  description: 'AI and data solutions for EdTech.',
};

export default function EdTechPage() {
  return (
    <main className="min-h-screen bg-slate-950 selection:bg-amber-500/30 selection:text-amber-200">
      <Header />
      <IndustryDetailClient 
        title="EdTech"
        subtitle="Student retention prediction and personalized learning paths"
        description="We build data-driven learning environments that improve student outcomes and optimize educational resources. Our predictive models analyze engagement data to personalize learning paths and identify at-risk students."
        benefits={[
          { title: "Retention Prediction", desc: "Machine learning models that identify students at risk of dropping out before they leave." },
          { title: "Personalized Learning", desc: "Algorithms that adapt course content and pacing to individual student needs." },
          { title: "Engagement Tracking", desc: "Analyze student interaction data to optimize course design and improve completion rates." },
          { title: "Resource Allocation", desc: "Predictive analytics to optimize staffing, scheduling, and educational resources." }
        ]}
      />
      <Footer />
    </main>
  );
}
