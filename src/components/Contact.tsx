import React from 'react';
import { Phone, Instagram, Calendar, MessageCircle, Heart, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const contactMethods = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Agendar pelo Link",
      description: "Entre no link do meu perfil e clique em agendar",
      action: "Acessar Perfil",
      href: "https://instagram.com/psicomrocha",
      color: "bg-purple-500 hover:bg-purple-600"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "WhatsApp",
      description: "Entre em contato comigo pelo WhatsApp no número",
      action: "(12) 99239-9676",
      href: "https://wa.me/5512992399676",
      color: "bg-green-500 hover:bg-green-600"
    },
    {
      icon: <Instagram className="w-8 h-8" />,
      title: "Direct Message",
      description: "Entre em contato pela DM de qualquer um dos meus perfis",
      action: "@psicomrocha",
      href: "https://instagram.com/psicomrocha",
      color: "bg-pink-500 hover:bg-pink-600"
    }
  ];

  return (
    <section id="contato" className="py-20 bg-white relative">
      <div className="container-max section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-warm-900 mb-6">
            Como <span className="text-gradient">Agendar?</span>
          </h2>
          <p className="text-xl text-warm-700 max-w-2xl mx-auto mb-8">
            Se <span className="bg-warm-800 text-cream-50 px-2 py-1 rounded">INTERESSOU</span> pelo 
            meu trabalho e quer <span className="bg-warm-800 text-cream-50 px-2 py-1 rounded">AGENDAR</span> uma 
            sessão comigo mas não sabe como?
          </p>
          <div className="text-2xl font-bold text-warm-900">
            DEIXA COMIGO!
          </div>
        </div>

        {/* Contact Methods */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-warm-900 text-center mb-8">
            Existem <span className="bg-warm-800 text-cream-50 px-2 py-1 rounded">TRÊS</span> formas:
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="bg-cream-50 p-8 rounded-2xl card-hover border border-cream-200 text-center"
              >
                <div className="text-warm-600 mb-6 flex justify-center">
                  {method.icon}
                </div>
                
                <h4 className="text-xl font-bold text-warm-900 mb-4">
                  {method.title}
                </h4>
                
                <p className="text-warm-700 mb-6 leading-relaxed">
                  {method.description}
                </p>
                
                <a
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${method.color} text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-block`}
                >
                  {method.action}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Message */}
        <div className="bg-gradient-to-r from-warm-600 to-warm-500 rounded-2xl p-8 md:p-12 text-white text-center">
          <Heart className="w-16 h-16 mx-auto mb-6 animate-pulse-soft" />
          
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Aguardo sua mensagem!
          </h3>

          
          <div className="text-2xl font-bold mb-6">
            @PSICOMROCHA
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
              className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
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
