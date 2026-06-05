'use client'

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'

const GlobeScene = dynamic(() => import('./three/GlobeScene'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-14 h-14 rounded-full border-2 border-teal-500/20 border-t-teal-500 animate-spin" />
    </div>
  ),
})

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: 'easeOut' },
})

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#020617] via-[#0a0f1e] to-[#0f2535]">
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[28rem] h-[28rem] bg-teal-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-500/6 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-28 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* ── Left: copy ── */}
        <div className="order-2 lg:order-1 z-10">
          {/* Badge */}
          <motion.div {...fade(0.3)} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-teal-500/30 text-teal-400 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            Esperienze Premium nel Mediterraneo
          </motion.div>

          {/* Headline */}
          <motion.h1 {...fade(0.5)} className="font-display text-5xl md:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6">
            Scopri il{' '}
            <span className="text-gradient-teal">Mediterraneo</span>
            <br />
            con{' '}
            <span className="text-gradient-gold">Luigi Battista</span>
          </motion.h1>

          {/* Sub */}
          <motion.p {...fade(0.7)} className="text-white/55 text-lg md:text-xl leading-relaxed max-w-lg mb-10">
            Tour su misura, escursioni indimenticabili e avventure esclusive per chi cerca emozioni autentiche nel cuore del Mediterraneo.
          </motion.p>

          {/* CTAs */}
          <motion.div {...fade(0.9)} className="flex flex-wrap gap-4">
            <a
              href="#esperienze"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold text-base hover:shadow-xl hover:shadow-teal-500/30 hover:scale-105 transition-all duration-300"
            >
              Esplora le Attività
            </a>
            <a
              href="#contatti"
              className="px-8 py-4 rounded-full glass border border-white/20 text-white font-semibold text-base hover:border-teal-500/50 hover:bg-white/10 transition-all duration-300"
            >
              Prenota Ora →
            </a>
          </motion.div>

          {/* Quick stats */}
          <motion.div {...fade(1.1)} className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/10">
            {[
              { val: '15+', lbl: 'Anni di Esperienza' },
              { val: '5K+', lbl: 'Clienti Felici' },
              { val: '98%', lbl: 'Soddisfazione' },
            ].map((s) => (
              <div key={s.lbl}>
                <div className="text-2xl font-bold text-gradient-gold">{s.val}</div>
                <div className="text-white/45 text-xs uppercase tracking-wider mt-0.5">{s.lbl}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Right: 3D Globe ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.3, ease: 'easeOut' }}
          className="order-1 lg:order-2 h-[380px] lg:h-[580px] relative"
        >
          <GlobeScene />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/35"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Scorri</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/35 to-transparent animate-pulse" />
      </motion.div>
    </section>
  )
}
