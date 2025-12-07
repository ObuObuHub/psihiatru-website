'use client'

import { motion } from 'framer-motion'
import { Heart, Shield, Clock } from 'lucide-react'
import Image from 'next/image'

const features = [
  { icon: Heart, text: 'Abordare Empatică' },
  { icon: Shield, text: 'Confidențialitate Totală' },
  { icon: Clock, text: 'Programări Flexibile' },
]

export default function Hero() {
  return (
    <section
      id="acasa"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-sage-50 via-white to-slate-blue-50" />

      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-sage-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-slate-blue-200/20 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-sage-100 text-sage-600 rounded-full text-sm font-medium mb-6">
              Cabinet Psihiatrie și Psihoterapie
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-text leading-tight mb-6">
              Îngrijire pentru{' '}
              <span className="text-gradient">Mintea și Sufletul</span>{' '}
              Dumneavoastră
            </h1>

            <p className="text-lg md:text-xl text-slate-blue-500 mb-8 max-w-xl">
              Dr. Evelin Andreea Iacomi – Medic Specialist Psihiatru psihoterapeut
              Cognitiv Comportamentalist, terapeut EMDR cu experiență în tratamentul
              tulburărilor emoționale și psihice. Oferim un spațiu sigur pentru
              vindecarea și dezvoltarea personală.
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
            <div className="flex flex-wrap gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-2 text-slate-blue-600"
                >
                  <feature.icon className="w-5 h-5 text-sage-500" />
                  <span className="font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Portrait Image */}
              <div className="aspect-[4/5] rounded-2xl shadow-2xl overflow-hidden">
                <Image
                  src="/portrait.jpg"
                  alt="Dr. Cabinet - Medic Psihiatru"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -left-8 bottom-20 bg-white rounded-xl shadow-lg p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-sage-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-text text-sm">Psihiatru</p>
                    <p className="text-sm text-slate-blue-500">terapeut EMDR</p>
                  </div>
                </div>
              </motion.div>

              {/* Second Floating Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -right-4 top-20 bg-white rounded-xl shadow-lg p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-accent-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-text">Vindecare</p>
                    <p className="text-sm text-slate-blue-500">Dezvoltare</p>
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
