import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Contact } from '@/components/Contact';

export const metadata = {
  title: 'Contact Us | Nonacrypt',
  description: 'Get in touch with our team of AI and Data Science experts.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 selection:bg-amber-500/30 selection:text-amber-200">
      <Header />
      <Contact />
      <Footer />
    </main>
  );
}
