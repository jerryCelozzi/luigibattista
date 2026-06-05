import HeroSection from '@/components/HeroSection'
import ActivitiesSection from '@/components/ActivitiesSection'
import StatsSection from '@/components/StatsSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-[#020617] text-white overflow-hidden">
      <HeroSection />
      <ActivitiesSection />
      <StatsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
