import React, { useState } from 'react';
import { ExternalLink, Play, Terminal } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');
  
  const projects = [
    {
      id: 1,
      title: 'NEON_DYSTOPIA',
      category: 'VFX',
      image: 'https://images.pexels.com/photos/2832382/pexels-photo-2832382.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Cyberpunk cityscape that makes Blade Runner look like a documentary.',
      status: 'DEPLOYED',
      tech: ['After Effects', 'Houdini', 'Nuke']
    },
    {
      id: 2,
      title: 'TECH_SHOWCASE',
      category: '3D',
      image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Product visualization that makes reality jealous of its own existence.',
      status: 'LIVE',
      tech: ['Cinema 4D', 'Octane', 'Photoshop']
    },
    {
      id: 3,
      title: 'BRAND_REBELLION',
      category: 'MOTION',
      image: 'https://images.pexels.com/photos/164888/pexels-photo-164888.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Logo animation that refuses to stay still and demands attention.',
      status: 'ACTIVE',
      tech: ['After Effects', 'Cinema 4D', 'Illustrator']
    },
    {
      id: 4,
      title: 'CHAOS_ENGINE',
      category: 'VFX',
      image: 'https://images.pexels.com/photos/1337825/pexels-photo-1337825.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Destruction sequence that makes Michael Bay take notes.',
      status: 'DEPLOYED',
      tech: ['Houdini', 'Maya', 'Nuke']
    },
    {
      id: 5,
      title: 'DIGITAL_REALM',
      category: '3D',
      image: 'https://images.pexels.com/photos/323772/pexels-photo-323772.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Architectural visualization that architects wish they could build.',
      status: 'LIVE',
      tech: ['Blender', 'Unreal Engine', 'Substance']
    },
    {
      id: 6,
      title: 'CORPORATE_HACK',
      category: 'MOTION',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Motion graphics that make corporate presentations actually watchable.',
      status: 'ACTIVE',
      tech: ['After Effects', 'Premiere', 'Illustrator']
    }
  ];

  const filters = ['ALL', 'VFX', '3D', 'MOTION'];
  
  const filteredProjects = activeFilter === 'ALL' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'DEPLOYED': return 'text-green-400';
      case 'LIVE': return 'text-cyan-400';
      case 'ACTIVE': return 'text-yellow-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <section id="work" className="py-20 bg-gray-950 relative">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="text-cyan-400 font-mono text-sm mb-4">
            <Terminal className="inline w-4 h-4 mr-2" />
            ~/portfolio/showcase
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
            <span className="text-yellow-400">[</span>DIGITAL_WARFARE<span className="text-yellow-400">]</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto font-mono mb-8">
            <span className="text-yellow-400">&gt;</span> Battle-tested projects that survived the render wars
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 font-mono font-bold tracking-wider transition-all duration-300 border ${
                  activeFilter === filter
                    ? 'bg-cyan-400 text-black border-cyan-400'
                    : 'bg-transparent text-cyan-400 border-cyan-400/30 hover:border-cyan-400'
                }`}
              >
                [{filter}]
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-black border border-gray-800 hover:border-cyan-400/50 transition-all duration-500 relative overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <div className={`px-3 py-1 bg-black/80 border border-gray-700 font-mono text-xs ${getStatusColor(project.status)}`}>
                    {project.status}
                  </div>
                </div>
                
                {/* Hover Actions */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <button className="bg-cyan-400 text-black p-3 hover:bg-cyan-300 transition-colors duration-300">
                      <Play className="w-5 h-5" />
                    </button>
                    <button className="bg-red-400 text-black p-3 hover:bg-red-300 transition-colors duration-300">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-cyan-400 font-mono text-sm font-bold">
                    //{project.category}
                  </div>
                  <div className="w-2 h-2 bg-cyan-400 animate-pulse"></div>
                </div>
                
                <h3 className="text-xl font-black text-white mb-3 font-mono tracking-wider">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-4 font-mono">
                  <span className="text-cyan-400">&gt;</span> {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="space-y-2">
                  <div className="text-yellow-400 font-mono text-xs font-bold">
                    // TECH_STACK:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="text-xs bg-gray-900 text-gray-300 px-2 py-1 border border-gray-700 font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Glitch Line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-red-400 to-yellow-400 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;