import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceDetailClient } from '@/components/pages/ServiceDetailClient';

export const metadata = {
  title: 'Data Science & Engineering | Nonacrypt',
  description: 'The scalable engine powering your intelligence.',
};

export default function DataScienceEngineeringPage() {
  return (
    <main className="min-h-screen bg-slate-950 selection:bg-amber-500/30 selection:text-amber-200">
      <Header />
      <ServiceDetailClient 
        title="Data Science & Engineering"
        subtitle="The scalable engine powering your intelligence"
        description="AI is only as good as the data feeding it. We architect robust, scalable, and secure data pipelines that ensure your models are always fed with clean, accurate, and timely data. Our data engineering solutions are built to handle massive volumes of information while maintaining strict compliance and security standards."
        features={[
          { title: "Automated ETL/ELT Pipelines", desc: "Seamless data collection, cleaning, and transformation from disparate sources into unified storage." },
          { title: "Cloud Data Warehousing", desc: "Scalable data architecture utilizing modern platforms like Snowflake, BigQuery, and Redshift." },
          { title: "Real-time Streaming Data", desc: "Processing and analyzing high-velocity data streams for immediate insights and actions." },
          { title: "Statistical Modeling", desc: "Solving complex mathematical problems and conducting rigorous risk analysis for strategic planning." }
        ]}
      />
      <Footer />
    </main>
  );
}
