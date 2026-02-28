'use client';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-32 bg-slate-950 relative border-t border-slate-900 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[400px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 leading-tight">
            Ready to Unlock Your <span className="text-amber-500">Data&apos;s Potential?</span>
          </h2>
          
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Let&apos;s discuss how our AI and Data Science solutions can give you a competitive edge.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <a href="/contact" className="group flex items-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-full font-semibold transition-all duration-300">
              Schedule a Free Data Audit
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-left mb-20 border-t border-slate-800/50 pt-16">
            <div>
              <h4 className="text-white font-semibold mb-6">Services</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li><a href="/services/advanced-data-analytics" className="hover:text-amber-500 transition-colors">Advanced Data Analytics</a></li>
                <li><a href="/services/ai-development" className="hover:text-amber-500 transition-colors">AI Development</a></li>
                <li><a href="/services/data-science-engineering" className="hover:text-amber-500 transition-colors">Data Science & Engineering</a></li>
                <li><a href="/services/predictive-modeling" className="hover:text-amber-500 transition-colors">Predictive Modeling</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-6">Industries</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li><a href="/industries/healthcare" className="hover:text-amber-500 transition-colors">Healthcare</a></li>
                <li><a href="/industries/finance" className="hover:text-amber-500 transition-colors">Finance</a></li>
                <li><a href="/industries/energy" className="hover:text-amber-500 transition-colors">Energy & Oil</a></li>
                <li><a href="/industries/transportation" className="hover:text-amber-500 transition-colors">Transportation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-6">Company</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li><a href="/about" className="hover:text-amber-500 transition-colors">About Us</a></li>
                <li><a href="/pricing" className="hover:text-amber-500 transition-colors">Pricing</a></li>
                <li><a href="/contact" className="hover:text-amber-500 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-6">Connect</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition-colors">LinkedIn</a></li>
                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition-colors">Twitter</a></li>
                <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition-colors">GitHub</a></li>
                <li><a href="/contact" className="hover:text-amber-500 transition-colors">Email Us</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row items-center justify-between text-slate-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Nonacrypt. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="/legal#privacy" className="hover:text-amber-500 transition-colors">Privacy Policy</a>
              <a href="/legal#terms" className="hover:text-amber-500 transition-colors">Terms of Service</a>
              <a href="/legal#security" className="hover:text-amber-500 transition-colors">Security</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
