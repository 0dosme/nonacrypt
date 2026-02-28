'use client';

import { motion } from 'motion/react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-32">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/50 border border-slate-800 text-amber-500 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            Enterprise AI & Data Science
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-white mb-8 leading-[1.1]">
            Transforming Raw Data into <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">Strategic Power.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            We help global enterprises solve complex challenges through Custom AI Solutions, Advanced Data Science, and Real-time Analytics.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/services" className="group flex items-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-full font-semibold transition-all duration-300">
              Explore Our Solutions
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/contact" className="group flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white rounded-full font-semibold transition-all duration-300">
              Book a Consultation
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-slate-400" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
