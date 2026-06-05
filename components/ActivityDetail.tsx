'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import type { Activity } from '@/lib/activities'

const difficultyColor: Record<Activity['difficulty'], string> = {
  Facile: '#34d399',
  Medio: '#f59e0b',
  Impegnativo: '#f87171',
}

type BookingForm = { name: string; email: string; guests: string; date: string; message: string }
const emptyForm: BookingForm = { name: '', email: '', guests: '2', date: '', message: '' }

export default function ActivityDetail({ activity }: { activity: Activity }) {
  const heroRef = useRef<HTMLDivElement>(null)
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState<BookingForm>(emptyForm)
  const [submitted, setSubmitted] = useState(false)
  const set = (f: keyof BookingForm) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [f]: e.target.value }))

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const textY = useTransform(scrollYProgress, [0, 0.6], ['0%', '-15%'])

  return (
    <main className="bg-[#020617] text-white min-h-screen">
      {/* ── Hero parallax ── */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        {/* Parallax background gradient */}
        <motion.div
          style={{ y: bgY, background: activity.gradient }}
          className="absolute inset-0 scale-125 origin-top"
        />

        {/* Darkening overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-[#020617]" />

        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="fixed top-24 left-6 z-40"
        >
          <Link
            href="/#esperienze"
            scroll={true}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/20 text-white/80 hover:text-white text-sm font-medium transition-all hover:border-white/40"
          >
            ← Torna alle Esperienze
          </Link>
        </motion.div>

        {/* Centered hero text */}
        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.7, ease: 'easeOut' }}
            className="text-8xl mb-6 block"
          >
            {activity.icon}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7 }}
            className="font-display text-5xl md:text-7xl font-bold text-white mb-4 leading-tight"
          >
            {activity.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.7 }}
            className="text-white/65 text-xl md:text-2xl max-w-xl"
          >
            {activity.subtitle}
          </motion.p>
        </motion.div>

        {/* Quick stats bar at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="absolute bottom-0 left-0 right-0 z-20 pb-8 px-6"
        >
          <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: 'Durata', value: activity.duration, icon: '⏱️' },
              { label: 'Difficoltà', value: activity.difficulty, icon: '📊', color: difficultyColor[activity.difficulty] },
              { label: 'Gruppo', value: activity.groupSize, icon: '👥' },
              { label: 'Prezzo', value: activity.priceLabel, icon: '💰', color: activity.accent },
            ].map((stat) => (
              <div key={stat.label} className="glass rounded-xl p-4 text-center border border-white/10 backdrop-blur-xl">
                <div className="text-xl mb-1">{stat.icon}</div>
                <div className="text-white/35 text-[10px] uppercase tracking-[0.18em] mb-0.5">{stat.label}</div>
                <div className="font-semibold text-sm" style={{ color: stat.color ?? 'white' }}>
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── Content ── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">

          {/* ── Left: Details (2/3) ── */}
          <div className="lg:col-span-2 space-y-14">

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl font-bold text-white mb-5">
                L&apos;Esperienza
              </h2>
              <div className="space-y-4">
                {activity.description.map((para, i) => (
                  <p key={i} className="text-white/58 leading-relaxed text-base">
                    {para}
                  </p>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                {activity.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full text-xs font-medium glass border border-white/10"
                    style={{ color: activity.accent }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Itinerary timeline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl font-bold text-white mb-8">
                Programma della Giornata
              </h2>
              <div>
                {activity.itinerary.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    viewport={{ once: true }}
                    className="flex gap-5"
                  >
                    {/* Timeline spine */}
                    <div className="flex flex-col items-center flex-shrink-0">
                      <div
                        className="w-3.5 h-3.5 rounded-full mt-1"
                        style={{
                          background: activity.accent,
                          boxShadow: `0 0 10px ${activity.accent}80`,
                        }}
                      />
                      {i < activity.itinerary.length - 1 && (
                        <div
                          className="w-px flex-1 my-1.5"
                          style={{ background: `${activity.accent}25` }}
                        />
                      )}
                    </div>
                    {/* Content */}
                    <div className="pb-7">
                      <div className="flex items-center gap-3 mb-1">
                        <span
                          className="text-xs font-mono font-bold tracking-wider"
                          style={{ color: activity.accent }}
                        >
                          {item.time}
                        </span>
                        <span className="font-semibold text-white text-sm">{item.label}</span>
                      </div>
                      <p className="text-white/45 text-sm leading-relaxed">{item.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Included / Not included */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-5"
            >
              <div className="glass rounded-2xl p-6 border border-white/10">
                <h3 className="font-semibold text-white mb-4 flex items-center gap-2 text-sm uppercase tracking-wider">
                  <span className="text-emerald-400 text-base">✓</span> Cosa è incluso
                </h3>
                <ul className="space-y-2.5">
                  {activity.included.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-white/58">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass rounded-2xl p-6 border border-white/10">
                <h3 className="font-semibold text-white mb-4 flex items-center gap-2 text-sm uppercase tracking-wider">
                  <span className="text-red-400 text-base">✗</span> Non incluso
                </h3>
                <ul className="space-y-2.5">
                  {activity.notIncluded.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-white/58">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400/50 flex-shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* ── Right: Sticky booking box (1/3) ── */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                className="glass rounded-3xl p-7 border border-white/12"
              >
                <AnimatePresence mode="wait">
                  {submitted ? (
                    /* ── Success ── */
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8"
                    >
                      <div className="text-5xl mb-3">🎉</div>
                      <h3 className="font-display text-xl font-bold text-white mb-2">Richiesta Inviata!</h3>
                      <p className="text-white/50 text-sm mb-6">
                        Ti contatteremo entro 24 ore con la tua offerta.
                      </p>
                      <button
                        onClick={() => { setSubmitted(false); setForm(emptyForm); setShowForm(false) }}
                        className="px-5 py-2.5 rounded-xl glass border border-white/20 text-white text-sm hover:border-white/40 transition-all"
                      >
                        ← Nuova Richiesta
                      </button>
                    </motion.div>

                  ) : !showForm ? (
                    /* ── Default: price + CTA ── */
                    <motion.div key="cta" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                      {/* Price */}
                      <div className="mb-6 pb-6 border-b border-white/10">
                        <div className="text-white/35 text-[10px] uppercase tracking-[0.2em] mb-1">A partire da</div>
                        <div className="flex items-end gap-1">
                          <span className="font-display text-5xl font-bold leading-none" style={{ color: activity.accent }}>
                            €{activity.price}
                          </span>
                          <span className="text-white/35 text-sm mb-1">/ persona</span>
                        </div>
                      </div>

                      {/* Quick details */}
                      <div className="space-y-3.5 mb-7">
                        {[
                          { icon: '⏱️', label: 'Durata', value: activity.duration },
                          { icon: '👥', label: 'Gruppo', value: activity.groupSize },
                          { icon: '📊', label: 'Difficoltà', value: activity.difficulty, color: difficultyColor[activity.difficulty] },
                        ].map((item) => (
                          <div key={item.label} className="flex items-center justify-between">
                            <span className="text-white/40 text-sm flex items-center gap-2">
                              <span>{item.icon}</span>{item.label}
                            </span>
                            <span className="text-sm font-medium" style={{ color: item.color ?? 'white' }}>
                              {item.value}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <button
                        onClick={() => setShowForm(true)}
                        className="flex items-center justify-center w-full py-4 rounded-xl font-semibold text-white text-base transition-all duration-300 hover:scale-[1.02] hover:brightness-110"
                        style={{
                          background: `linear-gradient(135deg, ${activity.accent}bb, ${activity.accent})`,
                          boxShadow: `0 8px 32px ${activity.accent}35`,
                        }}
                      >
                        Prenota Questa Esperienza
                      </button>
                      <p className="text-center text-white/25 text-xs mt-3">Risposta garantita entro 24 ore</p>

                      <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-center gap-3 text-white/25 text-xs">
                        <span>✓ Cancellazione gratuita</span>
                        <span>·</span>
                        <span>✓ Pagamento sicuro</span>
                      </div>
                    </motion.div>

                  ) : (
                    /* ── Inline booking form ── */
                    <motion.form
                      key="form"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}
                      className="space-y-4"
                    >
                      {/* Header */}
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-display font-bold text-white text-lg">Prenota</h3>
                        <button
                          type="button"
                          onClick={() => setShowForm(false)}
                          className="text-white/40 hover:text-white text-sm transition-colors"
                        >
                          ✕
                        </button>
                      </div>

                      {/* Experience (read-only) */}
                      <div>
                        <label className="block text-white/35 text-[10px] uppercase tracking-widest mb-1">Esperienza</label>
                        <div
                          className="w-full px-4 py-3 rounded-xl text-sm font-medium border border-white/15"
                          style={{ color: activity.accent, background: `${activity.accent}12` }}
                        >
                          {activity.icon} {activity.title}
                        </div>
                      </div>

                      {/* Name + Guests */}
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-white/35 text-[10px] uppercase tracking-widest mb-1">Nome</label>
                          <input
                            type="text" required value={form.name} onChange={set('name')}
                            placeholder="Mario Rossi"
                            className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-teal-500/50 text-sm transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-white/35 text-[10px] uppercase tracking-widest mb-1">Ospiti</label>
                          <input
                            type="number" min="1" max="20" value={form.guests}
                            onChange={set('guests')}
                            className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-teal-500/50 text-sm transition-colors"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-white/35 text-[10px] uppercase tracking-widest mb-1">Email</label>
                        <input
                          type="email" required value={form.email} onChange={set('email')}
                          placeholder="mario@email.com"
                          className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-teal-500/50 text-sm transition-colors"
                        />
                      </div>

                      {/* Date */}
                      <div>
                        <label className="block text-white/35 text-[10px] uppercase tracking-widest mb-1">Data Preferita</label>
                        <input
                          type="date" value={form.date} onChange={set('date')}
                          className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-teal-500/50 text-sm transition-colors [color-scheme:dark]"
                        />
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-white/35 text-[10px] uppercase tracking-widest mb-1">Note (opzionale)</label>
                        <textarea
                          rows={2} value={form.message} onChange={set('message')}
                          placeholder="Richieste speciali..."
                          className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-teal-500/50 text-sm resize-none transition-colors"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3.5 rounded-xl font-semibold text-white text-sm transition-all duration-300 hover:scale-[1.02] hover:brightness-110"
                        style={{
                          background: `linear-gradient(135deg, ${activity.accent}bb, ${activity.accent})`,
                          boxShadow: `0 6px 24px ${activity.accent}35`,
                        }}
                      >
                        Invia Richiesta
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
