
const Footer = () => {
  const menuItems = [
    { title: 'Benefícios', href: '#beneficios' },
    { title: 'Como Funciona', href: '#como-funciona' },
    { title: 'Comerciantes', href: '#comerciantes' },
    { title: 'Depoimentos', href: '#depoimentos' },
    { title: 'FAQ', href: '#faq' }
  ];

  const socialLinks = [
    { title: 'Instagram', href: '#', icon: '📷' },
    { title: 'Facebook', href: '#', icon: '📘' },
    { title: 'LinkedIn', href: '#', icon: '💼' },
    { title: 'YouTube', href: '#', icon: '📺' }
  ];

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 max-w-[1280px] py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo Column */}
          <div>
            <img 
              src="/assets/logo-topconta-white.svg" 
              alt="TopConta"
              className="h-8 w-auto mb-4"
            />
            <p className="font-montserrat text-white/80 text-sm leading-relaxed">
              A carteira digital gratuita para servidores municipais. 
              Antecipe seu salário sem juros e fortaleça o comércio local.
            </p>
          </div>

          {/* Menu Links */}
          <div>
            <h3 className="font-montserrat font-bold text-white mb-4">Menu</h3>
            <nav className="space-y-2">
              {menuItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="font-montserrat text-white/80 hover:text-white transition-colors block text-sm"
                >
                  {item.title}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-montserrat font-bold text-white mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.title}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  title={social.title}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Legal Section */}
        <div className="border-t border-white/20 pt-8 space-y-4">
          <p className="font-montserrat text-xs text-white/60 leading-relaxed">
            *Antecipação de até 40% da remuneração líquida, sujeita a aprovação. 
            Valores descontados automaticamente no próximo pagamento. 
            Serviço gratuito, sem juros ou taxas adicionais.
          </p>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
              <span className="font-montserrat text-xs text-white/60">
                CNPJ: 00.000.000/0001-00
              </span>
              <a href="#" className="font-montserrat text-xs text-white/60 hover:text-white/80 transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="font-montserrat text-xs text-white/60 hover:text-white/80 transition-colors">
                Termos de Uso
              </a>
            </div>

            <p className="font-montserrat text-xs text-white/60">
              © 2024 TopConta. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
