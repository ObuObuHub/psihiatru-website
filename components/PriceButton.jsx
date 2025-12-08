'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Info, X } from 'lucide-react'

const prices = [
  { service: 'Consultație psihiatrie inițială', duration: '60 min', price: '400 lei' },
  { service: 'Consultație control', duration: '40 min', price: '300 lei' },
  { service: 'Psihoterapie individuală', duration: '60 min', price: '250 lei' },
  { service: 'Psihoterapie cuplu/familie', duration: '90 min', price: '400 lei' },
  { service: 'Terapie grup (lunar)', duration: '3 ore', price: '100 lei' },
]

export default function PriceButton() {
  const [isOpen, setIsOpen] = useState(false)
  const panelRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  return (
    <div className="fixed bottom-6 right-6 z-40" ref={panelRef}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 w-80 sm:w-96 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-gray-100 dark:border-slate-700 overflow-hidden"
          >
            <div className="bg-sage-500 dark:bg-sage-600 px-4 py-3 flex items-center justify-between">
              <h3 className="text-white font-semibold">Detalii Consultații</h3>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Închide panoul"
                className="text-white/80 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4">
              <div className="space-y-3">
                {prices.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-slate-700 last:border-b-0"
                  >
                    <div className="flex-1 min-w-0 pr-3">
                      <p className="text-sm font-medium text-neutral-text dark:text-white truncate">
                        {item.service}
                      </p>
                      <p className="text-xs text-slate-blue-400 dark:text-gray-400">
                        {item.duration}
                      </p>
                    </div>
                    <span className="text-sm font-semibold text-sage-600 dark:text-sage-400 whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100 dark:border-slate-700">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center py-2.5 bg-accent-400 hover:bg-accent-500 text-white font-medium rounded-lg transition-colors text-sm"
                >
                  Programează Consultație
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Detalii și prețuri consultații"
        aria-expanded={isOpen}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`flex items-center gap-2 px-5 py-3.5 rounded-full shadow-lg transition-colors ${
          isOpen
            ? 'bg-sage-600 dark:bg-sage-700'
            : 'bg-sage-500 dark:bg-sage-600 hover:bg-sage-600 dark:hover:bg-sage-700'
        } text-white font-medium`}
      >
        <Info className="w-5 h-5" />
        <span className="text-sm">Detalii consultații</span>
      </motion.button>
    </div>
  )
}
