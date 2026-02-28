'use client';

import { motion } from 'motion/react';
import { CheckCircle2, XCircle, TrendingUp, Zap, DollarSign, Clock } from 'lucide-react';

export function Approach() {
  return (
    <section className="py-24 bg-slate-950 border-t border-slate-900">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight"
          >
            Why We Are <span className="text-amber-500">Different</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400"
          >
            We don&apos;t just sell software or generic dashboards. We engineer operational efficiency and measurable profitability tailored to your exact business model.
          </motion.p>
        </div>

        {/* Us vs Them */}
        <div className="grid md:grid-cols-2 gap-8 mb-32">
          {/* Traditional */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900/30 border border-slate-800 rounded-3xl p-8 md:p-10"
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <XCircle className="text-red-500 w-7 h-7" /> Traditional Agencies
            </h3>
            <ul className="space-y-6">
              <li className="flex gap-4 text-slate-400">
                <XCircle className="w-6 h-6 text-red-500/50 flex-shrink-0" /> 
                <span><strong className="text-slate-300">Generic Solutions:</strong> Off-the-shelf AI wrappers that don&apos;t understand your specific business logic or industry nuances.</span>
              </li>
              <li className="flex gap-4 text-slate-400">
                <XCircle className="w-6 h-6 text-red-500/50 flex-shrink-0" /> 
                <span><strong className="text-slate-300">Hourly Billing:</strong> Pricing models that reward slow execution, scope creep, and endless consulting hours.</span>
              </li>
              <li className="flex gap-4 text-slate-400">
                <XCircle className="w-6 h-6 text-red-500/50 flex-shrink-0" /> 
                <span><strong className="text-slate-300">Rearview Analytics:</strong> Siloed dashboards that only show historical data but offer no predictive direction for the future.</span>
              </li>
            </ul>
          </motion.div>

          {/* Us */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 border border-amber-500/30 rounded-3xl p-8 md:p-10 relative overflow-hidden shadow-[0_0_40px_rgba(245,158,11,0.05)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent" />
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3 relative z-10">
              <CheckCircle2 className="text-amber-500 w-7 h-7" /> The Nonacrypt Approach
            </h3>
            <ul className="space-y-6 relative z-10">
              <li className="flex gap-4 text-slate-300">
                <CheckCircle2 className="w-6 h-6 text-amber-500 flex-shrink-0" /> 
                <span><strong className="text-white">Custom Engineering:</strong> Proprietary models trained securely on your own data, perfectly aligned with your workflows.</span>
              </li>
              <li className="flex gap-4 text-slate-300">
                <CheckCircle2 className="w-6 h-6 text-amber-500 flex-shrink-0" /> 
                <span><strong className="text-white">Value-Based ROI:</strong> Partnership models where our success is tied directly to the revenue we generate or costs we cut for you.</span>
              </li>
              <li className="flex gap-4 text-slate-300">
                <CheckCircle2 className="w-6 h-6 text-amber-500 flex-shrink-0" /> 
                <span><strong className="text-white">Predictive Ecosystems:</strong> Forward-looking intelligence that forecasts trends and prescribes highly profitable actions.</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Productivity & Profitability */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight"
          >
            Engineering <span className="text-amber-500">Productivity & Profit</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400"
          >
            Here is exactly how we transform your raw data into a bottom-line advantage.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Productivity */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 md:p-10 hover:border-slate-700 transition-colors"
          >
            <div className="w-16 h-16 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center text-amber-500 mb-8">
              <Zap className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Hyper-Productivity</h3>
            <p className="text-slate-400 mb-8 leading-relaxed text-lg">
              We eliminate operational bottlenecks by automating your most time-consuming workflows. By deploying custom AI and robust data pipelines, we turn 40-hour weekly tasks into 4-second automated processes, freeing your human capital for strategic thinking.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-300">
                <Clock className="w-5 h-5 text-amber-500" /> 
                Automated ETL pipelines replace manual data entry
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <Clock className="w-5 h-5 text-amber-500" /> 
                NLP chatbots handle 80% of tier-1 customer support
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <Clock className="w-5 h-5 text-amber-500" /> 
                Real-time dashboards eliminate weekly reporting delays
              </li>
            </ul>
          </motion.div>

          {/* Profitability */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 md:p-10 hover:border-slate-700 transition-colors"
          >
            <div className="w-16 h-16 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center text-amber-500 mb-8">
              <TrendingUp className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Margin Expansion</h3>
            <p className="text-slate-400 mb-8 leading-relaxed text-lg">
              We identify hidden revenue leaks and optimize your pricing strategies. Our predictive models ensure that every decision you make is mathematically optimized for maximum profitability, directly impacting your bottom line.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-300">
                <DollarSign className="w-5 h-5 text-amber-500" /> 
                Dynamic pricing algorithms to maximize margins
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <DollarSign className="w-5 h-5 text-amber-500" /> 
                Churn prediction models to retain high-value customers
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <DollarSign className="w-5 h-5 text-amber-500" /> 
                Multi-touch attribution to eliminate wasted ad spend
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
