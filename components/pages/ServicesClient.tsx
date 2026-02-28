'use client';

import { motion } from 'motion/react';
import { Network, Brain, Database, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const detailedServices = [
  {
    id: "advanced-data-analytics",
    title: "Advanced Data Analytics",
    subtitle: "Transforming messy data into a 'Single Source of Truth'",
    icon: <Network className="w-12 h-12 text-amber-500" />,
    description: "We don't just build dashboards; we build cognitive environments. By unifying your fragmented data sources, we create a real-time pulse of your business operations.",
    deliverables: [
      "Executive Dashboards with real-time KPI tracking",
      "Customer Intelligence & Churn Prediction Models",
      "Multi-touch Marketing ROI Attribution",
      "Automated Financial Reporting & Forecasting"
    ]
  },
  {
    id: "ai-development",
    title: "Artificial Intelligence Development",
    subtitle: "Custom AI models trained on your proprietary data",
    icon: <Brain className="w-12 h-12 text-amber-500" />,
    description: "Off-the-shelf AI isn't enough for enterprise dominance. We engineer bespoke machine learning models and LLMs that understand the unique nuances of your specific business.",
    deliverables: [
      "Private LLMs & Context-Aware Corporate Chatbots",
      "Computer Vision for Quality Control & Security",
      "Predictive Modeling for Inventory & Demand",
      "NLP for Automated Customer Support Triage"
    ]
  },
  {
    id: "data-science-engineering",
    title: "Data Science & Engineering",
    subtitle: "The scalable engine powering your intelligence",
    icon: <Database className="w-12 h-12 text-amber-500" />,
    description: "AI is only as good as the data feeding it. We architect robust, scalable, and secure data pipelines that ensure your models are always fed with clean, accurate, and timely data.",
    deliverables: [
      "Automated ETL/ELT Pipeline Architecture",
      "Cloud Data Warehousing (Snowflake, BigQuery)",
      "Real-time Streaming Data Processing",
      "Statistical Modeling & Risk Analysis"
    ]
  }
];

export function ServicesClient() {
  return (
    <div className="pt-32 pb-20 bg-slate-950">
      {/* Hero */}
      <div className="container mx-auto px-6 max-w-7xl mb-24 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-display font-bold text-white mb-6"
        >
          Our <span className="text-amber-500">Services</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-400 max-w-3xl mx-auto"
        >
          Comprehensive data and AI solutions designed to transform your enterprise from data-generating to AI-first.
        </motion.p>
      </div>

      {/* Services List */}
      <div className="container mx-auto px-6 max-w-5xl space-y-32">
        {detailedServices.map((service, idx) => (
          <motion.div 
            key={service.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`flex flex-col ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
          >
            <div className="flex-1 space-y-6">
              <div className="w-20 h-20 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white">{service.title}</h2>
              <p className="text-amber-500 font-medium text-lg">{service.subtitle}</p>
              <p className="text-slate-400 leading-relaxed text-lg">{service.description}</p>
              
              <ul className="space-y-4 pt-4">
                {service.deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-amber-500 flex-shrink-0" />
                    <span className="text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href={`/services/${service.id}`} className="inline-flex items-center gap-2 mt-8 text-amber-500 hover:text-amber-400 font-semibold transition-colors">
                Explore this service <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="flex-1 w-full">
              <div className="aspect-square rounded-3xl bg-slate-900/50 border border-slate-800 p-8 relative overflow-hidden group">
                 <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                 <div className="h-full w-full border border-slate-800/50 rounded-2xl bg-slate-950 flex items-center justify-center">
                    {service.icon}
                 </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
