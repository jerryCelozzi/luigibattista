'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { icon: '⭐', value: '15+', label: 'Anni di Esperienza' },
  { icon: '🗺️', value: '150+', label: 'Escursioni Uniche' },
  { icon: '😊', value: '5,000+', label: 'Clienti Felici' },
  { icon: '💎', value: '98%', label: 'Tasso Soddisfazione' },
]

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })

  return (
    <section id="chi-siamo" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-teal-950/40 via-[#0a0f1e] to-teal-950/40" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/25 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/25 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6" ref={ref}>
        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.75 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
              className="text-center"
            >
              <div className="text-4xl mb-3">{s.icon}</div>
              <div className="font-display text-5xl font-bold text-gradient-gold mb-1">{s.value}</div>
              <div className="text-white/45 text-xs uppercase tracking-[0.18em]">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="text-center"
        >
          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-teal-400 to-transparent mx-auto mb-8" />
          <blockquote className="font-display text-2xl md:text-3xl text-white/65 italic max-w-3xl mx-auto leading-relaxed">
            "Il Mediterraneo non è un'acqua che separa i popoli, ma un mare che li unisce attraverso la bellezza."
          </blockquote>
          <cite className="block mt-5 text-teal-400 text-sm font-medium not-italic tracking-wide">
            — Luigi Battista
          </cite>
        </motion.div>
      </div>
    </section>
  )
}
