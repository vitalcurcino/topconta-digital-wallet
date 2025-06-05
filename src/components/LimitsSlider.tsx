
import { useState } from 'react';
import { ArrowDown } from 'lucide-react';

const LimitsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      salary: 'R$ 1.500',
      limit: 'R$ 600',
      creditCardFee: 'R$ 45',
      topcontaSavings: 'R$ 45',
      description: 'Servidor iniciante'
    },
    {
      salary: 'R$ 3.000',
      limit: 'R$ 1.200',
      creditCardFee: 'R$ 90',
      topcontaSavings: 'R$ 90',
      description: 'Servidor experiente'
    },
    {
      salary: 'R$ 5.000',
      limit: 'R$ 2.000',
      creditCardFee: 'R$ 150',
      topcontaSavings: 'R$ 150',
      description: 'Servidor sênior'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-[1280px]">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl lg:text-5xl text-black mb-4">
            Seu limite personalizado
          </h2>
          <p className="font-montserrat text-lg text-gray-600">
            Veja quanto você pode economizar comparado ao cartão de crédito
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Slider Navigation */}
          <div className="flex justify-center mb-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full mx-2 transition-colors ${
                  currentSlide === index ? 'bg-orange-primary' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          {/* Slider Content */}
          <div className="relative overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0 bg-white p-8 md:p-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="font-montserrat font-extrabold text-2xl text-black mb-2">
                        {slide.description}
                      </h3>
                      <p className="font-montserrat text-gray-600 mb-6">
                        Salário: {slide.salary}
                      </p>
                      
                      <div className="bg-yellow-highlight/20 rounded-2xl p-6">
                        <div className="text-center">
                          <span className="font-montserrat text-sm text-gray-600">Seu limite TopConta</span>
                          <div className="font-montserrat font-extrabold text-4xl text-orange-primary">
                            {slide.limit}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                        <div className="flex justify-between items-center">
                          <span className="font-montserrat text-gray-700">Cartão de crédito</span>
                          <span className="font-montserrat font-bold text-red-600">{slide.creditCardFee}</span>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">Juros mensais típicos</p>
                      </div>

                      <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                        <div className="flex justify-between items-center">
                          <span className="font-montserrat text-gray-700">TopConta</span>
                          <span className="font-montserrat font-bold text-green-600">R$ 0</span>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">Sem juros ou taxas</p>
                      </div>

                      <div className="text-center pt-4">
                        <span className="font-montserrat text-sm text-gray-600">Você economiza</span>
                        <div className="font-montserrat font-extrabold text-2xl text-green-600">
                          {slide.topcontaSavings}/mês
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
              disabled={currentSlide === 0}
              className="p-2 rounded-full bg-gray-200 disabled:opacity-50 hover:bg-gray-300 transition-colors"
            >
              <ArrowDown className="w-5 h-5 text-gray-600 rotate-90" />
            </button>
            <button
              onClick={() => setCurrentSlide(Math.min(slides.length - 1, currentSlide + 1))}
              disabled={currentSlide === slides.length - 1}
              className="p-2 rounded-full bg-gray-200 disabled:opacity-50 hover:bg-gray-300 transition-colors"
            >
              <ArrowDown className="w-5 h-5 text-gray-600 -rotate-90" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LimitsSlider;
