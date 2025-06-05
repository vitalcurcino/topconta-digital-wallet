
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import KeyNumbers from '@/components/KeyNumbers';
import Benefits from '@/components/Benefits';
import HumanCare from '@/components/HumanCare';
import HowItWorks from '@/components/HowItWorks';
import WhoWins from '@/components/WhoWins';
import LimitsSlider from '@/components/LimitsSlider';
import Testimonials from '@/components/Testimonials';
import QRCodeCTA from '@/components/QRCodeCTA';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen font-montserrat">
      <Header />
      <Hero />
      <KeyNumbers />
      <Benefits />
      <HumanCare />
      <HowItWorks />
      <WhoWins />
      <LimitsSlider />
      <Testimonials />
      <QRCodeCTA />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
