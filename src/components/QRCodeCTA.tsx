
import { Button } from '@/components/ui/button';

const QRCodeCTA = () => {
  const handleStoreClick = (store: string) => {
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        'event': 'cta_download',
        'cta_location': 'qr-cta',
        'store': store
      });
    }
  };

  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-4 max-w-[1280px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* QR Code Column */}
          <div className="flex justify-center lg:justify-start animate-fade-up">
            <div className="bg-white p-8 rounded-3xl shadow-2xl">
              <img 
                src="/assets/qr-code-download.png" 
                alt="QR Code para baixar o app TopConta"
                className="w-40 h-40 mx-auto"
              />
              <p className="text-center text-sm text-gray-600 mt-4">
                Escaneie para baixar
              </p>
            </div>
          </div>

          {/* Content Column */}
          <div className="text-white animate-fade-up">
            <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl lg:text-5xl mb-6">
              Baixe{' '}
              <span className="relative">
                <span className="relative z-10">agora</span>
                <div className="absolute inset-0 bg-yellow-highlight/60 transform -skew-x-12 -z-10"></div>
              </span>
              {' '}e use em segundos
            </h2>

            <p className="font-montserrat text-lg text-gray-300 mb-8">
              Comece a usar sua carteira digital em poucos minutos. 
              Sem burocracia, sem complicação.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => handleStoreClick('google-play')}
                className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-3 font-montserrat font-medium h-auto"
              >
                <img src="/assets/google-play-icon.svg" alt="" className="w-5 h-5 mr-2" />
                Google Play
              </Button>
              <Button
                onClick={() => handleStoreClick('app-store')}
                className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-3 font-montserrat font-medium h-auto"
              >
                <img src="/assets/app-store-icon.svg" alt="" className="w-5 h-5 mr-2" />
                App Store
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QRCodeCTA;
