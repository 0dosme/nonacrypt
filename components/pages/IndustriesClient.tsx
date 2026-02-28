'use client';

import { motion } from 'motion/react';
import { Building2, HeartPulse, Zap, Truck, ShoppingCart, Code, Home, Factory, GraduationCap, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const detailedIndustries = [
  {
    icon: <HeartPulse className="w-8 h-8" />,
    name: "Healthcare & Life Sciences",
    desc: "Patient outcome prediction, medical imaging analysis, and HIPAA-compliant data security architectures.",
    tags: ["Predictive Diagnostics", "Resource Allocation", "Compliance"],
    href: "/industries/healthcare"
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    name: "Banking & Finance",
    desc: "Real-time fraud detection, automated credit scoring systems, and algorithmic trading models.",
    tags: ["Fraud Detection", "Risk Modeling", "Algorithmic Trading"],
    href: "/industries/finance"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    name: "Energy & Oil",
    desc: "Predictive maintenance for rigs, supply chain optimization, and yield forecasting.",
    tags: ["Predictive Maintenance", "Yield Optimization", "IoT Analytics"],
    href: "/industries/energy"
  },
  {
    icon: <ShoppingCart className="w-8 h-8" />,
    name: "E-commerce & Retail",
    desc: "Hyper-personalized recommendation engines, dynamic pricing, and churn prediction.",
    tags: ["Dynamic Pricing", "Churn Prediction", "Recommendation Engines"],
    href: "/industries/ecommerce"
  },
  {
    icon: <Truck className="w-8 h-8" />,
    name: "Logistics & Supply Chain",
    desc: "Route efficiency algorithms, fuel consumption analytics, and autonomous fleet management.",
    tags: ["Route Optimization", "Demand Forecasting", "Fleet Analytics"],
    href: "/industries/transportation"
  },
  {
    icon: <Factory className="w-8 h-8" />,
    name: "Manufacturing",
    desc: "Smart factory engines, computer vision for quality control, and waste reduction.",
    tags: ["Quality Control", "Supply Chain", "Digital Twins"],
    href: "/industries/manufacturing"
  },
  {
    icon: <Code className="w-8 h-8" />,
    name: "SaaS & Software",
    desc: "Full funnel optimization, feature usage analytics, and predictive churn reduction.",
    tags: ["Funnel Optimization", "Churn Reduction", "Usage Analytics"],
    href: "/industries/saas"
  },
  {
    icon: <Home className="w-8 h-8" />,
    name: "Real Estate",
    desc: "Market intelligence, property valuation models, and lead-to-deal conversion analytics.",
    tags: ["Valuation Models", "Market Intelligence", "Lead Scoring"],
    href: "/industries/real-estate"
  },
  {
    icon: <GraduationCap className="w-8 h-8" />,
    name: "EdTech",
    desc: "Student retention prediction, personalized learning paths, and engagement tracking.",
    tags: ["Retention Prediction", "Personalized Learning", "Engagement"],
    href: "/industries/edtech"
  }
];

export function IndustriesClient() {
  return (
    <div className="pt-32 pb-20 bg-slate-950">
      <div className="container mx-auto px-6 max-w-7xl mb-20 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-display font-bold text-white mb-6"
        >
          Industries We <span className="text-amber-500">Transform</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-400 max-w-3xl mx-auto"
        >
          Tailored AI and Data Science solutions engineered for the specific challenges of your sector.
        </motion.p>
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {detailedIndustries.map((industry, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-900/40 border border-slate-800 rounded-3xl p-8 hover:bg-slate-900/80 transition-all group flex flex-col h-full"
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center text-amber-500 mb-6 group-hover:scale-110 transition-transform">
                {industry.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{industry.name}</h3>
              <p className="text-slate-400 leading-relaxed mb-8 flex-grow">{industry.desc}</p>
              
              <div className="flex flex-wrap gap-2 mt-auto mb-6">
                {industry.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-slate-950 border border-slate-800 rounded-full text-xs text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
              
              {industry.href && (
                <Link href={industry.href} className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 font-semibold transition-colors mt-auto">
                  Explore Solutions <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
