import React from 'react';
import { ArrowDown, Phone, Instagram } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#sobre');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-warm-900 leading-tight">
                Olá, eu sou
                <span className="block text-gradient">Matheus Rocha</span>
              </h1>
              <p className="text-xl md:text-2xl text-warm-700 font-medium">
                Psicólogo Comportamental / Online
                <span className="text-warm-900 font-semibold"><br></br> Terapia Cognitivo-Comportamental</span>
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-warm-600 leading-relaxed">
                Trabalho com uma abordagem colaborativa, focando no <strong>"aqui e agora"</strong> 
                para ajudar você a identificar e desenvolver padrões de pensamento e comportamentos 
                mais funcionais e saudáveis.
              </p>

              <div className="bg-cream-100 p-6 rounded-xl border-l-4 border-warm-500">
                <p className="text-warm-800 font-medium">
                  "A Teriapia é um convite de mergulho no autoconhecimento, consequentemente, na transformação."
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5512992399676"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                Agendar no WhatsApp
              </a>
              <a
                href="https://instagram.com/psicomrocha"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center justify-center gap-2"
              >
                <Instagram size={20} />
                @psicomrocha
              </a>
            </div>
          </div>

          {/* Professional Photo */}
          <div className="relative animate-slide-up">
            <div className="relative">
              {/* Main photo container */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-warm-200 to-cream-200 aspect-[4/5] max-w-md mx-auto">
                {/* Professional photo of Matheus Rocha */}
                <img 
                  fetchPriority="high"
                  decoding="async"                
                  src="/images/rocha-pic.webp" 
                  alt="Matheus Rocha - Psicólogo especialista em Terapia Cognitivo-Comportamental"
                  className="w-full h-full object-cover"
                />
                {/* Overlay with gradient for better text readability */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-warm-900/80 to-transparent p-6">
                  <div className="text-center text-white">
                    <p className="text-lg font-semibold">Matheus Rocha</p>
                    <p className="text-sm opacity-90">Psicólogo CRP 06/198604</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToAbout}
            className="p-2 text-warm-600 hover:text-warm-800 transition-colors"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
