
const KeyNumbers = () => {
  const numbers = [
    {
      number: '5 min',
      label: 'cadastro aprovado'
    },
    {
      number: '7 cliques',
      label: 'acesso à consulta de saldo'
    },
    {
      number: '45 dias',
      label: 'prazo para pagar'
    }
  ];

  return (
    <section className="bg-purple-dark py-16">
      <div className="container mx-auto px-4 max-w-[1280px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-up">
          {numbers.map((item, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-yellow-highlight rounded-full mb-4">
                <span className="font-montserrat font-extrabold text-2xl text-black">
                  {item.number}
                </span>
              </div>
              <p className="font-montserrat text-white text-lg">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyNumbers;
