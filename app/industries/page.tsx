import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { IndustriesClient } from '@/components/pages/IndustriesClient';

export const metadata = {
  title: 'Industries | Nonacrypt',
  description: 'Industry-specific AI and Data Science solutions.',
};

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-slate-950 selection:bg-amber-500/30 selection:text-amber-200">
      <Header />
      <IndustriesClient />
      <Footer />
    </main>
  );
}
