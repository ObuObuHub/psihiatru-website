'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Brain,
  Facebook,
} from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    label: 'Telefon',
    value: '+40 732 864 814',
    href: 'tel:+40732864814',
  },
  {
    icon: MapPin,
    label: 'Adresă',
    value: 'Str. Fagului nr 4, Iași\nClinica Equilibrium, str. Potcoavei nr 2, Iași',
    href: '#',
  },
]

const schedule = [
  { day: 'Luni - Vineri', hours: '09:00 - 17:00' },
  { day: 'Sâmbătă', hours: '09:00 - 14:00' },
  { day: 'Duminică', hours: 'Închis' },
]

const quickLinks = [
  { name: 'Acasă', href: '#acasa' },
  { name: 'Despre', href: '#despre' },
  { name: 'Servicii', href: '#servicii' },
  { name: 'FAQ', href: '#faq' },
]

const facebookUrl = 'https://www.facebook.com/profile.php?id=100089959275594&sfnsn=wa&ref=1'

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <footer id="contact" className="bg-neutral-text dark:bg-slate-950 text-white">
      {/* Main Footer */}
      <div className="container-custom py-16 md:py-20">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="#acasa" className="flex items-center gap-2 mb-6">
              <Brain className="w-8 h-8 text-sage-400" />
              <span className="text-xl font-semibold">Dr. Evelin Andreea Iacomi</span>
            </a>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Oferim servicii complete de psihiatrie și psihoterapie, într-un
              mediu sigur și confidențial. Sănătatea dumneavoastră mintală este
              prioritatea noastră.
            </p>
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#1877F2] hover:bg-[#166FE5] rounded-lg text-white font-medium transition-colors"
            >
              <Facebook className="w-5 h-5" />
              <span>Facebook</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Navigare Rapidă</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-sage-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              {contactInfo.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="flex items-start gap-3 text-gray-400 hover:text-sage-400 transition-colors group"
                  >
                    <item.icon className="w-5 h-5 text-sage-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="block text-xs text-gray-500 mb-1">
                        {item.label}
                      </span>
                      <span className="group-hover:text-sage-400 whitespace-pre-line">
                        {item.value}
                      </span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Schedule */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Program</h3>
            <div className="flex items-start gap-3 mb-4">
              <Clock className="w-5 h-5 text-sage-400 mt-0.5 flex-shrink-0" />
              <div className="space-y-2">
                {schedule.map((item) => (
                  <div
                    key={item.day}
                    className="flex justify-between gap-4 text-gray-400"
                  >
                    <span>{item.day}</span>
                    <span className="text-white">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a
              href="tel:+40732864814"
              className="mt-6 inline-flex items-center gap-2 px-5 py-3 bg-sage-500 hover:bg-sage-600 rounded-lg text-white font-medium transition-colors"
            >
              <Phone className="w-4 h-4" />
              Sună acum
            </a>
          </div>
        </motion.div>
      </div>

    </footer>
  )
}
