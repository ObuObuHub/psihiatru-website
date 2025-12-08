'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Facebook, Quote } from 'lucide-react'

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
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
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
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700 px-6 py-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-neutral-text dark:text-white">
                Recenzii de la pacienți
              </h2>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Închide"
              >
                <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </button>
            </div>

            {/* Reviews List */}
            <div className="overflow-y-auto px-6 py-4 space-y-4" style={{ maxHeight: 'calc(85vh - 140px)' }}>
              {reviews.map((review, index) => (
                <motion.div
                  key={review.initials}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-gray-50 dark:bg-slate-800 rounded-xl p-4"
                >
                  <div className="flex gap-4">
                    {/* Avatar */}
                    <div className="flex-shrink-0 w-12 h-12 bg-sage-100 dark:bg-sage-900/50 rounded-full flex items-center justify-center">
                      <span className="text-sage-600 dark:text-sage-400 font-semibold text-sm">
                        {review.initials}
                      </span>
                    </div>
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start gap-2">
                        <Quote className="w-4 h-4 text-sage-400 flex-shrink-0 mt-1" />
                        <p className="text-slate-blue-600 dark:text-gray-300 text-sm leading-relaxed">
                          {review.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Footer */}
            <div className="sticky bottom-0 bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700 px-6 py-4">
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-[#1877F2] hover:bg-[#166FE5] rounded-lg text-white font-medium transition-colors"
              >
                <Facebook className="w-5 h-5" />
                Lasă o recenzie pe Facebook
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
