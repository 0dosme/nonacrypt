'use client';

import { motion } from 'motion/react';
import { BrainCircuit, LineChart, ShieldCheck } from 'lucide-react';

export function About() {
  return (
    <section className="py-32 bg-slate-950 relative border-t border-slate-900">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
              Where Intelligence <br />
              <span className="text-amber-500">Meets Infrastructure.</span>
            </h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              We don&apos;t just create charts or graphs; we build the future of business. Our consultancy firm consists of data scientists and AI engineers who excel at transforming complex datasets into actionable business decisions. Our goal is to transform companies from Data-Driven to AI-First.
            </p>
            <blockquote className="border-l-4 border-amber-500 pl-6 py-2 italic text-xl text-slate-300 font-display">
              &quot;We transform companies from Data-Driven to AI-First.&quot;
            </blockquote>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid gap-6"
          >
            {[
              {
                icon: <BrainCircuit className="w-6 h-6 text-amber-500" />,
                title: "Predictive Ecosystems",
                desc: "Anticipate market shifts before they happen."
              },
              {
                icon: <LineChart className="w-6 h-6 text-amber-500" />,
                title: "Data to Capital",
                desc: "Monetize your existing data infrastructure."
              },
              {
                icon: <ShieldCheck className="w-6 h-6 text-amber-500" />,
                title: "AI-Native Evolution",
                desc: "Seamless transition from legacy to intelligent systems."
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-950 flex items-center justify-center border border-slate-800">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
