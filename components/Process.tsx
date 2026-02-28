'use client';

import { motion } from 'motion/react';
import { Search, Map, Rocket, Layers, Headphones } from 'lucide-react';

const steps = [
  {
    icon: <Search className="w-6 h-6" />,
    title: "Discovery",
    desc: "Understanding your business problems and goals."
  },
  {
    icon: <Map className="w-6 h-6" />,
    title: "Data Extraction",
    desc: "Collecting and processing necessary data."
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Model Development",
    desc: "Building custom AI or analytics models."
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Deployment",
    desc: "Implementing directly into your system."
  },
  {
    icon: <Headphones className="w-6 h-6" />,
    title: "Ongoing Support",
    desc: "Regular updates and optimization."
  }
];

export function Process() {
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
            The Engagement Model
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400"
          >
            Our proven process for delivering exceptional results.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 -translate-y-1/2 hidden lg:block" />
          
          <div className="grid lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-slate-900 border-2 border-amber-500 flex items-center justify-center text-amber-500 mb-6 shadow-[0_0_30px_rgba(245,158,11,0.2)]">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
