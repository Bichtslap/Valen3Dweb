import React from 'react';
import { Box, Wand2, Music, Megaphone, Briefcase } from 'lucide-react';

const Services = () => {
  const colorStyles = {
    cyan: { text: 'text-cyan-400', border: 'border-cyan-400/30', hoverBorder: 'hover:border-cyan-400', bg: 'bg-cyan-400', groupHoverBg: 'group-hover:bg-cyan-400/10', accent: 'from-cyan-400 to-blue-500',},
    red: { text: 'text-red-400', border: 'border-red-400/30', hoverBorder: 'hover:border-red-400', bg: 'bg-red-400', groupHoverBg: 'group-hover:bg-red-400/10', accent: 'from-red-400 to-pink-500',},
    yellow: { text: 'text-yellow-400', border: 'border-yellow-400/30', hoverBorder: 'hover:border-yellow-400', bg: 'bg-yellow-400', groupHoverBg: 'group-hover:bg-yellow-400/10', accent: 'from-yellow-400 to-orange-500',},
    green: { text: 'text-green-400', border: 'border-green-400/30', hoverBorder: 'hover:border-green-400', bg: 'bg-green-400', groupHoverBg: 'group-hover:bg-green-400/10', accent: 'from-green-400 to-teal-500',},
  };
  
  const services = [
    { id: 'motion', icon: Box, title: '3D y Motion', description: 'Creación de mundos, productos y animaciones que desafían la imaginación.', features: ['Generalista 3D (Modelado, Shading, Animación)', 'Motion Graphics Avanzados', 'Visualización de Productos', 'Escenografías Virtuales para Eventos',], color: 'cyan'},
    { id: 'vfx', icon: Wand2, title: 'Post-Producción y VFX', description: 'El toque final que transforma un buen video en una pieza cinematográfica inolvidable.', features: ['Composición VFX en Nuke', 'Colorimetría Profesional', 'Edición Integral de Video', 'Post-Producción para Comerciales y Redes',], color: 'red'},
    { id: 'music', icon: Music, title: 'Contenido para Música y Eventos', description: 'Potenciando la visión de artistas con visuales de alto impacto y narrativas potentes.', features: ['Visualizers para Videoclips', 'Edición y Post de Videoclips', 'Visuales para Shows en Vivo (VJing)', 'Diseño de Arte para Artistas',], color: 'yellow'},
    { id: 'branding', icon: Megaphone, title: 'Branding y Contenido Digital', description: 'Construcción de identidades de marca y contenido que resuena en el ecosistema digital.', features: ['Branding para Marcas y Artistas', 'Diseño Gráfico Integral', 'Piezas para Redes Sociales', 'Estrategia Visual para Campañas',], color: 'green'}
  ];

  return (
    <section id="services" className="py-20 bg-black relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="text-cyan-400 font-mono text-sm mb-4">
            <Briefcase className="inline w-4 h-4 mr-2" />
            ~/services/arsenal
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
            <span className="text-red-400">[</span>MIS_SERVICIOS<span className="text-red-400">]</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto font-mono">
            <span className="text-red-400">&gt;</span> Un arsenal de soluciones creativas para tus proyectos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            // @ts-ignore
            const style = colorStyles[service.color];
            return (
              <div 
                key={service.id} 
                className={`group bg-gray-900/50 backdrop-blur-sm border ${style.border} ${style.hoverBorder} transition-all duration-500 relative overflow-hidden flex flex-col rounded-2xl`}
              >
                <div className={`absolute top-0 left-0 w-full h-1 ${style.bg} transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000`}></div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className={`bg-gray-900 border border-gray-700 p-4 inline-block mb-6 ${style.groupHoverBg} transition-all duration-300 self-start rounded-xl`}>
                    <IconComponent className={`w-8 h-8 ${style.text}`} />
                  </div>
                  <h3 className={`text-2xl font-black ${style.text} mb-4 font-mono tracking-wider`}>{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed font-mono text-sm flex-grow">
                    <span className={style.text}>&gt;</span> {service.description}
                  </p>
                  <div className="space-y-3 mt-auto">
                    <div className={`${style.text} font-mono text-sm font-bold mb-3`}>// HABILIDADES_CLAVE:</div>
                    {service.features.map((feature) => (
                      <div key={feature} className="text-gray-400 flex items-start font-mono text-sm">
                        <span className={`w-2 h-2 ${style.bg} mr-3 mt-1.5 flex-shrink-0 animate-pulse rounded-sm`}></span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${style.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Services;