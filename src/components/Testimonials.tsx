
import { useState } from 'react';
import { ArrowDown } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Maria Silva',
      role: 'Professora Municipal',
      photo: '/lovable-uploads/0fb9463e-ff69-424e-97f8-8b1d6ce78706.png',
      text: 'O TopConta salvou meu mês! Consegui antecipar parte do salário sem juros para uma emergência médica.'
    },
    {
      name: 'João Santos',
      role: 'Fiscal de Obras',
      photo: '/lovable-uploads/823eee57-56d3-4b0f-a1ce-8a7b31c175f1.png',
      text: 'Muito prático usar o QR Code nas compras. E o melhor: 45 dias para pagar sem preocupação.'
    },
    {
      name: 'Ana Costa',
      role: 'Enfermeira UBS',
      photo: '/lovable-uploads/0fb9463e-ff69-424e-97f8-8b1d6ce78706.png',
      text: 'Finalmente uma solução financeira pensada para nós, servidores. Recomendo para todos os colegas!'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="depoimentos" className="py-20 bg-gradient-orange-reverse">
      <div className="container mx-auto px-4 max-w-[1280px]">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            O que dizem os servidores
          </h2>
          <div className="flex items-center justify-center space-x-2">
            <div className="flex text-yellow-highlight text-2xl">
              ★★★★★
            </div>
            <span className="font-montserrat text-white text-lg">4,9/5</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 text-center">
            <div className="mb-8">
              <img 
                src={testimonials[currentTestimonial].photo} 
                alt={`Foto de ${testimonials[currentTestimonial].name}`}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-montserrat font-bold text-xl text-white">
                {testimonials[currentTestimonial].name}
              </h3>
              <p className="font-montserrat text-white/80">
                {testimonials[currentTestimonial].role}
              </p>
            </div>

            <blockquote className="font-montserrat text-lg md:text-xl text-white leading-relaxed mb-8">
              "{testimonials[currentTestimonial].text}"
            </blockquote>

            {/* Navigation */}
            <div className="flex justify-center space-x-4">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              >
                <ArrowDown className="w-5 h-5 text-white rotate-90" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              >
                <ArrowDown className="w-5 h-5 text-white -rotate-90" />
              </button>
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentTestimonial === index ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
