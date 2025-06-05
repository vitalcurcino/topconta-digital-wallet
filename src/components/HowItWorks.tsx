
import { Button } from '@/components/ui/button';

const HowItWorks = () => {
  const steps = [
    { number: '1', title: 'Baixe', description: 'Baixe nosso aplicativo gratuitamente' },
    { number: '2', title: 'Cadastre', description: 'Complete seu perfil em poucos minutos' },
    { number: '3', title: 'Leia QR Code', description: 'Escaneie o código nos estabelecimentos' },
    { number: '4', title: 'Pague depois', description: 'Tenha até 45 dias para pagar' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-[1280px]">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-extrabold text-4xl md:text-5xl text-black mb-4">
            Como Funciona?
          </h2>
        </div>

        <div className="bg-black rounded-3xl p-8 md:p-12 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="bg-orange-primary rounded-2xl p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white text-black rounded-full font-montserrat font-extrabold text-xl mb-4">
                  {step.number}
                </div>
                <h3 className="font-montserrat font-bold text-xl text-white mb-2">
                  {step.title}
                </h3>
                <p className="font-montserrat text-white/90 text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button className="bg-orange-primary hover:bg-orange-secondary text-white rounded-full px-8 py-4 font-montserrat font-bold">
            Acessar app TopConta
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
