
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-16" style={{
      backgroundImage: `url('/lovable-uploads/48c46b20-bc6c-4878-a0c0-fe66851b09cc.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="container mx-auto px-4 max-w-[1280px] relative z-10 min-h-screen flex items-center">
        <div className="max-w-[600px] text-white">
          <p className="font-montserrat text-lg mb-4">
            Grátis, sem taxas e com até 40% do salário para usar agora
          </p>
          
          <h1 className="font-montserrat font-extrabold text-5xl md:text-6xl leading-tight mb-8">
            A carteira digital<br />
            do Servidor Municipal
          </h1>

          <Button className="bg-orange-primary hover:bg-orange-secondary text-white rounded-full px-8 py-4 font-montserrat font-bold text-lg">
            Solicitar Saque
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
