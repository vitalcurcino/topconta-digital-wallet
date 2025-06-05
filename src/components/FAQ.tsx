
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: 'Existem taxas ou juros?',
      answer: 'Não! O TopConta é 100% gratuito. Não cobramos taxa de adesão, anuidade, juros ou qualquer tarifa escondida. Você só paga aquilo que comprar, sem custos adicionais.'
    },
    {
      question: 'Como funciona a segurança?',
      answer: 'Utilizamos criptografia de ponta e todas as transações são protegidas por autenticação biométrica. Seus dados estão seguros e não compartilhamos informações pessoais com terceiros.'
    },
    {
      question: 'Qual o prazo para pagamento?',
      answer: 'Você tem até 45 dias para quitar suas compras, sem juros ou multas. O desconto é feito automaticamente do seu próximo salário.'
    },
    {
      question: 'Como faço o cadastro?',
      answer: 'Baixe o app, informe seus dados básicos e comprove que é servidor municipal. O processo leva apenas 5 minutos e a aprovação é imediata.'
    },
    {
      question: 'Quais lojas aceitam?',
      answer: 'Temos uma rede crescente de parceiros em várias cidades. No app você encontra o mapa com todas as lojas que aceitam TopConta próximas a você.'
    },
    {
      question: 'Posso parcelar compras?',
      answer: 'O TopConta funciona diferente: você compra à vista nas lojas e tem 45 dias para pagar, sem juros. É mais vantajoso que qualquer parcelamento.'
    },
    {
      question: 'E se esquecer de pagar?',
      answer: 'Enviamos lembretes pelo app e SMS. Caso esqueça, o valor é descontado automaticamente do seu próximo salário, sem multas ou juros de atraso.'
    },
    {
      question: 'Como falar com o suporte?',
      answer: 'Nosso atendimento funciona de segunda a sexta, das 8h às 18h, pelo chat do app, WhatsApp ou telefone. Estamos sempre prontos para ajudar!'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-[1280px]">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl lg:text-5xl text-black mb-4">
            Perguntas Frequentes
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible defaultValue="item-0" className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-gray-200 rounded-2xl px-6 animate-fade-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <AccordionTrigger className="font-montserrat font-bold text-left text-black hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-montserrat text-gray-600 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
