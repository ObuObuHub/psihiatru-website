'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Award, Users, BookOpen, Brain, Heart, Shield, Sparkles, FileCheck } from 'lucide-react'
import Image from 'next/image'

const credentials = [
  {
    icon: GraduationCap,
    title: 'Medic Specialist Psihiatru',
    description: 'UMF „Grigore T. Popa" Iași',
  },
  {
    icon: Award,
    title: 'Competențe Psihoterapie',
    description: 'Terapie cognitiv-comportamentală acreditată COPSI',
  },
  {
    icon: Brain,
    title: 'Terapie Dialectic-Comportamentală',
    description: 'Competențe DBT',
  },
  {
    icon: Heart,
    title: 'Schema Terapie',
    description: 'Competențe Schema Therapy',
  },
  {
    icon: Sparkles,
    title: 'Terapie ACT',
    description: 'Terapie prin acceptare și angajament',
  },
  {
    icon: Shield,
    title: 'Protocoale EMDR',
    description: 'Competențe terapie EMDR',
  },
  {
    icon: Users,
    title: 'Membru Colegiul Medicilor',
    description: 'Înregistrat în Registrul Național',
  },
  {
    icon: FileCheck,
    title: 'Membru Colegiul Psihologilor',
    description: 'COPSI',
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
    <section id="despre" className="py-20 md:py-32 bg-white dark:bg-slate-900">
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
            {/* Therapy Session Image */}
            <div className="aspect-[4/3] rounded-2xl shadow-xl overflow-hidden relative">
              <Image
                src="/therapy-session.jpg"
                alt="Dr. Evelin Andreea Iacomi - Sedinta de terapie"
                fill
                className="object-cover"
              />
            </div>

            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute bottom-4 right-4 lg:-bottom-4 lg:-right-4 bg-accent-400 text-white rounded-2xl p-4 lg:p-6 shadow-xl"
            >
              <p className="text-2xl lg:text-4xl font-bold">Empatie</p>
              <p className="text-xs lg:text-sm opacity-90">Dedicație</p>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 bg-sage-100 dark:bg-sage-900/50 text-sage-600 dark:text-sage-400 rounded-full text-sm font-medium mb-4">
              Despre Mine
            </span>

            <h2 className="section-title">
              Dedicat Sănătății Dumneavoastră Mintale
            </h2>

            <p className="text-slate-blue-500 dark:text-gray-300 mb-6 leading-relaxed">
              Cu experiență, dedicație și empatie în domeniul psihiatriei și
              psihoterapiei, misiunea mea este să îmi ajut pacienții să-și recapete
              echilibrul emoțional și să trăiască o viață împlinită. Abordarea mea
              combină cele mai recente cunoștințe medicale cu o înțelegere profundă
              a nevoilor fiecărui pacient.
            </p>

            <p className="text-slate-blue-500 dark:text-gray-300 mb-8 leading-relaxed">
              Cred cu tărie că fiecare persoană merită să fie ascultată și
              înțeleasă. În cabinetul meu, veți găsi un spațiu sigur și
              confidențial unde puteți explora provocările cu care vă confruntați
              și puteți descoperi căi spre vindecare și dezvoltare personală.
            </p>

            {/* Credentials Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {credentials.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-2 p-3 rounded-xl bg-neutral-bg dark:bg-slate-800 hover:bg-sage-50 dark:hover:bg-slate-700 transition-colors min-h-[70px]"
                >
                  <div className="w-8 h-8 bg-sage-100 dark:bg-sage-900/50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-sage-600 dark:text-sage-400" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-neutral-text dark:text-white text-xs leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-slate-blue-400 dark:text-gray-400 text-xs leading-tight mt-0.5">
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
