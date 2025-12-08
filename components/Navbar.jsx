'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import Image from 'next/image'
import { useTheme } from './ThemeProvider'

const navLinks = [
  { name: 'Acasă', href: '#acasa' },
  { name: 'Despre', href: '#despre' },
  { name: 'Servicii', href: '#servicii' },
  { name: 'Ajutor', href: '#faq' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#acasa" className="flex items-center gap-2">
            <Image
              src="/thumbnails/service-icon.png"
              alt="Logo"
              width={32}
              height={32}
              className="rounded-lg object-cover"
            />
            <span className="text-xl font-semibold text-neutral-text dark:text-white">
              Dr. Evelin Andreea Iacomi
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-neutral-text dark:text-gray-300 hover:text-sage-500 dark:hover:text-sage-400 transition-colors duration-200 font-medium"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-sage-100 dark:bg-slate-800 text-sage-600 dark:text-sage-400 hover:bg-sage-200 dark:hover:bg-slate-700 transition-colors"
              aria-label="Schimbă tema"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <a href="#contact" className="btn-primary">
              Programare
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-sage-100 dark:bg-slate-800 text-sage-600 dark:text-sage-400"
              aria-label="Schimbă tema"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <button
              className="p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Meniu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-neutral-text dark:text-white" />
              ) : (
                <Menu className="w-6 h-6 text-neutral-text dark:text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-slate-900 border-t dark:border-slate-800"
          >
            <div className="container-custom py-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-neutral-text dark:text-gray-300 hover:text-sage-500 dark:hover:text-sage-400 transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="btn-primary w-full text-center"
                onClick={() => setIsOpen(false)}
              >
                Programare
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
