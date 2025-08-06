import React, { useState, useEffect } from 'react';
import { Terminal, Eye } from 'lucide-react';
import ProjectPopup from './ProjectPopup';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [selectedProject, setSelectedProject] = useState(null);
  const [projects, setProjects] = useState([]); // Estado para guardar los proyectos
  const [loading, setLoading] = useState(true); // Estado para la carga inicial

  // useEffect se ejecuta cuando el componente se carga por primera vez
  useEffect(() => {
    // Usamos fetch para leer el archivo JSON desde la carpeta 'public'
    fetch('/projects.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setProjects(data); // Guardamos los datos en el estado
        setLoading(false); // Dejamos de mostrar el mensaje de carga
      })
      .catch(error => {
        console.error("Error al cargar los proyectos:", error);
        setLoading(false); // También dejamos de cargar si hay un error
      });
  }, []); // El array vacío [] asegura que esto se ejecute solo una vez

  const filters = ['ALL', 'VFX', '3D', 'MOTION'];

  const filteredProjects = activeFilter === 'ALL'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'DEPLOYED': return 'text-green-400';
      case 'LIVE': return 'text-cyan-400';
      case 'ACTIVE': return 'text-yellow-400';
      default: return 'text-gray-400';
    }
  };

  const openPopup = (project) => {
    setSelectedProject(project);
  };

  const closePopup = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <section id="work" className="py-20 bg-gray-950 relative">
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

          {loading ? (
            <div className="text-center text-cyan-400 font-mono">Loading projects...</div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-black border border-gray-800 hover:border-cyan-400/50 transition-all duration-500 relative overflow-hidden cursor-pointer"
                  onClick={() => openPopup(project)}
                >
                  <div className="relative overflow-hidden aspect-video bg-black">
                    <img
                      src={project.media[0]?.url} // Mostramos la primera imagen como vista previa
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <div className={`px-3 py-1 bg-black/80 border border-gray-700 font-mono text-xs ${getStatusColor(project.status)}`}>
                        {project.status}
                      </div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-cyan-400 text-black p-4 flex items-center font-mono font-bold">
                        <Eye className="w-5 h-5 mr-2" />
                        VER DETALLES
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="text-cyan-400 font-mono text-sm font-bold">
                      //{project.category}
                    </div>
                    <h3 className="text-xl font-black text-white mt-3 mb-3 font-mono tracking-wider">
                      {project.title}
                    </h3>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-red-400 to-yellow-400 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {selectedProject && (
        <ProjectPopup project={selectedProject} onClose={closePopup} />
      )}
    </>
  );
};

export default Portfolio;