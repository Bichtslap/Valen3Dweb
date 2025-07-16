import React from 'react';
import { Film, Box, Palette } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Film,
      title: 'VFX_MASTERY',
      description: 'Explosive visual effects that make reality look boring. We break physics, bend light, and create chaos that looks beautiful.',
      features: ['Particle Mayhem', 'Reality Bending', 'Cinematic Destruction', 'Digital Alchemy'],
      color: 'cyan',
      accent: 'from-cyan-400 to-blue-500'
    },
    {
      icon: Box,
      title: '3D_WORLDS',
      description: 'Crafting digital universes that feel more real than the world outside your window. Every polygon tells a story.',
      features: ['Character Souls', 'Environment Gods', 'Product Perfection', 'Architectural Dreams'],
      color: 'red',
      accent: 'from-red-400 to-pink-500'
    },
    {
      icon: Palette,
      title: 'MOTION_CHAOS',
      description: 'Motion graphics that move minds and shake foundations. We make static content commit suicide.',
      features: ['Logo Resurrection', 'Story Explosions', 'Interface Magic', 'Broadcast Domination'],
      color: 'yellow',
      accent: 'from-yellow-400 to-orange-500'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-black relative">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-400 to-transparent animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="text-cyan-400 font-mono text-sm mb-4">
            <Film className="inline w-4 h-4 mr-2" />
            ~/skills/load_arsenal
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
            <span className="text-red-400">[</span>OUR_ARSENAL<span className="text-red-400">]</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto font-mono">
            <span className="text-red-400">&gt;</span> Tools of digital destruction and creation
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const colorClass = `text-${service.color}-400`;
            const borderClass = `border-${service.color}-400/30`;
            
            return (
              <div 
                key={index} 
                className={`group bg-gray-950 border ${borderClass} hover:border-${service.color}-400 transition-all duration-500 relative overflow-hidden`}
              >
                {/* Glitch Effect */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-${service.color}-400 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000`}></div>
                
                <div className="p-8">
                  <div className={`bg-gray-900 border border-gray-700 p-4 inline-block mb-6 group-hover:bg-${service.color}-400/10 transition-all duration-300`}>
                    <IconComponent className={`w-8 h-8 ${colorClass}`} />
                  </div>
                  
                  <h3 className={`text-2xl font-black ${colorClass} mb-4 font-mono tracking-wider`}>
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed font-mono text-sm">
                    <span className={colorClass}>&gt;</span> {service.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className={`text-${service.color}-400 font-mono text-sm font-bold mb-3`}>
                      // CAPABILITIES:
                    </div>
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="text-gray-400 flex items-center font-mono text-sm">
                        <span className={`w-2 h-2 bg-${service.color}-400 mr-3 animate-pulse`}></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Bottom accent */}
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;