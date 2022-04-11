
import HeroImage from '../components/hero_section/HeroSection';
import TopUniversity from '../components/TopUniversity';
import ValueProposition from '../components/value_proposition/ValueProposition';
import Header from '../components/global/Header';
import TrustedCompanies from '../components/TrustedCompanies';
import MediaPresence from '../components/media_presence/MediaPresence';
import Footer from '../components/global/footer/Footer';


export default function Home() {
  return (
    
    <>
      <Header />
      <HeroImage />
      <TopUniversity />
      <ValueProposition />
      <TrustedCompanies />
      <MediaPresence />
      <Footer />
    </>
  )
}