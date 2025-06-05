
import { Check } from 'lucide-react';

const HumanCare = () => {
  const features = [
    'Saldo em tempo real',
    'Histórico de compras',
    'Lembrete de vencimento'
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-orange-primary/10 to-orange-secondary/10 relative overflow-hidden">
      {/* Background shapes */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-yellow-highlight/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 max-w-[1280px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="relative animate-fade-up">
            <div className="relative">
              <img 
                src="/lovable-uploads/0fb9463e-ff69-424e-97f8-8b1d6ce78706.png" 
                alt="Servidora municipal sorrindo usando o celular com o app TopConta"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
              {/* Yellow curve shape behind */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-yellow-highlight/60 rounded-full blur-sm -z-10"></div>
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-orange-primary/20 rounded-full blur-sm -z-10"></div>
            </div>
          </div>

          {/* Content Column */}
          <div className="animate-fade-up">
            <h3 className="font-montserrat font-extrabold text-3xl md:text-4xl text-black mb-8">
              Controle total no app
            </h3>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex-shrink-0 w-6 h-6 bg-black rounded-full flex items-center justify-center mr-4">
                    <Check className="w-4 h-4 text-white stroke-2" />
                  </div>
                  <span className="font-montserrat text-lg text-gray-700">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HumanCare;
