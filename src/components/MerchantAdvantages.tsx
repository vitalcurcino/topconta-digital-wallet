
import { Check } from 'lucide-react';

const MerchantAdvantages = () => {
  const advantages = [
    'Recebimento garantido',
    'Aumento no fluxo de clientes',
    'Sistema simples e seguro'
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-[1280px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img 
              src="/assets/comerciante-parceiro.jpg" 
              alt="Comerciante parceiro"
              className="w-full rounded-2xl shadow-lg"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl text-black mb-6">
              Vantagens para o<br />
              comerciante parceiro
            </h2>
            
            <p className="font-montserrat text-lg text-gray-600 mb-8 leading-relaxed">
              Você passa a fazer parte de um ecossistema que 
              oferece facilidades para servidores municipais comprarem 
              na sua loja antecipadamente e impulsiona sua marca.
            </p>

            <p className="font-montserrat text-lg text-gray-600 mb-8 leading-relaxed">
              É isso que nós fizemos através da nossa app: identificaremos 
              servidores na sua região e ofereceremos a possibilidade de 
              efetuar compras antecipadas nos seus de crédito, 
              em 4 quantos você acha e você ainda nos 
              dá o produto sem nenhuma complicação.
            </p>

            <div className="space-y-4 mb-8">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex-shrink-0 w-6 h-6 bg-orange-primary rounded-full flex items-center justify-center mr-4">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-montserrat text-gray-700">
                    {advantage}
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

export default MerchantAdvantages;
