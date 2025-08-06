import React from 'react';
import { Code, Zap, Target, User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-950 relative">
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
            ~/
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
            <span className="text-cyan-400">[</span>SOBRE_MÍ<span className="text-cyan-400">]</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto font-mono">
            <span className="text-cyan-400">&gt;</span> Soy Valentin Marey un generalista 3D, director creativo multidisciplinario y autodidacta desde 2013.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-black text-white mb-6 font-mono">
              <span className="text-red-400">//</span>MI_MANIFIESTO
            </h3>
            <div className="space-y-4 text-gray-300 font-mono leading-relaxed text-base">
              <p>
                <span className="text-cyan-400">&gt;</span> Cansado de la burocracia y la ineficiencia, creé <strong>Valer Studios</strong> como una "One Person Company". Mi modelo es simple: <strong>comunicación directa, cero intermediarios y un enfoque obsesivo en la calidad.</strong>
              </p>
              <p>
                <span className="text-yellow-400">&gt;</span> Me involucro en cada proyecto desde la concepción hasta la entrega, asegurando que tu visión se transforme en un producto final potente y memorable.
              </p>
              <p>
                <span className="text-red-400">&gt;</span> Como generalista, mi fortaleza es la versatilidad. Desde la dirección de arte y 3D hasta la postproducción, controlo cada detalle para garantizar un resultado coherente y de alto impacto.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-black/50 backdrop-blur-sm border border-cyan-400/30 p-8 relative rounded-2xl">
              <div className="flex items-center mb-6 border-b border-gray-800 pb-3">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-gray-400 text-xs font-mono ml-4">core_principles.sh</div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-900 border border-gray-700 p-3 mt-1 rounded-lg">
                    <Zap className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-cyan-400 font-mono">Eficiencia Radical</h4>
                    <p className="text-gray-400 text-sm font-mono">Procesos ágiles para resultados más rápidos y mejores.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-900 border border-gray-700 p-3 mt-1 rounded-lg">
                    <Target className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-red-400 font-mono">Calidad Obsesiva</h4>
                    <p className="text-gray-400 text-sm font-mono">Atención al detalle en cada pixel, frame y sonido.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-900 border border-gray-700 p-3 mt-1 rounded-lg">
                    <Code className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-yellow-400 font-mono">Comunicación Directa</h4>
                    <p className="text-gray-400 text-sm font-mono">Hablás directamente conmigo. Sin demoras.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;