import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#inicio', label: 'Início' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#contato', label: 'Contato' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cream-50/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container-max section-padding">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl lg:text-3xl font-display font-bold text-gradient" style={{ background: 'linear-gradient(to right, #866553, #b5967d)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Matheus Rocha
            </h1>
            <span className="ml-2 text-sm text-warm-600 font-medium">
              Psicólogo
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-warm-700 hover:text-warm-900 font-medium transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-warm-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <button
              onClick={() => scrollToSection('#contato')}
              className="btn-primary ml-4"
            >
              Agendar Consulta
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-warm-700 hover:text-warm-900 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-cream-50/95 backdrop-blur-md shadow-lg border-t border-cream-200">
            <nav className="section-padding py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-warm-700 hover:text-warm-900 font-medium py-2 transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('#contato')}
                className="btn-primary w-full mt-4"
              >
                Agendar Consulta
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
