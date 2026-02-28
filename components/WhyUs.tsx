'use client';

import { motion } from 'motion/react';
import { Target, Lock, Zap } from 'lucide-react';

export function WhyUs() {
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
              Why Choose Us?<br />
              <span className="text-amber-500">The Nonacrypt Edge.</span>
            </h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              We don&apos;t bill by the hour; we work based on Result and Value. Your company&apos;s Intellectual Property is highly secure with us. We design architectures keeping the next decade in mind.
            </p>
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
                icon: <Target className="w-6 h-6 text-amber-500" />,
                title: "Value-Based ROI",
                desc: "Every project we undertake directly helps reduce your costs or increase your revenue."
              },
              {
                icon: <Lock className="w-6 h-6 text-amber-500" />,
                title: "Enterprise-Grade Security",
                desc: "We ensure the privacy and security of your data (GDPR/HIPAA)."
              },
              {
                icon: <Zap className="w-6 h-6 text-amber-500" />,
                title: "Scalable Architecture",
                desc: "We build systems that can grow alongside your business."
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
