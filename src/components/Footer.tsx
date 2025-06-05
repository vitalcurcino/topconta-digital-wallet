
const Footer = () => {
  const socialIcons = ['📷', '📘', '💼', '📺'];

  return (
    <footer className="bg-gradient-to-r from-orange-primary to-orange-secondary text-white py-12">
      <div className="container mx-auto px-4 max-w-[1280px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo */}
          <div>
            <img 
              src="/assets/logo-topconta-white.svg" 
              alt="TopConta"
              className="h-8 w-auto mb-4"
            />
          </div>

          {/* Links */}
          <div>
            <h3 className="font-montserrat font-bold mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm">
              <li>Sobre nós</li>
              <li>Como funciona</li>
              <li>Fale conosco</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-montserrat font-bold mb-4">Contatos</h3>
            <p className="text-sm mb-2">contato@topconta.com</p>
            <p className="text-sm mb-4">(11) 99999-9999</p>
            
            <div className="flex space-x-3">
              {socialIcons.map((icon, index) => (
                <div key={index} className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm">
                  {icon}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <p className="text-xs text-white/80 mb-4">
            *Antecipação de até 40% da remuneração líquida, sujeita a aprovação. 
            Valores descontados automaticamente no próximo pagamento. 
            Serviço gratuito, sem juros ou taxas adicionais.
          </p>
          
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-xs space-x-4">
              <span>CNPJ: 00.000.000/0001-00</span>
              <a href="#" className="hover:underline">Política de Privacidade</a>
              <a href="#" className="hover:underline">Termos de Uso</a>
            </div>
            <p className="text-xs">© 2024 TopConta. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
