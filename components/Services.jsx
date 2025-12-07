'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const services = [
  {
    title: 'Consultație Psihiatrică',
    description:
      'Evaluare completă a stării de sănătate mintală, diagnostic și plan de tratament personalizat pentru fiecare pacient.',
    color: 'sage',
    image: '/thumbnails/thumbnail1.jpg',
  },
  {
    title: 'Psihoterapie Individuală',
    description:
      'Ședințe de terapie cognitiv-comportamentală și alte abordări terapeutice adaptate nevoilor dumneavoastră.',
    color: 'slate',
    image: '/thumbnails/thumbnail2.jpg',
  },
  {
    title: 'Evaluare și Diagnostic',
    description:
      'Evaluări psihologice și psihiatrice complete pentru stabilirea unui diagnostic precis și a planului de intervenție.',
    color: 'accent',
    image: '/thumbnails/thumbnail3.jpg',
  },
  {
    title: 'Tratament Anxietate și Depresie',
    description:
      'Tratament specializat pentru tulburări de anxietate, depresie, atacuri de panică și alte afecțiuni emoționale.',
    color: 'sage',
    image: '/thumbnails/thumbnail4.jpg',
  },
  {
    title: 'Tulburări de Somn',
    description:
      'Diagnostic și tratament pentru insomnie, tulburări de ritm circadian și alte probleme legate de somn.',
    color: 'slate',
    image: '/thumbnails/thumbnail5.jpg',
  },
  {
    title: 'Consiliere pentru Familie',
    description:
      'Suport și îndrumare pentru familiile care au nevoie de ajutor în gestionarea problemelor de sănătate mintală.',
    color: 'accent',
    image: '/thumbnails/thumbnail6.jpg',
  },
]

const colorVariants = {
  sage: {
    bg: 'bg-sage-50',
    icon: 'bg-sage-100 text-sage-600',
    hover: 'hover:border-sage-300',
  },
  slate: {
    bg: 'bg-slate-blue-50',
    icon: 'bg-slate-blue-100 text-slate-blue-600',
    hover: 'hover:border-slate-blue-300',
  },
  accent: {
    bg: 'bg-accent-50',
    icon: 'bg-accent-100 text-accent-600',
    hover: 'hover:border-accent-300',
  },
}

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="servicii" className="py-20 md:py-32 bg-neutral-bg">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-sage-100 text-sage-600 rounded-full text-sm font-medium mb-4">
            Servicii
          </span>
          <h2 className="section-title">
            Servicii Complete de Sănătate Mintală
          </h2>
          <p className="section-subtitle mx-auto">
            Oferim o gamă completă de servicii de psihiatrie și psihoterapie,
            adaptate nevoilor individuale ale fiecărui pacient.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const colors = colorVariants[service.color]
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`group p-6 bg-white rounded-2xl border-2 border-transparent ${colors.hover} shadow-sm hover:shadow-md transition-all duration-300`}
              >
                {/* Thumbnail Image as Icon */}
                <div className={`w-14 h-14 ${colors.bg} rounded-xl overflow-hidden mb-5 shadow-sm`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={56}
                    height={56}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-xl font-semibold text-neutral-text mb-3">
                  {service.title}
                </h3>

                <p className="text-slate-blue-500 leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-5 pt-5 border-t border-gray-100">
                  <a
                    href="#contact"
                    className="text-sage-500 hover:text-sage-600 font-medium text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all"
                  >
                    Programează consultație
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
