import React from 'react';
import { Brain, Heart, Target, Users } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Pensamentos",
      description: "Identificamos padrões de pensamento disfuncionais"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Emoções", 
      description: "Compreendemos como as emoções influenciam nosso comportamento"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Comportamentos",
      description: "Desenvolvemos estratégias mais funcionais e saudáveis"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Colaborativo",
      description: "Trabalho em equipe entre terapeuta e paciente"
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-white relative">
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-warm-900">
                O que é a
                <span className="block text-gradient">Terapia Cognitivo-Comportamental?</span>
              </h2>
              
              <div className="space-y-6 text-warm-700 leading-relaxed">
                <p className="text-lg">
                  Ela é uma abordagem de psicoterapia que tem como foco o 
                  <span className="bg-warm-800 text-cream-50 px-2 py-1 rounded mx-1">"AQUI E AGORA"</span>
                </p>

                <div className="bg-cream-100 p-6 rounded-xl">
                  <p className="font-medium text-warm-800">
                    Para melhor visualização: Nossos pensamentos influenciam nossas emoções e comportamento
                  </p>
                </div>

                <p>
                  Dessa forma, como agimos pode afetar diretamente NOSSOS PADRÕES DE PENSAMENTOS E EMOÇÕES
                </p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-cream-50 p-6 rounded-xl card-hover border border-cream-200"
                >
                  <div className="text-warm-600 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-warm-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-warm-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Key Message */}
            <div className="bg-gradient-to-r from-warm-600 to-warm-500 p-8 rounded-2xl text-white">
              <h3 className="text-xl font-bold mb-4">
                Buscando entender e modificar os padrões de pensamento e comportamentos
              </h3>
              <p className="text-lg font-medium bg-warm-800 px-4 py-2 rounded-lg inline-block">
                DISFUNCIONAIS
              </p>
              <p className="mt-4 opacity-90">
                Realizando dessa forma um trabalho colaborativo que desenvolva um estilo mais saudável e funcional de pensamento e habilidades de enfrentamento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
