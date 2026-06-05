'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { activities } from '@/lib/activities'
import type { Activity } from '@/lib/activities'

function ActivityCard({ act, index }: { act: Activity; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <Link href={`/escursioni/${act.slug}`} className="block">
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: 'easeOut' }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={`group relative rounded-2xl overflow-hidden glass border border-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer bg-gradient-to-br ${act.from} ${act.to}`}
    >
      {/* Hover glow */}
      <div
        className="absolute -inset-2 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl"
        style={{ background: `radial-gradient(circle at center, ${act.accent}, transparent 70%)` }}
      />

      <div className="relative p-7">
        <span className="text-5xl mb-5 block">{act.icon}</span>

        <h3 className="font-display text-xl font-bold text-white mb-2">{act.title}</h3>

        <p className="text-white/55 text-sm leading-relaxed mb-5">{act.shortDescription}</p>

        <ul className="space-y-1.5 mb-6">
          {act.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm text-white/65">
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: act.accent }} />
              {f}
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between">
          <span className="font-bold text-base" style={{ color: act.accent }}>
            {act.priceLabel}
          </span>
          <span
            className="px-4 py-2 rounded-full text-sm font-semibold text-white transition-all duration-300 group-hover:scale-105"
            style={{
              background: `${act.accent}22`,
              border: `1px solid ${act.accent}50`,
            }}
          >
            Scopri →
          </span>
        </div>
      </div>
    </motion.div>
    </Link>
  )
}

export default function ActivitiesSection() {
  const titleRef = useRef<HTMLDivElement>(null)
  const titleInView = useInView(titleRef, { once: true })

  return (
    <section id="esperienze" className="py-28 relative bg-gradient-to-b from-[#0f2535] to-[#0a0f1e]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/25 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 text-teal-400 text-xs font-semibold uppercase tracking-[0.25em] mb-4"
          >
            <span className="w-8 h-px bg-teal-400 rounded" />
            Le Nostre Esperienze
            <span className="w-8 h-px bg-teal-400 rounded" />
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold text-white mb-5"
          >
            Avventure che{' '}
            <span className="text-gradient-teal">Rimangono nel Cuore</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/45 text-lg max-w-2xl mx-auto"
          >
            Ogni esperienza è progettata per regalare momenti unici e ricordi indimenticabili.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {activities.map((act, i) => (
            <ActivityCard key={act.slug} act={act} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
