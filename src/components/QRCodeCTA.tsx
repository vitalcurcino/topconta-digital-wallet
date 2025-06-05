
import { Button } from '@/components/ui/button';

const QRCodeCTA = () => {
  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-4 max-w-[1280px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* QR Code */}
          <div className="flex justify-center lg:justify-start">
            <div className="bg-white p-8 rounded-3xl">
              <div className="w-48 h-48 bg-gray-900 flex items-center justify-center">
                <div className="text-white text-xs text-center">QR CODE</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="text-white">
            <h2 className="font-montserrat font-extrabold text-4xl md:text-5xl mb-6">
              Baixe agora e use<br />
              em segundos
            </h2>
            
            <p className="font-montserrat text-lg text-gray-300 mb-8">
              Comece a usar sua carteira digital em poucos minutos. 
              Sem burocracia, sem complicação.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-orange-primary hover:bg-orange-secondary text-white rounded-full px-6 py-3 font-montserrat font-medium">
                App Store
              </Button>
              <Button className="bg-orange-primary hover:bg-orange-secondary text-white rounded-full px-6 py-3 font-montserrat font-medium">
                Google Play
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QRCodeCTA;
