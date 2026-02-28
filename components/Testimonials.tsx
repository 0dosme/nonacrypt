'use client';

import { motion } from 'motion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { Quote } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const testimonials = [
  {
    quote: "EliteAI transformed our entire supply chain. Their predictive models reduced our inventory holding costs by 32% within the first six months. They don't just understand data; they understand business.",
    name: "Sarah Jenkins",
    title: "Chief Operations Officer",
    company: "Global Logistics Corp"
  },
  {
    quote: "We were drowning in fragmented data across 14 different systems. EliteAI built a unified data warehouse and executive dashboard that finally gave us a single source of truth. It's been a game-changer.",
    name: "Marcus Chen",
    title: "VP of Data & Analytics",
    company: "FinTech Solutions Inc."
  },
  {
    quote: "The custom LLM they built for our customer support team handles 60% of our tier-1 tickets automatically, with higher satisfaction scores than our human agents. Incredible ROI.",
    name: "Elena Rodriguez",
    title: "Director of Customer Experience",
    company: "SaaS Enterprise"
  },
  {
    quote: "Their dynamic pricing algorithms helped us expand our margins by 14% during a highly volatile market period. The EliteAI team delivered exactly what they promised, ahead of schedule.",
    name: "David Thompson",
    title: "Chief Financial Officer",
    company: "Retail Innovations"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-slate-950 border-t border-slate-900 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight"
          >
            Client <span className="text-amber-500">Success Stories</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400"
          >
            Don&apos;t just take our word for it. Here is what industry leaders have to say about partnering with us.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto relative"
        >
          {/* Decorative Elements */}
          <div className="absolute -top-10 -left-10 text-slate-800/50 z-0">
            <Quote className="w-32 h-32 rotate-180" />
          </div>
          <div className="absolute -bottom-10 -right-10 text-slate-800/50 z-0">
            <Quote className="w-32 h-32" />
          </div>

          <Swiper
            modules={[Pagination, Autoplay, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true, bulletActiveClass: 'swiper-pagination-bullet-active bg-amber-500' }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="relative z-10 !pb-16"
          >
            {testimonials.map((testimonial, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 md:p-12 text-center">
                  <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-medium mb-10 italic">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">{testimonial.name}</h4>
                    <p className="text-amber-500 font-medium">{testimonial.title}</p>
                    <p className="text-slate-500 text-sm mt-1">{testimonial.company}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
