import React from 'react';
import { Monitor, Clock, Shield, CheckCircle, Calendar } from 'lucide-react';

const Services: React.FC = () => {
  const benefits = [
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Comodidade",
      description: "Atendimento no conforto da sua casa"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Flexibilidade", 
      description: "Horários mais acessíveis para você"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Regularidade",
      description: "Maior consistência nas sessões"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Eficácia Comprovada",
      description: "Resultados cientificamente validados"
    }
  ];

  const conditions = [
    "Ansiedade",
    "Depressão", 
    "Estresse",
    "Solidão",
    "Traumas"
  ];

  return (
    <section id="servicos" className="py-20 bg-cream-50 relative">
      <div className="container-max section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-warm-900 mb-6">
            A <span className="text-gradient">Terapia Online</span> se tornou cada vez mais popular com o passar dos anos
          </h2>
          <p className="text-xl text-warm-700 max-w-3xl mx-auto">
            Mas muita gente ainda se pergunta: será que ela é realmente 
            <span className="bg-warm-800 text-cream-50 px-2 py-1 rounded mx-1">EFICAZ?</span>
          </p>
        </div>

        {/* Answer Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-warm-900 mb-4">
              A resposta é <span className="bg-warm-800 text-cream-50 px-3 py-1 rounded">SIM!</span>
            </h3>
            <p className="text-xl text-warm-700 font-medium">
              E A CIÊNCIA PROVA:
            </p>
          </div>

          <div className="bg-cream-100 p-6 md:p-8 rounded-xl mb-8">
            <div className="flex items-start gap-4">
              <div>
                <h4 className="font-bold text-warm-900 mb-2">
                  UMA REVISÃO DE 2021 PUBLICADA NA REVISTA BRASILEIRA DE TERAPIAS COGNITIVAS MOSTROU:
                </h4>
                <p className="text-warm-700 leading-relaxed">
                  A terapia feita pela internet funciona muito bem em problemas como 
                  <span className="bg-warm-800 text-cream-50 px-2 py-1 rounded mx-1">ansiedade</span>,
                  <span className="bg-warm-800 text-cream-50 px-2 py-1 rounded mx-1">depressão</span> e até mesmo a 
                  sensação de <span className="bg-warm-800 text-cream-50 px-2 py-1 rounded mx-1">solidão</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl card-hover shadow-lg text-center"
            >
              <div className="text-warm-600 mb-4 flex justify-center">
                {benefit.icon}
              </div>
              <h3 className="font-bold text-warm-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-warm-600 text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Conditions Treated */}
        <div className="bg-gradient-to-r from-warm-600 to-warm-500 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Ferramentas como a comodidade e a flexibilidade fazem com que seja mais acessível realizar o atendimento
          </h3>
          
          <div className="bg-warm-800 rounded-xl p-6 mb-6">
            <p className="text-xl font-bold mb-2">
              GERANDO ASSIM MAIOR REGULARIDADE NAS SESSÕES
            </p>
          </div>

          <p className="text-lg mb-8 opacity-90">
            Estudos também afirmam ainda que a terapia cognitiva online possui resultados comprovados em diversos tipos de fenômenos, população e contexto
          </p>

          <div className="bg-warm-800 rounded-xl p-6">
            <h4 className="font-bold text-xl mb-4">
              Reduzindo sintomas de:
            </h4>
            <div className="flex flex-wrap justify-center gap-3">
              {conditions.map((condition, index) => (
                <span
                  key={index}
                  className="bg-cream-50 text-warm-800 px-4 py-2 rounded-full font-medium"
                >
                  {condition}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-2xl shadow-xl max-w-2xl mx-auto">
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
              className="btn-primary inline-flex items-center gap-2"
            >
              <Calendar size={20} />
              Agendar Primeira Sessão
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
