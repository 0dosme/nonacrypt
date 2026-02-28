'use client';

import { motion } from 'motion/react';
import { Check, Shield, TrendingUp, Settings } from 'lucide-react';

const industryPricing = [
  {
    industry: "Finance & Healthcare",
    icon: <Shield className="w-8 h-8 text-amber-500" />,
    subtitle: "High-Compliance & Security Focus",
    price: "$25,000+",
    billing: "Per Project / Retainer",
    description: "Military-grade data pipelines and AI models compliant with HIPAA, SOC2, and GDPR.",
    features: [
      "On-Premise or Private Cloud Deployment",
      "Advanced Fraud & Anomaly Detection",
      "Patient/Client Outcome Predictive Modeling",
      "Full Regulatory Compliance Auditing",
      "24/7 Dedicated Support SLA"
    ]
  },
  {
    industry: "E-commerce & Retail",
    icon: <TrendingUp className="w-8 h-8 text-amber-500" />,
    subtitle: "High-Volume & Real-Time Focus",
    price: "$15,000+",
    billing: "Per Project / Retainer",
    description: "Scalable architectures designed to handle millions of transactions and user events.",
    features: [
      "Real-time Recommendation Engines",
      "Dynamic Pricing Algorithms",
      "Customer Churn Prediction Models",
      "Multi-channel Marketing Attribution",
      "Automated Inventory Forecasting"
    ],
    highlighted: true
  },
  {
    industry: "Manufacturing & Logistics",
    icon: <Settings className="w-8 h-8 text-amber-500" />,
    subtitle: "Operational & IoT Focus",
    price: "$20,000+",
    billing: "Per Project / Retainer",
    description: "Heavy-duty data engineering for sensor data, supply chains, and physical assets.",
    features: [
      "IoT Sensor Data Integration (ETL)",
      "Predictive Maintenance Models",
      "Supply Chain Route Optimization",
      "Computer Vision for Quality Control",
      "Digital Twin Architecture Setup"
    ]
  }
];

export function PricingClient() {
  return (
    <div className="pt-32 pb-20 bg-slate-950">
      <div className="container mx-auto px-6 max-w-7xl mb-20 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-display font-bold text-white mb-6"
        >
          Industry-Specific <span className="text-amber-500">Pricing</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-400 max-w-3xl mx-auto"
        >
          We don&apos;t believe in one-size-fits-all. Our pricing reflects the unique regulatory, volume, and operational demands of your sector.
        </motion.p>
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-3 gap-8">
          {industryPricing.map((tier, idx) => (
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
                  Most Requested
                </div>
              )}
              
              <div className="mb-8">
                <div className="w-16 h-16 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-6">
                  {tier.icon}
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-2">{tier.industry}</h3>
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
                Request Custom Quote
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
