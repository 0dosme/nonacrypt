'use client';

import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: "The Strategic Foundation",
    subtitle: "Entry-Level for Corporations",
    price: "$5,000 - $10,000",
    billing: "One-time Setup",
    description: "For mid-size companies starting to scale their data infrastructure.",
    features: [
      "Full Data Ecosystem Audit",
      "Unified Data Warehouse Setup (BigQuery/Snowflake)",
      "3 Executive Real-time Dashboards",
      "Compliance & Security Protocol (GDPR/HIPAA)"
    ],
    highlighted: false
  },
  {
    name: "The Intelligence Suite",
    subtitle: "Mid-Tier & Most Popular",
    price: "$15,000 - $30,000",
    billing: "Project-based",
    description: "For large enterprises aiming to directly increase profit from data.",
    features: [
      "Custom Machine Learning Models",
      "Automated ETL Pipelines",
      "Advanced Attribution Modeling",
      "Quarterly Performance Optimization"
    ],
    highlighted: true
  },
  {
    name: "The Visionary Partner",
    subtitle: "High-End Retainer",
    price: "$5,000 - $10,000+",
    billing: "Monthly Retainer (Min 1 Year)",
    description: "Premium tier where we act as your external Chief Data Officer.",
    features: [
      "Custom Enterprise LLM Development",
      "Ongoing Data Science Support",
      "Monthly Strategic Briefing with Leadership",
      "Dedicated Solution Architect & 24/7 Support",
      "Competitor Intelligence & Forecasting"
    ],
    highlighted: false
  }
];

export function Pricing() {
  return (
    <section className="py-32 bg-slate-950 relative border-t border-slate-900">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
          >
            Investment Tiers
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400"
          >
            Investments in your company&apos;s future intelligence.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {tiers.map((tier, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className={`relative rounded-3xl p-8 border ${
                tier.highlighted 
                  ? 'bg-slate-900 border-amber-500 shadow-[0_0_40px_rgba(245,158,11,0.1)]' 
                  : 'bg-slate-900/40 border-slate-800'
              } flex flex-col`}
            >
              {tier.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-amber-500 text-slate-950 text-xs font-bold uppercase tracking-wider rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-display font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-amber-500 text-sm font-medium mb-6">{tier.subtitle}</p>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold text-white">{tier.price}</span>
                </div>
                <p className="text-slate-500 text-sm">{tier.billing}</p>
              </div>

              <p className="text-slate-400 mb-8 leading-relaxed">{tier.description}</p>

              <ul className="space-y-4 mb-8 flex-grow">
                {tier.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    <span className="text-slate-300 text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                tier.highlighted
                  ? 'bg-amber-500 hover:bg-amber-400 text-slate-950'
                  : 'bg-slate-800 hover:bg-slate-700 text-white'
              }`}>
                Request Proposal
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
