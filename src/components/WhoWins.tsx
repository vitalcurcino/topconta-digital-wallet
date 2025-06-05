
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhoWins = () => {
  const serverBenefits = [
    'Antecipação sem juros',
    'Pagamento via QR Code',
    'Prazo flexível de 45 dias',
    'Sem anuidade ou taxas escondidas'
  ];

  const merchantBenefits = [
    'Recebimento garantido',
    'Aumento no fluxo de clientes',
    'Sistema simples e seguro',
    'Suporte técnico completo'
  ];

  const handleCTAClick = (type: string) => {
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        'event': type === 'server' ? 'cta_download' : 'cta_parceiro',
        'cta_location': 'who-wins'
      });
    }
  };

  return (
    <section id="comerciantes" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-[1280px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Servidor Column */}
          <div className="bg-gradient-to-br from-purple-dark/5 to-purple-dark/10 rounded-3xl p-8 animate-fade-up">
            <h3 className="font-montserrat font-extrabold text-2xl md:text-3xl text-black mb-8">
              Vantagens para o servidor
            </h3>

            <div className="space-y-4 mb-8">
              {serverBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex-shrink-0 w-6 h-6 bg-purple-dark rounded-full flex items-center justify-center mr-4">
                    <Check className="w-4 h-4 text-white stroke-2" />
                  </div>
                  <span className="font-montserrat text-gray-700">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            <Button 
              onClick={() => handleCTAClick('server')}
              variant="outline"
              className="border-purple-dark text-purple-dark hover:bg-purple-dark hover:text-white rounded-full px-8 py-3 font-montserrat font-medium"
            >
              Quero me cadastrar
            </Button>
          </div>

          {/* Comerciante Column */}
          <div className="bg-gradient-to-br from-orange-primary/5 to-orange-secondary/10 rounded-3xl p-8 animate-fade-up">
            <h3 className="font-montserrat font-extrabold text-2xl md:text-3xl text-black mb-8">
              Vantagens para o comerciante parceiro
            </h3>

            <div className="space-y-4 mb-8">
              {merchantBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex-shrink-0 w-6 h-6 bg-orange-primary rounded-full flex items-center justify-center mr-4">
                    <Check className="w-4 h-4 text-white stroke-2" />
                  </div>
                  <span className="font-montserrat text-gray-700">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            <Button 
              onClick={() => handleCTAClick('merchant')}
              variant="outline"
              className="border-orange-primary text-orange-primary hover:bg-orange-primary hover:text-white rounded-full px-8 py-3 font-montserrat font-medium"
            >
              Quero ser parceiro
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWins;
