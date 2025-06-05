
import { Check, QrCode, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Benefits = () => {
  const benefits = [
    {
      icon: Check,
      title: '40% do salário sem juros',
      description: 'Tenha acesso imediato à uma parte da sua remuneração mensal sem taxas abusivas ou juros.'
    },
    {
      icon: QrCode,
      title: 'Compra via QR Code, zero cartão',
      description: 'Pague as suas compras escaneando o QR Code direto no app, sem precisar de cartão físico.'
    },
    {
      icon: Heart,
      title: 'Fortalece o comércio local',
      description: 'Ajudando os comerciantes da sua cidade a crescerem junto com você.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-[1280px]">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-extrabold text-4xl md:text-5xl text-black mb-4">
            Saúde financeira & fôlego no fim do mês
          </h2>
          <p className="font-montserrat text-lg text-gray-600 max-w-3xl mx-auto">
            Com a TopConta, a qualquer momento você pode usar até 40% do seu próximo salário 
            sem juros, sem cartão, para comprar o que você quiser nos nossos parceiros e pagar 
            só dias para pagar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-6">
                <benefit.icon className="w-8 h-8 text-gray-600" />
              </div>
              <h3 className="font-montserrat font-bold text-xl text-black mb-4">
                {benefit.title}
              </h3>
              <p className="font-montserrat text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-orange-primary hover:bg-orange-secondary text-white rounded-full px-8 py-4 font-montserrat font-bold">
            Liberar meu limite agora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
