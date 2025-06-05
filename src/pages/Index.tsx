
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import AppControl from '@/components/AppControl';
import InstantCredit from '@/components/InstantCredit';
import HowItWorks from '@/components/HowItWorks';
import HumanCare from '@/components/HumanCare';
import MerchantAdvantages from '@/components/MerchantAdvantages';
import Testimonials from '@/components/Testimonials';
import QRCodeCTA from '@/components/QRCodeCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen font-montserrat">
      <Header />
      <Hero />
      <Benefits />
      <AppControl />
      <InstantCredit />
      <HowItWorks />
      <HumanCare />
      <MerchantAdvantages />
      <Testimonials />
      <QRCodeCTA />
      <Footer />
    </div>
  );
};

export default Index;
