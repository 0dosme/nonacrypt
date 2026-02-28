import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'Legal | Nonacrypt',
  description: 'Legal information, Privacy Policy, and Terms of Service.',
};

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-slate-950 selection:bg-amber-500/30 selection:text-amber-200">
      <Header />
      <div className="pt-32 pb-20 bg-slate-950 min-h-screen">
        <div className="container mx-auto px-6 max-w-4xl text-slate-400">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-12">Legal Information</h1>
          
          <section id="privacy" className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Privacy Policy</h2>
            <p className="mb-4">At Nonacrypt, we take your privacy seriously. This policy outlines how we collect, use, and protect your personal and corporate data.</p>
            <p className="mb-4">We only collect data necessary to provide our services, and we never sell your information to third parties. All data is encrypted at rest and in transit.</p>
          </section>

          <section id="terms" className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Terms of Service</h2>
            <p className="mb-4">By accessing our website and using our services, you agree to be bound by these Terms of Service. Our services are provided &quot;as is&quot; without any warranties, express or implied.</p>
            <p className="mb-4">You are responsible for maintaining the confidentiality of your account and password. Nonacrypt reserves the right to terminate services at any time for violations of these terms.</p>
          </section>

          <section id="security" className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Security</h2>
            <p className="mb-4">Security is at the core of everything we build. We employ industry-standard security measures, including SOC2 compliance, HIPAA-compliant architectures, and regular penetration testing.</p>
            <p className="mb-4">If you discover a security vulnerability, please report it to our security team immediately at security@nonacrypt.com.</p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
