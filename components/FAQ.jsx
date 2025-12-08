'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: 'Cum decurge prima consultație?',
    answer:
      'Prima consultație durează aproximativ 30-60 de minute și constă într-o discuție detaliată despre motivul prezentării, istoricul medical și psihiatric, situația de viață actuală și așteptările dumneavoastră. La final, vom stabili împreună un plan de tratament personalizat.',
  },
  {
    question: 'Cât durează o ședință de terapie?',
    answer:
      'O ședință standard de psihoterapie durează 60 de minute. Frecvența ședințelor este stabilită în funcție de nevoile fiecărui pacient: poate fi săptămânală, la două săptămâni sau lunară, în funcție de evoluție.',
  },
  {
    question: 'Este necesară trimitere de la medicul de familie?',
    answer:
      'Nu, nu aveți nevoie de trimitere pentru a programa o consultație. Puteți contacta cabinetul direct pentru a stabili o programare. Totuși, dacă doriți decontare parțială prin casa de asigurări, este posibil să fie necesară o trimitere.',
  },
  {
    question: 'Ce trebuie să aduc la prima vizită?',
    answer:
      'Vă rugăm să aduceți actul de identitate, biletul de trimitere (dacă este cazul), investigații medicale recente și o listă cu medicamentele pe care le luați în prezent. Dacă ați fost în tratament psihiatric anterior, este util să aduceți și acele documente.',
  },
  {
    question: 'Consultațiile sunt decontate de CNAS?',
    answer:
      'Cabinetul funcționează în colaborare CNAS cu clinica Equilibrium unde puteți beneficia de servicii medicale gratuite prin bilet de trimitere. Pentru servicii de psihoterapie lucrăm în regim de plată directă. Vă eliberăm factură și toate documentele necesare pentru decontare sau deducere fiscală. Pentru informații despre posibilitățile de decontare, vă rugăm să ne contactați direct.',
  },
  {
    question: 'Cât costă o ședință cu plată directă?',
    answer:
      'Pentru o consultație de psihiatrie inițială (60 min) prețul este de 400 de lei, iar pentru o consultație secundară de tip control (40 min), prețul este de 300 de lei. Pentru o ședință de psihoterapie individuală (60 min) prețul este de 250 de lei, iar pentru o ședință de psihoterapie de cuplu sau familie (90 min) prețul este de 400 de lei. Oferim ședințe de terapie grup în colaborare cu clinica Equilibrium cu durata de 3 ore, lunar, cu costul de 100 de lei/ședință.',
  },
]

function FAQItem({ faq, isOpen, onToggle, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="border-b border-gray-200 dark:border-slate-700 last:border-b-0"
    >
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-medium text-neutral-text dark:text-white group-hover:text-sage-600 dark:group-hover:text-sage-400 transition-colors pr-4">
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
            isOpen ? 'bg-sage-500 text-white' : 'bg-sage-100 text-sage-600'
          }`}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-slate-blue-500 dark:text-gray-300 leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="faq" className="py-20 md:py-32 bg-white dark:bg-slate-900">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Header */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32"
          >
            <span className="inline-block px-4 py-2 bg-sage-100 dark:bg-sage-900/50 text-sage-600 dark:text-sage-400 rounded-full text-sm font-medium mb-4">
              Întrebări Frecvente
            </span>

            <h2 className="section-title">
              Aveți întrebări? Găsiți răspunsurile aici
            </h2>

            <p className="section-subtitle mb-8">
              Iată răspunsurile la cele mai frecvente întrebări pe care le primim
              de la pacienții noștri. Nu ezitați să ne contactați pentru orice
              alte nelămuriri.
            </p>

            <div className="p-6 bg-sage-50 dark:bg-slate-800 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-sage-100 dark:bg-sage-900/50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <HelpCircle className="w-6 h-6 text-sage-600 dark:text-sage-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-text dark:text-white mb-2">
                    Nu ați găsit răspunsul?
                  </h3>
                  <p className="text-slate-blue-500 dark:text-gray-300 text-sm mb-4">
                    Contactați-ne direct și vă vom răspunde în cel mai scurt timp
                    posibil.
                  </p>
                  <a
                    href="#contact"
                    className="text-sage-500 hover:text-sage-600 font-medium text-sm inline-flex items-center gap-2"
                  >
                    Contactați-ne
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
              </div>
            </div>
          </motion.div>

          {/* Right Column - FAQ Items */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-neutral-bg dark:bg-slate-800 rounded-2xl p-6 md:p-8"
          >
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                index={index}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
