import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import PriceButton from '@/components/PriceButton'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <FAQ />
      <Footer />
      <PriceButton />
    </main>
  )
}
