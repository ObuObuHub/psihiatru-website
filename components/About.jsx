'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Award, Users, BookOpen } from 'lucide-react'

const credentials = [
  {
    icon: GraduationCap,
    title: 'Medic Primar Psihiatru',
    description: 'Universitatea de Medicină și Farmacie',
  },
  {
    icon: Award,
    title: 'Competențe Psihoterapie',
    description: 'Terapie cognitiv-comportamentală',
  },
  {
    icon: Users,
    title: 'Membru Colegiul Medicilor',
    description: 'Înregistrat în Registrul Național',
  },
  {
    icon: BookOpen,
    title: 'Formare Continuă',
    description: 'Participare la conferințe și cursuri',
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="despre" className="py-20 md:py-32 bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Image Placeholder */}
            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-sage-100 to-slate-blue-100 shadow-xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/60 flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-sage-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <p className="text-sage-700 font-medium">Fotografie Cabinet</p>
                  <p className="text-sage-600 text-sm">(Înlocuiți cu imagine reală)</p>
                </div>
              </div>
            </div>

            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-accent-400 text-white rounded-2xl p-6 shadow-xl"
            >
              <p className="text-4xl font-bold">15+</p>
              <p className="text-sm opacity-90">Ani Experiență</p>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 bg-sage-100 text-sage-600 rounded-full text-sm font-medium mb-4">
              Despre Mine
            </span>

            <h2 className="section-title">
              Dedicat Sănătății Dumneavoastră Mintale
            </h2>

            <p className="text-slate-blue-500 mb-6 leading-relaxed">
              Cu o experiență de peste 15 ani în domeniul psihiatriei și
              psihoterapiei, am ajutat mii de pacienți să-și recapete echilibrul
              emoțional și să trăiască o viață împlinită. Abordarea mea combină
              cele mai recente cunoștințe medicale cu o înțelegere profundă a
              nevoilor fiecărui pacient.
            </p>

            <p className="text-slate-blue-500 mb-8 leading-relaxed">
              Cred cu tărie că fiecare persoană merită să fie ascultată și
              înțeleasă. În cabinetul meu, veți găsi un spațiu sigur și
              confidențial unde puteți explora provocările cu care vă confruntați
              și puteți descoperi căi spre vindecare și dezvoltare personală.
            </p>

            {/* Credentials Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {credentials.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-neutral-bg hover:bg-sage-50 transition-colors"
                >
                  <div className="w-10 h-10 bg-sage-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-sage-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-text text-sm">
                      {item.title}
                    </h3>
                    <p className="text-slate-blue-400 text-xs">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
