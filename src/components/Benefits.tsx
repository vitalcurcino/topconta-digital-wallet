
import { Check, QrCode, Heart } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Check,
      title: '40% do salário sem juros',
      description: 'Antecipe parte da sua remuneração sem taxas abusivas ou juros compostos.'
    },
    {
      icon: QrCode,
      title: 'Compra via QR Code, zero cartão',
      description: 'Pague suas compras escaneando o QR Code direto no app, sem precisar de cartão físico.'
    },
    {
      icon: Heart,
      title: 'Fortalece o comércio local',
      description: 'Ajude os comerciantes da sua cidade a crescer usando o TopConta nos estabelecimentos parceiros.'
    }
  ];

  return (
    <section id="beneficios" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-[1280px]">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl lg:text-5xl text-black mb-4">
            Saúde financeira & fôlego no fim do mês
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="text-center p-6 rounded-2xl hover:shadow-lg transition-all duration-300 animate-fade-up group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-highlight rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-8 h-8 text-black stroke-2" />
              </div>
              <h3 className="font-montserrat font-extrabold text-xl text-black mb-4">
                {benefit.title}
              </h3>
              <p className="font-montserrat text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
