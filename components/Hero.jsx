'use client'

import { motion } from 'framer-motion'
import { Heart, Shield, Clock } from 'lucide-react'
import Image from 'next/image'

const features = [
  { icon: Heart, text: 'Abordare Empatică și Caldă' },
  { icon: Shield, text: 'Tehnici Bazate pe Dovezi Științifice' },
  { icon: Heart, text: 'Terapie Centrată pe Eficiență' },
  { icon: Shield, text: 'Confidențialitate Totală' },
  { icon: Clock, text: 'Programări Flexibile' },
  { icon: Clock, text: 'Programări Rapide în Minim 48 de Ore' },
]

export default function Hero() {
  return (
    <section
      id="acasa"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-sage-50 via-white to-slate-blue-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800" />

      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-sage-200/30 dark:bg-sage-900/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-slate-blue-200/20 dark:bg-slate-blue-900/20 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-sage-100 dark:bg-sage-900/50 text-sage-600 dark:text-sage-400 rounded-full text-sm font-medium mb-6">
              Cabinet Psihiatrie și Psihoterapie
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-text dark:text-white leading-tight mb-6">
              Îngrijire pentru{' '}
              <span className="text-gradient">Mintea și Sufletul</span>{' '}
              Dumneavoastră
            </h1>

            <p className="text-lg md:text-xl text-slate-blue-500 dark:text-gray-300 mb-8 max-w-xl">
              Dr. Evelin Andreea Iacomi – Medic Specialist Psihiatru psihoterapeut
              Cognitiv Comportamentalist acreditat de COPSI, în supervizare, terapeut EMDR
              cu experiență în tratamentul tulburărilor emoționale și psihice, cu îmbinarea
              elementelor de terapie Dialectic-Comportamentală, Schema-terapie și a terapiei ACT.
              Oferim un spațiu sigur pentru vindecarea emoțională, antrenarea abilităților
              sociale și de comunicare, precum și susținerea într-un mod holistic a dezvoltării personale.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#contact" className="btn-primary text-lg px-8 py-4">
                Programează o Consultație
              </a>
              <a
                href="#servicii"
                className="btn-secondary text-lg px-8 py-4"
              >
                Vezi Serviciile
              </a>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-2 text-slate-blue-600 dark:text-gray-300"
                >
                  <feature.icon className="w-4 h-4 md:w-5 md:h-5 text-sage-500 flex-shrink-0" />
                  <span className="font-medium text-xs md:text-sm leading-tight">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <div className="relative">
              {/* Portrait Image */}
              <div className="aspect-[4/5] rounded-2xl shadow-2xl overflow-hidden">
                <Image
                  src="/portrait.jpg"
                  alt="Dr. Cabinet - Medic Psihiatru"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute left-0 md:left-4 lg:-left-4 bottom-20 bg-white dark:bg-slate-800 rounded-xl shadow-lg p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-sage-100 dark:bg-sage-900/50 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-sage-500 dark:text-sage-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-text dark:text-white text-sm">Psihiatru Psihoterapeut</p>
                    <p className="text-sm text-slate-blue-500 dark:text-gray-400">Terapeut EMDR</p>
                  </div>
                </div>
              </motion.div>

              {/* Second Floating Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute right-0 md:right-4 lg:-right-2 top-20 bg-white dark:bg-slate-800 rounded-xl shadow-lg p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent-100 dark:bg-accent-900/50 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-accent-500 dark:text-accent-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-text dark:text-white">Vindecare</p>
                    <p className="text-sm text-slate-blue-500 dark:text-gray-400">Dezvoltare</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
