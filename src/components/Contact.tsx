import React from 'react';
import { Phone, Instagram, Heart, Calendar } from 'lucide-react';


const Contact: React.FC = () => {

  return (
    <section 
      id="contato" 
      className="py-20 bg-white relative"
      style={{ 
        paddingTop: window.innerWidth < 800 ? '2.5rem' : '5rem', 
        paddingBottom: window.innerWidth < 800 ? '2.5rem' : '5rem' 
      }}>
      <div className="container-max section-padding">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-warm-900 mb-6">
            Como <span className="text-gradient">Agendar?</span>
          </h2>
          <p className="text-xl text-warm-700 max-w-2xl mx-auto mb-12">
            Se <span className="bg-warm-800 text-cream-50 px-2 py-1 rounded">INTERESSOU</span> pelo 
            meu trabalho e quer <span className="bg-warm-800 text-cream-50 px-2 py-1 rounded">AGENDAR</span> uma 
            sessão comigo mas não sabe como?
          </p>
          <div className="text-2xl font-bold text-warm-900">
            DEIXA COMIGO!
          </div>
        </div>

        {/* Contact Methods */}
        <div className="mb-16 flex justify-center">
          <div className="bg-white p-8 rounded-2xl shadow-xl max-w-2xl text-center">
            <Calendar className="w-12 h-12 text-warm-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-warm-900 mb-4">
              Pronto para começar sua jornada?
            </h3>
            <p className="text-warm-700 mb-6">
              Agende sua primeira sessão e descubra como a terapia online pode transformar sua vida.
            </p>
            <a
              href="https://wa.me/5512992399676"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 justify-center"
            >
              <Calendar size={20} />
              Agendar Primeira Sessão
            </a>
          </div>
        </div>

        {/* CTA Message */}
        <div className="bg-gradient-to-r from-warm-600 to-warm-500 rounded-2xl p-8 md:p-12 text-white text-center">
          <Heart className="w-16 h-16 mx-auto mb-6 animate-pulse-soft" />
          
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Aguardo sua mensagem!
          </h3>

          
          <div className="text-2xl font-bold mb-6">
            @psicomrocha
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5512992399676"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-warm-700 px-8 py-4 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              Conversar no WhatsApp
            </a>
            
            <a
              href="https://instagram.com/psicomrocha"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <Instagram size={20} />
              Seguir no Instagram
            </a>
          </div>
        </div>

        {/* Decorative thought */}
        <div className="mt-16 text-center">
          <div className="relative inline-block">
            <div className="bg-cream-100 p-6 rounded-2xl border-2 border-warm-300 max-w-md">
              <p className="text-warm-800 font-medium italic">
                "Sua jornada de autoconhecimento e bem-estar começa com uma simples mensagem"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
