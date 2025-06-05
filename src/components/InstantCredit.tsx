
const InstantCredit = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-primary to-orange-secondary">
      <div className="container mx-auto px-4 max-w-[1280px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center lg:justify-start">
            <img 
              src="/lovable-uploads/823eee57-56d3-4b0f-a1ce-8a7b31c175f1.png" 
              alt="Servidor municipal feliz usando o celular com o app TopConta"
              className="w-full max-w-md rounded-2xl shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="text-white">
            <h2 className="font-montserrat font-extrabold text-4xl md:text-5xl mb-6">
              Crédito instantâneo<br />
              com um toque local
            </h2>
            <p className="font-montserrat text-lg mb-6 leading-relaxed">
              Com a TopConta você antecipa parte da sua remuneração e 
              ainda fortalece os comerciantes parceiros da sua região, 
              gerando desenvolvimento para toda a sua cidade.
            </p>
            <p className="font-montserrat text-lg leading-relaxed">
              Desde da TopConta, toda transação financeira é 
              conectada as cidades brasileiras. Toque econômico e 
              social na sua vida pessoal ajuda a fomentar economia de 
              sua região tornando-a ainda mais próspera.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstantCredit;
