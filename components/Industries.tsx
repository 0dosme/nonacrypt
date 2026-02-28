'use client';

import { motion } from 'motion/react';
import { Building2, HeartPulse, Zap, Truck, ShoppingCart, Code, Home, Factory, GraduationCap } from 'lucide-react';

const industries = [
  {
    icon: <HeartPulse className="w-6 h-6" />,
    name: "Healthcare",
    desc: "Patient outcome prediction and HIPAA-compliant data security."
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    name: "Finance",
    desc: "Fraud detection and automated credit scoring systems."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    name: "Energy & Oil",
    desc: "Predictive maintenance and supply chain optimization."
  },
  {
    icon: <Truck className="w-6 h-6" />,
    name: "Transportation",
    desc: "Route efficiency and fuel consumption analytics."
  },
  {
    icon: <ShoppingCart className="w-6 h-6" />,
    name: "E-commerce",
    desc: "Predictive growth and scale for high-volume retail."
  },
  {
    icon: <Code className="w-6 h-6" />,
    name: "SaaS & Software",
    desc: "Full funnel optimization and churn reduction."
  },
  {
    icon: <Home className="w-6 h-6" />,
    name: "Real Estate",
    desc: "Market intelligence and lead-to-deal conversion."
  },
  {
    icon: <Factory className="w-6 h-6" />,
    name: "Manufacturing",
    desc: "Smart factory engines and waste reduction."
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    name: "EdTech",
    desc: "Student retention and personalized learning paths."
  }
];

export function Industries() {
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
            Verticals of Expertise
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400"
          >
            The &quot;Hardcore&quot; Industries we dominate.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-amber-500/30 transition-all hover:bg-slate-900/80 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-amber-500 group-hover:scale-110 transition-transform">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{industry.name}</h3>
              </div>
              <p className="text-slate-400 leading-relaxed text-sm">{industry.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
