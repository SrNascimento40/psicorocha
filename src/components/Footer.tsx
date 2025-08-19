import React from 'react';
import { Phone, Instagram, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-warm-800 text-cream-50 py-12">
      <div className="container-max section-padding">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-bold text-gradient">
              Matheus Rocha
            </h3>
            <p className="text-cream-200">
              Psicólogo Comportamental / Online 
            </p>
            <p className="text-cream-300 text-sm">
              CRP 06/198604
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-cream-100">
              Links Rápidos
            </h4>
            <nav className="space-y-2">
              {[
                { href: '#inicio', label: 'Início' },
                { href: '#sobre', label: 'Sobre a TCC' },
                { href: '#servicos', label: 'Terapia Online' },
                { href: '#contato', label: 'Contato' },
              ].map((link) => (
                <button
                  key={link.href}
                  onClick={() => {
                    const element = document.querySelector(link.href);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-cream-300 hover:text-cream-100 transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-cream-100">
              Contato
            </h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/5512992399676"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-cream-300 hover:text-cream-100 transition-colors duration-200"
              >
                <Phone size={18} />
                <span>(12) 99239-9676</span>
              </a>
              
              <a
                href="https://instagram.com/psicomrocha"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-cream-300 hover:text-cream-100 transition-colors duration-200"
              >
                <Instagram size={18} />
                <span>@psicomrocha</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-warm-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-cream-300 text-sm">
              © {currentYear} Matheus Rocha. Todos os direitos reservados.
            </div>

            {/* Made with love */}
            <div className="flex items-center gap-2 text-cream-300 text-sm">
              <span>Feito com</span>
              <Heart size={16} className="text-red-400 animate-pulse-soft" />
              <span>para ajudar você</span>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-6 text-center">
            <p className="text-cream-400 text-xs leading-relaxed max-w-4xl mx-auto">
              Este site tem caráter informativo e não substitui uma consulta presencial. 
              Em caso de emergência, procure atendimento médico imediato ou ligue para o CVV (188). 
              A terapia online é regulamentada pelo Conselho Federal de Psicologia.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
