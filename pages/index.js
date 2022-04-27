
import HeroImage from '../components/hero_section/HeroSection';
import TopUniversity from '../components/top_university/TopUniversity';
import ValueProposition from '../components/value_proposition/ValueProposition';
import Header from '../components/global/header/Header';
import TrustedCompanies from '../components/trusted_companies/TrustedCompanies';
import MediaPresence from '../components/media_presence/MediaPresence';
import Footer from '../components/global/footer/Footer';
import TalkExperts from '../components/global/talk_experts/TalkExperts';


export default function Home() {
  return (
    
    <>
      <Header />
      <HeroImage />
      <TopUniversity />
      <ValueProposition />
      <TrustedCompanies />
      <MediaPresence />
      <TalkExperts />
      <Footer />
    </>
  )
}
