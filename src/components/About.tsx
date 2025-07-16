import React from 'react';
import { Code, Zap, Users } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Code, label: 'Proyectos Completados', value: '50+', color: 'text-cyan-400' },
    { icon: Users, label: 'Colaboraciones Exitosas', value: '25+', color: 'text-red-400' },
    { icon: Zap, label: 'Años de Experiencia', value: '7+', color: 'text-yellow-400' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-950 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, cyan 1px, transparent 1px),
            radial-gradient(circle at 75% 75%, red 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="text-cyan-400 font-mono text-sm mb-4">
            <Code className="inline w-4 h-4 mr-2" />
            ~/about/initialize
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
            <span className="text-cyan-400">[</span>QUIENES_SOMOS<span className="text-cyan-400">]</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto font-mono">
            <span className="text-cyan-400">&gt;</span> Una fusión de arte, tecnología y cultura. Somos un equipo de creadores versátiles inspirados en el cine, la música, y la globalización que define la nueva generación.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-black text-white mb-6 font-mono">
              <span className="text-red-400">//</span> NUESTRA_MISIÓN
            </h3>
            <div className="space-y-4 text-gray-300 font-mono leading-relaxed">
              <p>
                <span className="text-cyan-400">&gt;</span> No solo creamos visuales; dirigimos experiencias.
                Cada proyecto es una oportunidad para contar una historia única, mezclando la nostalgia del pasado con la innovación del futuro.
              </p>
              <p>
                <span className="text-yellow-400">&gt;</span> Desde VFX con calidad cinematográfica hasta mundos 3D con una dirección de arte impecable,
                creamos piezas que conectan, inspiran y dejan una marca.
              </p>
              <p>
                <span className="text-red-400">&gt;</span> Somos más que un estudio: somos tus colaboradores creativos. Estamos aquí para transformar tus ideas en un producto final memorable.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-black border border-cyan-400/30 p-8 relative">
              {/* Terminal Header */}
              <div className="flex items-center mb-6 border-b border-gray-800 pb-3">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-gray-400 text-xs font-mono ml-4">Estadísticas:</div>
              </div>
              
              <div className="space-y-6">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="bg-gray-900 border border-gray-700 p-3">
                        <IconComponent className={`w-6 h-6 ${stat.color}`} />
                      </div>
                      <div>
                        <div className={`text-2xl font-black ${stat.color} font-mono`}>
                          {stat.value}
                        </div>
                        <div className="text-gray-400 text-sm font-mono">{stat.label}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Glitch Effect */}
              <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-cyan-400 to-transparent opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;