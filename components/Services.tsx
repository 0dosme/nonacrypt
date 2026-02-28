'use client';

import { motion } from 'motion/react';
import { Network, Database, Brain, Cpu, ShieldAlert, LineChart } from 'lucide-react';

const services = [
  {
    category: "Advanced Data Analytics",
    description: "We transform your messy data into a \"Single Source of Truth\".",
    icon: <Network className="w-8 h-8 text-amber-500" />,
    features: [
      { title: "Executive Dashboards", desc: "Real-time business tracking." },
      { title: "Customer Intelligence", desc: "Customer behavior and churn analysis." },
      { title: "Marketing ROI", desc: "Accurate calculation of your ad spend and profit." }
    ]
  },
  {
    category: "Artificial Intelligence (AI) Development",
    description: "Not just general automation, we build custom AI models for your business.",
    icon: <Brain className="w-8 h-8 text-amber-500" />,
    features: [
      { title: "Custom LLMs & Chatbots", desc: "AI assistants trained on your own data." },
      { title: "Computer Vision", desc: "Automated insights from images and video." },
      { title: "Predictive Modeling", desc: "Future sales and inventory forecasting." }
    ]
  },
  {
    category: "Data Science & Engineering",
    description: "If data is your fuel, we are the engine.",
    icon: <Database className="w-8 h-8 text-amber-500" />,
    features: [
      { title: "ETL Pipelines", desc: "Automated data collection and cleaning from various sources." },
      { title: "Data Warehousing", desc: "Scalable data architecture for large companies." },
      { title: "Statistical Modeling", desc: "Solving complex mathematical problems." }
    ]
  }
];

export function Services() {
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
            Strategic Pillars
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400"
          >
            Our core services designed to architect intelligence.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="bg-slate-900/40 border border-slate-800 rounded-3xl p-8 hover:bg-slate-900/80 transition-colors group"
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-8 group-hover:border-amber-500/50 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">{service.category}</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-6">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-slate-200 font-semibold mb-1">{feature.title}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">{feature.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
