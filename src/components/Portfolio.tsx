import React, { useState, useEffect } from 'react';
import { Terminal, Eye } from 'lucide-react';

interface PortfolioProps {
  onProjectSelect: (project: any) => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ onProjectSelect }) => {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/projects.json');
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching local projects:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const filters = ['ALL', 'VFX', '3D', 'MOTION'];
  const filteredProjects = activeFilter === 'ALL' ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <section id="work" className="py-20 bg-gray-950 relative">
      <div className="container mx-auto px-6 relative z-10">
        {/* ... El código del encabezado y filtros no cambia ... */}
        <div className="text-center mb-16">
          <div className="text-cyan-400 font-mono text-sm mb-4">
            <Terminal className="inline w-4 h-4 mr-2" />
            ~/portfolio/showcase
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
            <span className="text-yellow-400">[</span>MIS_PROYECTOS<span className="text-yellow-400">]</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto font-mono mb-8">
            <span className="text-yellow-400">&gt;</span> Un recorrido por mi trabajo en VFX, 3D y Motion Graphics.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 font-mono font-bold tracking-wider transition-all duration-300 border rounded-lg ${
                  activeFilter === filter
                    ? 'bg-cyan-400 text-black border-cyan-400'
                    : 'bg-transparent text-cyan-400 border-cyan-400/30 hover:border-cyan-400 hover:bg-cyan-400/10'
                }`}
              >
                [{filter}]
              </button>
            ))}
          </div>
        </div>

        {loading ? (<div className="text-center text-cyan-400 font-mono">Cargando proyectos...</div>) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-black/50 backdrop-blur-sm border border-gray-800 hover:border-cyan-400/50 transition-all duration-500 relative overflow-hidden cursor-pointer rounded-2xl"
                onClick={() => onProjectSelect(project)}
              >
                <div className="relative overflow-hidden aspect-video bg-black rounded-t-2xl">
                  
                  {/* La imagen de fondo, ahora usa thumbnailUrl */}
                  <img 
                    src={project.thumbnailUrl || project.media[0]?.url} // Usa thumbnailUrl, y si no existe, usa media[0] como antes
                    alt={project.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />

                  {/* El video superpuesto no cambia */}
                  {project.previewVideo && (
                    <video
                      src={project.previewVideo}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:scale-110 pointer-events-none"
                    />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4 px-3 py-1 bg-black/80 border border-gray-700 font-mono text-xs text-green-400 rounded-md">
                    {project.status}
                  </div>
                   <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-cyan-400 text-black p-4 flex items-center font-mono font-bold rounded-lg">
                      <Eye className="w-5 h-5 mr-2" />
                      VER PROYECTO
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-cyan-400 font-mono text-sm font-bold">
                    //{project.category}
                  </div>
                  <h3 className="text-xl font-black text-white mt-3 mb-3 font-mono tracking-wider">{project.title}</h3>
                  <p className="text-gray-400 font-mono text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;