'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const experiences = [
  'Escursioni in Barca',
  'Tour Culturali',
  'Avventure Subacquee',
  'Trekking & Natura',
  'Esperienza Personalizzata',
]

const contactDetails = [
  {
    label: 'Telefono',
    value: '+39 333 123 4567',
    icon: (
      <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    value: 'info@luigibattista.it',
    icon: (
      <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'Zona Operativa',
    value: 'Costa Amalfitana · Isole Eolie · Sicilia',
    icon: (
      <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
]

type FormState = {
  name: string
  email: string
  guests: string
  experience: string
  date: string
  message: string
}

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    guests: '2',
    experience: '',
    date: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const set = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }))

  return (
    <section id="contatti" className="py-28 relative bg-gradient-to-b from-[#0a0f1e] to-[#020617]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[28rem] h-[28rem] bg-teal-500/6 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl" />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: copy + contact details */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <span className="inline-flex items-center gap-3 text-teal-400 text-xs font-semibold uppercase tracking-[0.25em] mb-4">
              <span className="w-8 h-px bg-teal-400 rounded" />
              Contatti & Prenotazioni
            </span>

            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
              Inizia la tua{' '}
              <span className="text-gradient-gold">Avventura</span>
            </h2>

            <p className="text-white/55 text-lg leading-relaxed mb-10 max-w-md">
              Compila il form e ti risponderemo entro 24 ore con un&apos;offerta su misura per la tua esperienza ideale.
            </p>

            <div className="space-y-6">
              {contactDetails.map((d) => (
                <div key={d.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl glass flex items-center justify-center text-teal-400 flex-shrink-0">
                    {d.icon}
                  </div>
                  <div>
                    <div className="text-white/35 text-[10px] uppercase tracking-widest mb-0.5">{d.label}</div>
                    <div className="text-white font-medium text-sm">{d.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
            className="glass rounded-3xl p-8 border border-white/10"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-14"
              >
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="font-display text-2xl font-bold text-white mb-3">Richiesta Inviata!</h3>
                <p className="text-white/55 text-sm max-w-xs mx-auto">
                  Grazie per il tuo interesse! Ti contatteremo entro 24 ore con la tua offerta personalizzata.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }} className="space-y-5">
                {/* Row: name + guests */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/40 text-[10px] uppercase tracking-widest mb-1.5">Nome</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={set('name')}
                      placeholder="Mario Rossi"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/25 focus:outline-none focus:border-teal-500/50 transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-white/40 text-[10px] uppercase tracking-widest mb-1.5">Ospiti</label>
                    <input
                      type="number"
                      min="1"
                      max="20"
                      value={form.guests}
                      onChange={set('guests')}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-teal-500/50 transition-colors text-sm"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-white/40 text-[10px] uppercase tracking-widest mb-1.5">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={set('email')}
                    placeholder="mario@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/25 focus:outline-none focus:border-teal-500/50 transition-colors text-sm"
                  />
                </div>

                {/* Experience */}
                <div>
                  <label className="block text-white/40 text-[10px] uppercase tracking-widest mb-1.5">Esperienza</label>
                  <select
                    required
                    value={form.experience}
                    onChange={set('experience')}
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0f1e] border border-white/10 text-white focus:outline-none focus:border-teal-500/50 transition-colors text-sm"
                  >
                    <option value="">Seleziona un&apos;esperienza</option>
                    {experiences.map((exp) => (
                      <option key={exp} value={exp}>{exp}</option>
                    ))}
                  </select>
                </div>

                {/* Date */}
                <div>
                  <label className="block text-white/40 text-[10px] uppercase tracking-widest mb-1.5">Data Preferita</label>
                  <input
                    type="date"
                    value={form.date}
                    onChange={set('date')}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-teal-500/50 transition-colors text-sm [color-scheme:dark]"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-white/40 text-[10px] uppercase tracking-widest mb-1.5">Messaggio (opzionale)</label>
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={set('message')}
                    placeholder="Richieste speciali, domande..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/25 focus:outline-none focus:border-teal-500/50 transition-colors resize-none text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold text-base hover:shadow-xl hover:shadow-teal-500/30 hover:scale-[1.02] transition-all duration-300"
                >
                  Invia Richiesta di Prenotazione
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
