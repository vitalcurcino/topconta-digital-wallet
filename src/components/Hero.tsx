
import { Button } from '@/components/ui/button';

const Hero = () => {
  const handleStoreClick = (store: string) => {
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        'event': 'cta_download',
        'cta_location': 'hero',
        'store': store
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-32 h-32 bg-yellow-highlight/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-32 left-10 w-48 h-48 bg-yellow-highlight/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 text-yellow-highlight/10 text-[200px] font-montserrat font-extrabold select-none blur-sm">40</div>
        <div className="absolute bottom-1/4 right-1/4 text-yellow-highlight/10 text-[200px] font-montserrat font-extrabold select-none blur-sm">45</div>
      </div>

      <div className="container mx-auto px-4 max-w-[1280px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <div className="max-w-[560px] animate-fade-up">
            <h1 className="font-montserrat font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight text-black mb-6">
              A carteira digital do{' '}
              <span className="relative">
                <span className="relative z-10">Servidor Municipal</span>
                <div className="absolute inset-0 bg-yellow-highlight/60 transform -skew-x-12 -z-10"></div>
              </span>
            </h1>

            <p className="font-montserrat text-lg md:text-xl text-gray-700 mb-8">
              Grátis, sem taxas e com até 40% do salário para usar AGORA.
            </p>

            {/* Store Badges */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button
                onClick={() => handleStoreClick('google-play')}
                variant="outline"
                className="bg-black text-white hover:bg-gray-800 border-black rounded-full px-8 py-3 font-montserrat font-medium h-auto"
              >
                <img src="/assets/google-play-icon.svg" alt="" className="w-5 h-5 mr-2" />
                Google Play
              </Button>
              <Button
                onClick={() => handleStoreClick('app-store')}
                variant="outline"
                className="bg-black text-white hover:bg-gray-800 border-black rounded-full px-8 py-3 font-montserrat font-medium h-auto"
              >
                <img src="/assets/app-store-icon.svg" alt="" className="w-5 h-5 mr-2" />
                App Store
              </Button>
            </div>

            <p className="font-montserrat text-xs text-gray-500">
              Limite visível assim que você instala
            </p>
          </div>

          {/* Mockup Column */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src="/assets/mockup-app.png" 
                alt="TopConta App - Interface da carteira digital"
                className="w-80 md:w-96 h-auto animate-tilt hover:scale-105 transition-transform duration-300"
              />
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-highlight rounded-full animate-bounce"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-orange-primary/20 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
