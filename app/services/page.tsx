import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServicesClient } from '@/components/pages/ServicesClient';

export const metadata = {
  title: 'Services | Nonacrypt',
  description: 'Explore our advanced data analytics, AI development, and data engineering services.',
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-950 selection:bg-amber-500/30 selection:text-amber-200">
      <Header />
      <ServicesClient />
      <Footer />
    </main>
  );
}
