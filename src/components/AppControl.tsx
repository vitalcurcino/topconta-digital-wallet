
const AppControl = () => {
  const features = [
    'Saldo em tempo real',
    'Histórico de compras', 
    'Lembrete de vencimento'
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-[1280px]">
        <div className="bg-black rounded-3xl p-8 md:p-12 text-center">
          <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl text-white mb-8">
            Controle total no app
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="bg-orange-primary rounded-2xl p-6">
                <span className="font-montserrat font-bold text-white text-lg">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppControl;
