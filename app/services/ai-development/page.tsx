import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceDetailClient } from '@/components/pages/ServiceDetailClient';

export const metadata = {
  title: 'AI Development | Nonacrypt',
  description: 'Custom AI models trained on your proprietary data.',
};

export default function AIDevelopmentPage() {
  return (
    <main className="min-h-screen bg-slate-950 selection:bg-amber-500/30 selection:text-amber-200">
      <Header />
      <ServiceDetailClient 
        title="Artificial Intelligence Development"
        subtitle="Custom AI models trained on your proprietary data"
        description="Off-the-shelf AI isn't enough for enterprise dominance. We engineer bespoke machine learning models and LLMs that understand the unique nuances of your specific business. From automating complex workflows to generating predictive insights, our custom AI solutions are designed to give you a sustainable competitive advantage."
        features={[
          { title: "Private LLMs & Corporate Chatbots", desc: "Secure, context-aware AI assistants trained exclusively on your internal documents and data." },
          { title: "Computer Vision", desc: "Automated insights from images and video for quality control, security, and operational monitoring." },
          { title: "Predictive Modeling", desc: "Advanced algorithms for accurate inventory forecasting, demand planning, and sales predictions." },
          { title: "NLP for Customer Support", desc: "Automated triage and resolution of customer inquiries using sophisticated Natural Language Processing." }
        ]}
      />
      <Footer />
    </main>
  );
}
