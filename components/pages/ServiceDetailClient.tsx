'use client';

import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface ServiceDetailProps {
  title: string;
  subtitle: string;
  description: string;
  features: { title: string; desc: string }[];
}

export function ServiceDetailClient({ title, subtitle, description, features }: ServiceDetailProps) {
  return (
    <div className="pt-32 pb-20 bg-slate-950 min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <Link href="/services" className="text-amber-500 hover:text-amber-400 flex items-center gap-2 mb-8 w-fit font-medium transition-colors">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to Services
          </Link>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-2xl text-amber-500 font-medium mb-6">{subtitle}</p>
          <p className="text-xl text-slate-400 leading-relaxed">{description}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8 mb-16"
        >
          <h2 className="text-2xl font-bold text-white mb-8">Key Capabilities</h2>
          <div className="grid gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 flex gap-4 hover:border-slate-700 transition-colors">
                <CheckCircle2 className="w-6 h-6 text-amber-500 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-amber-500 rounded-3xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl font-bold text-slate-950 mb-4">Ready to get started?</h2>
          <p className="text-slate-900/80 mb-8 max-w-2xl mx-auto text-lg">
            Schedule a free data audit to discover how our {title.toLowerCase()} solutions can transform your business.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-slate-950 hover:bg-slate-900 text-white rounded-full font-semibold transition-colors">
            Book a Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
