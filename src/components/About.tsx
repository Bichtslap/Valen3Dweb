import React from 'react';
import { Code, Zap, Target, User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-black relative">
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
            <User className="inline w-4 h-4 mr-2" />
            ~/valentín_marey
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
            <span className="text-cyan-400">[</span>SOBRE_MÍ<span className="text-cyan-400">]</span>
          </h2>
          
          <div className="text-lg text-gray-400 max-w-4xl mx-auto font-mono leading-relaxed space-y-4">
            <p>
                <span className="text-cyan-400">&gt;</span> Soy Valentín Marey, el artista visual y 3D detrás de Valer Studios. Cansado de la ineficiencia de las grandes agencias, fundé el estudio con un principio simple: <strong className="text-white">resultados de nivel internacional, sin la burocracia.</strong>
            </p>
            <p>
                <span className="text-cyan-400">&gt;</span> Me especializo en contenido de alto impacto para la industria musical y publicitaria, y he tenido el privilegio de colaborar en proyectos para <strong className="text-white">Netflix, Duki y Nicki Nicole.</strong> Mi enfoque es simple: combinar destreza técnica con una dirección creativa clara para entregar un resultado que supere tus expectativas.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
            <div className="bg-black/50 backdrop-blur-sm border border-cyan-400/30 p-8 relative rounded-2xl">
              <div className="flex items-center mb-6 border-b border-gray-800 pb-3">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-gray-400 text-xs font-mono ml-4">core_principles.sh</div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
                <div className="flex flex-col items-center md:items-start space-y-2">
                    <div className="flex items-center space-x-3">
                        <Zap className="w-5 h-5 text-cyan-400" />
                        <h4 className="text-lg font-black text-cyan-400 font-mono">Eficiencia Radical</h4>
                    </div>
                    <p className="text-gray-400 text-sm font-mono">Resultados de alta gama, sin la burocracia de una agencia tradicional.</p>
                </div>
                <div className="flex flex-col items-center md:items-start space-y-2">
                    <div className="flex items-center space-x-3">
                        <Target className="w-5 h-5 text-red-400" />
                        <h4 className="text-lg font-black text-red-400 font-mono">Calidad Obsesiva</h4>
                    </div>
                    <p className="text-gray-400 text-sm font-mono">Atención al detalle que garantiza un resultado final impecable.</p>
                </div>
                <div className="flex flex-col items-center md:items-start space-y-2">
                    <div className="flex items-center space-x-3">
                        <Code className="w-5 h-5 text-yellow-400" />
                        <h4 className="text-lg font-black text-yellow-400 font-mono">Comunicación Directa</h4>
                    </div>
                    <p className="text-gray-400 text-sm font-mono">Hablás directamente conmigo. Cero intermediarios, cero malentendidos.</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;