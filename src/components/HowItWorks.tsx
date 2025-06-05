
import { ArrowDown } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    { number: '1', title: 'Baixe', description: 'Instale o app TopConta gratuitamente' },
    { number: '2', title: 'Cadastre', description: 'Complete seu perfil em poucos minutos' },
    { number: '3', title: 'Leia QR', description: 'Escaneie o código nas lojas parceiras' },
    { number: '4', title: 'Pague depois', description: 'Tenha até 45 dias para quitar' }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-[1280px]">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl lg:text-5xl text-black mb-4">
            Como funciona
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
              {/* Step Card */}
              <div className="bg-yellow-highlight rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-black text-white rounded-full font-montserrat font-extrabold text-xl mb-4">
                  {step.number}
                </div>
                <h3 className="font-montserrat font-extrabold text-xl text-black mb-2">
                  {step.title}
                </h3>
                <p className="font-montserrat text-black/80">
                  {step.description}
                </p>
              </div>

              {/* Arrow (hidden on last item and mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowDown className="w-6 h-6 text-gray-400 rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
