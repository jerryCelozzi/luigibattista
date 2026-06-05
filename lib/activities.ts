export type Activity = {
  slug: string
  title: string
  subtitle: string
  shortDescription: string
  description: string[]
  price: number
  priceLabel: string
  duration: string
  difficulty: 'Facile' | 'Medio' | 'Impegnativo'
  groupSize: string
  included: string[]
  notIncluded: string[]
  itinerary: { time: string; label: string; detail: string }[]
  tags: string[]
  gradient: string
  accent: string
  icon: string
  features: string[]
  from: string
  to: string
}

export const activities: Activity[] = [
  {
    slug: 'escursioni-in-barca',
    title: 'Escursioni in Barca',
    subtitle: 'Esplora le acque cristalline del Mediterraneo',
    shortDescription: 'Esplora calette nascoste, grotte marine e acque cristalline a bordo di imbarcazioni private.',
    description: [
      "Parti con noi per un'avventura unica tra le acque più belle del Mediterraneo. A bordo della nostra imbarcazione privata, esplorerai calette nascoste accessibili solo via mare, grotte mozzafiato e fondali cristallini.",
      'Il tour include soste per snorkeling nelle zone più ricche di vita marina, un pranzo a bordo con prodotti tipici locali e il tramonto più bello che tu abbia mai visto dal mare.',
    ],
    price: 120,
    priceLabel: 'Da €120/persona',
    duration: '8 ore',
    difficulty: 'Facile',
    groupSize: 'Max 10 persone',
    included: [
      'Imbarcazione privata con capitano',
      'Attrezzatura snorkeling completa',
      'Pranzo tipico a bordo',
      'Acqua e bevande analcoliche',
      'Assicurazione inclusa',
    ],
    notIncluded: ['Trasporto al porto', 'Bevande alcoliche', 'Mance (facoltative)'],
    itinerary: [
      { time: '09:00', label: 'Partenza dal porto', detail: 'Accoglienza, briefing di sicurezza e partenza.' },
      { time: '10:30', label: 'Prima sosta snorkeling', detail: 'Caletta segreta con fondali ricchi di vita marina.' },
      { time: '12:30', label: 'Pranzo a bordo', detail: 'Prodotti tipici locali preparati freschi.' },
      { time: '14:30', label: 'Grotta marina', detail: 'Visita della grotta più spettacolare della costa.' },
      { time: '16:00', label: 'Seconda sosta balneare', detail: 'Tempo libero in acque turchesi.' },
      { time: '17:30', label: 'Rientro al porto', detail: 'Navigazione al tramonto verso il porto.' },
    ],
    tags: ['Mare', 'Snorkeling', 'Relax', 'Natura'],
    gradient: 'linear-gradient(135deg, #0c2a4a 0%, #0a4a6e 45%, #0d7a8a 75%, #2dd4bf 100%)',
    accent: '#2dd4bf',
    icon: '⛵',
    features: ['Barca privata', 'Snorkeling incluso', 'Pranzo a bordo'],
    from: 'from-blue-600/15',
    to: 'to-teal-600/15',
  },
  {
    slug: 'tour-culturali',
    title: 'Tour Culturali',
    subtitle: 'Millenni di storia a portata di mano',
    shortDescription: 'Immergiti nella storia millenaria del Mediterraneo con guide esperte.',
    description: [
      "Il Mediterraneo è la culla della civiltà occidentale. Con i nostri tour culturali, ti accompagniamo alla scoperta di siti archeologici, musei d'eccellenza e borghi storici che custodiscono secoli di storia.",
      "Le nostre guide locali certificate ti faranno vivere un'esperienza autentica, lontana dal turismo di massa, con accessi esclusivi e approfondimenti che non troverai in nessuna guida turistica.",
    ],
    price: 85,
    priceLabel: 'Da €85/persona',
    duration: '6 ore',
    difficulty: 'Facile',
    groupSize: 'Max 12 persone',
    included: [
      'Guida locale certificata',
      'Ingressi a musei e siti storici',
      'Degustazione prodotti tipici',
      'Trasporto in minivan privato',
      'Materiale informativo',
    ],
    notIncluded: ['Pasti completi', 'Acquisti personali', 'Mance (facoltative)'],
    itinerary: [
      { time: '09:30', label: 'Raduno e partenza', detail: 'Incontro in piazza centrale con la guida certificata.' },
      { time: '10:00', label: 'Sito archeologico principale', detail: 'Visita guidata approfondita con storia del territorio.' },
      { time: '12:00', label: 'Centro storico', detail: 'Passeggiata tra vicoli e piazze cariche di storia.' },
      { time: '13:30', label: 'Degustazione tipica', detail: 'Prodotti locali presso un artigiano del posto.' },
      { time: '14:30', label: 'Visita al museo', detail: "Collezioni d'arte e reperti della zona." },
      { time: '16:00', label: 'Rientro', detail: 'Trasferimento al punto di partenza.' },
    ],
    tags: ['Cultura', 'Storia', 'Arte', 'Gastronomia'],
    gradient: 'linear-gradient(135deg, #1a0a2e 0%, #2d1b69 45%, #7c3aed 75%, #f59e0b 100%)',
    accent: '#f59e0b',
    icon: '🏛️',
    features: ['Guide locali', 'Musei e siti storici', 'Degustazioni tipiche'],
    from: 'from-amber-600/15',
    to: 'to-orange-600/15',
  },
  {
    slug: 'avventure-subacquee',
    title: 'Avventure Subacquee',
    subtitle: 'Scopri il mondo sommerso del Mediterraneo',
    shortDescription: 'Scopri il mondo sommerso con attrezzatura professionale e istruttori certificati.',
    description: [
      'Sotto la superficie del Mediterraneo si nasconde un mondo di straordinaria bellezza. Con i nostri istruttori PADI certificati, sia i principianti che i sub esperti possono esplorare in sicurezza fondali ricchi di vita marina.',
      "Utilizziamo solo attrezzatura professionale di ultima generazione. I gruppi sono limitati a 6 persone per garantire la massima sicurezza e un'esperienza completamente personalizzata.",
    ],
    price: 150,
    priceLabel: 'Da €150/persona',
    duration: '5 ore',
    difficulty: 'Medio',
    groupSize: 'Max 6 persone',
    included: [
      'Attrezzatura subacquea completa',
      'Istruttore PADI certificato',
      'Briefing di sicurezza dettagliato',
      'Foto subacquee digitali',
      'Certificato di partecipazione',
    ],
    notIncluded: ['Corso di abilitazione (prima volta)', 'Trasporto', 'Pasti'],
    itinerary: [
      { time: '08:30', label: 'Accoglienza e briefing', detail: 'Presentazione team, verifica attrezzatura e sicurezza.' },
      { time: '09:30', label: 'Prima immersione', detail: 'Sito per principianti e intermedi (max 12m di profondità).' },
      { time: '11:00', label: 'Pausa e debriefing', detail: "Analisi dell'immersione e snack rigenerante a bordo." },
      { time: '11:45', label: 'Seconda immersione', detail: 'Sito avanzato con pareti e grotte (per certificati).' },
      { time: '13:30', label: 'Rientro con foto', detail: 'Trasferimento con consegna foto digitali incluse.' },
    ],
    tags: ['Sub', 'Natura', 'Avventura', 'Fotografia'],
    gradient: 'linear-gradient(135deg, #020b18 0%, #0a2a4a 45%, #0369a1 75%, #38bdf8 100%)',
    accent: '#38bdf8',
    icon: '🤿',
    features: ['Attrezzatura inclusa', 'Istruttori certificati', 'Max 6 persone'],
    from: 'from-sky-600/15',
    to: 'to-blue-700/15',
  },
  {
    slug: 'trekking-natura',
    title: 'Trekking & Natura',
    subtitle: 'Panorami mozzafiato tra natura incontaminata',
    shortDescription: 'Percorsi panoramici tra natura incontaminata e vedute mozzafiato sul mare.',
    description: [
      'I nostri trekking ti portano lungo sentieri esclusivi, alcuni dei quali accessibili solo a chi conosce il territorio come le nostre guide. Camminerai tra macchia mediterranea, profumi di mirto e timo, con il mare che brilla in lontananza.',
      'Ogni escursione include soste strategiche per fotografie panoramiche, un picnic in luoghi esclusivi e il racconto della storia geologica e naturalistica del territorio che stai attraversando.',
    ],
    price: 65,
    priceLabel: 'Da €65/persona',
    duration: '7 ore',
    difficulty: 'Medio',
    groupSize: 'Max 15 persone',
    included: [
      'Guida naturalistica esperta',
      'Picnic panoramico con prodotti locali',
      'Acqua durante tutto il percorso',
      'Foto digitali del tour',
      'Mappa del sentiero',
    ],
    notIncluded: [
      'Scarpe da trekking (consigliamo di portarle)',
      'Trasporto al punto di partenza',
      'Attrezzatura personale',
    ],
    itinerary: [
      { time: '07:30', label: 'Raduno al punto di partenza', detail: 'Briefing sul percorso e distribuzione acqua e mappa.' },
      { time: '08:00', label: 'Inizio trekking', detail: 'Partenza lungo il sentiero costiero tra macchia mediterranea.' },
      { time: '10:00', label: 'Prima sosta panoramica', detail: 'Punto panoramico con vista sul golfo — foto imperdibili.' },
      { time: '12:00', label: 'Picnic panoramico', detail: 'Pausa pranzo in un prato con vista esclusiva sul mare.' },
      { time: '13:30', label: 'Percorso di rientro', detail: 'Sentiero alternativo tra uliveti e vigneti storici.' },
      { time: '15:00', label: 'Arrivo e congedo', detail: 'Rientro al punto di partenza con consegna foto digitali.' },
    ],
    tags: ['Trekking', 'Natura', 'Panorami', 'Fotografia'],
    gradient: 'linear-gradient(135deg, #0a1f0a 0%, #14532d 45%, #15803d 75%, #86efac 100%)',
    accent: '#34d399',
    icon: '🏔️',
    features: ['Percorsi esclusivi', 'Foto panoramiche', 'Picnic incluso'],
    from: 'from-emerald-600/15',
    to: 'to-green-700/15',
  },
]

export function getActivity(slug: string): Activity | undefined {
  return activities.find((a) => a.slug === slug)
}
