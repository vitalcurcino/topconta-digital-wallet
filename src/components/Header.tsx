
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { title: 'Benefícios', href: '#beneficios' },
    { title: 'Como Funciona', href: '#como-funciona' },
    { title: 'Comerciantes', href: '#comerciantes' },
    { title: 'Depoimentos', href: '#depoimentos' },
    { title: 'FAQ', href: '#faq' }
  ];

  const handleCTAClick = () => {
    // Track GTM event
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        'event': 'cta_download',
        'cta_location': 'header'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4 max-w-[1280px]">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/assets/logo-topconta.svg" 
              alt="TopConta - Carteira Digital do Servidor Municipal"
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="font-montserrat text-sm font-medium text-gray-700 hover:text-orange-primary transition-colors"
              >
                {item.title}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <Button 
            onClick={handleCTAClick}
            className="hidden md:flex bg-black text-white hover:bg-white hover:text-black border hover:border-black rounded-full px-6 py-2 font-montserrat font-medium transition-all duration-300"
          >
            Baixar o App
          </Button>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className={`w-6 h-0.5 bg-black mb-1 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-black mb-1 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-black transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="font-montserrat text-sm font-medium text-gray-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </a>
              ))}
              <Button 
                onClick={handleCTAClick}
                className="bg-black text-white hover:bg-white hover:text-black border hover:border-black rounded-full px-6 py-2 font-montserrat font-medium transition-all duration-300 mt-4"
              >
                Baixar o App
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
