'use client'

import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Facebook, Quote } from 'lucide-react'
import Image from 'next/image'

const reviews = [
  {
    initials: 'M.S.',
    text: 'Ma bucur ca primesc ajutorul de la un psihiatru si un psihoterapeut atat de implicat si intelegator cum este doamna Iacomi Evelin. Recomand din tot sufletul si nu imi regret deloc decizia.',
  },
  {
    initials: 'M.P.',
    text: 'După căutări îndelungate, Evelin a fost primul psihiatru care m-a ajutat și înțeles. Recomand cu toată dragostea!',
  },
  {
    initials: 'C.M.',
    text: 'Un medic foarte bine pregătit, un adevărat profesionist! Și, totodată, un om cald, empatic, zâmbitor, cu multa răbdare care îți inspira încredere, optimism și siguranță în a te deschide. Un om și un medic dedicat, care iubește ceea ce face. Recomand din tot sufletul sedintelele cu Evelin!',
  },
  {
    initials: 'E.C.',
    text: 'Un medic profesionist, pasionat, totodată cald și empatic cu pacientii, care inspira optimism și conferă pacientului încrederea de a-si deschide sufletul pentru consultanta.',
  },
  {
    initials: 'A.L.',
    text: 'Evelin este un om care emana caldura sufleteasca si un profesionist plin de entuziasm si intelepciune in domeniul psihoterapiei si psihiatriei. O recomand cu mult drag! Pentru mine Evelin este si va ramane un om de referinta in devenirea mea!',
  },
  {
    initials: 'A.T.',
    text: 'Recomand cu căldură ședintele cu Evelin. O persoana caldă, primitoare, pozitivă, zâmbitoare, care îți oferă siguranța și încrederea de care ai nevoie pentru a te deschide. Un om dedicat, care iubește ceea ce face și se vede asta. Inspiră speranță și optimism. Omul perfect de la care poți primi ajutorul de care ai nevoie, un bun prieten!',
  },
  {
    initials: 'A.H.',
    text: 'O recomand călduros pe Evelin pentru că este o profesionistă entuziastă și conștiincioasă, pasionată de formarea continuă, un om care lucrează cu oamenii într-o manieră plină de respect, empatie, dedicare și delicatețe.',
  },
]

const facebookUrl = 'https://www.facebook.com/profile.php?id=100089959275594&sk=reviews'

export default function ReviewsModal({ isOpen, onClose }) {
  const scrollRef = useRef(null)

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
      // Reset scroll position when modal opens
      if (scrollRef.current) {
        scrollRef.current.scrollTop = 0
      }
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-800 shadow-lg transition-colors"
              aria-label="Închide"
            >
              <X className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </button>

            {/* Scrollable Content */}
            <div ref={scrollRef} className="overflow-y-auto max-h-[90vh]">
              {/* Hero Section */}
              <div className="relative bg-gradient-to-br from-sage-100 via-sage-50 to-white dark:from-sage-900/40 dark:via-slate-800 dark:to-slate-900 px-6 py-10 text-center">
                {/* Decorative circles */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-sage-200/30 dark:bg-sage-800/20 rounded-full blur-2xl" />
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-sage-300/20 dark:bg-sage-700/20 rounded-full blur-3xl" />

                {/* Portrait */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="relative mx-auto mb-5"
                >
                  <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden shadow-xl ring-4 ring-white dark:ring-slate-700">
                    <Image
                      src="/portrait-reviews.jpg"
                      alt="Dr. Evelin Andreea Iacomi"
                      width={160}
                      height={160}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </motion.div>

                {/* Name & Title */}
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-neutral-text dark:text-white mb-2">
                    Dr. Evelin Andreea Iacomi
                  </h2>
                  <p className="text-sage-600 dark:text-sage-400 font-medium mb-4">
                    Medic Specialist Psihiatru Psihoterapeut
                  </p>
                  <p className="text-slate-blue-500 dark:text-gray-400 text-sm">
                    {reviews.length} recenzii de la pacienți
                  </p>
                </motion.div>
              </div>

              {/* Reviews Grid */}
              <div className="px-6 py-8 bg-gray-50 dark:bg-slate-800/50">
                <div className="grid md:grid-cols-2 gap-4">
                  {reviews.map((review, index) => (
                    <motion.div
                      key={review.initials + index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                      className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="flex gap-4">
                        {/* Avatar */}
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-sage-400 to-sage-600 rounded-full flex items-center justify-center shadow-sm">
                          <span className="text-white font-semibold text-sm">
                            {review.initials}
                          </span>
                        </div>
                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <Quote className="w-5 h-5 text-sage-300 dark:text-sage-600 mb-2" />
                          <p className="text-slate-blue-600 dark:text-gray-300 text-sm leading-relaxed">
                            {review.text}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Footer CTA */}
              <div className="bg-gradient-to-r from-sage-500 to-sage-600 dark:from-sage-600 dark:to-sage-700 px-6 py-8 text-center">
                <h3 className="text-white text-lg font-semibold mb-2">
                  Împărtășește experiența ta
                </h3>
                <p className="text-sage-100 text-sm mb-4">
                  Feedback-ul tău ne ajută să îmbunătățim serviciile
                </p>
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-gray-50 rounded-lg text-sage-600 font-medium transition-colors shadow-lg"
                >
                  <Facebook className="w-5 h-5" />
                  Lasă o recenzie pe Facebook
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
