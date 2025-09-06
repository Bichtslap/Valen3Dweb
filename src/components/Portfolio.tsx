import React, { useState, useEffect } from 'react';
import { Terminal, Eye } from 'lucide-react';
import { collection, onSnapshot, Firestore } from "firebase/firestore";

interface PortfolioProps {
  onProjectSelect: (project: any) => void;
  db: Firestore | null;
}

const Portfolio: React.FC<PortfolioProps> = ({ onProjectSelect, db }) => {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!db) {
      setLoading(false);
      console.log("Firestore DB not available yet.");
      return;
    }

    setLoading(true);
    // This special variable is provided by the environment.
    const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
    
    // Path to the public collection for your projects
    const projectsCollectionRef = collection(db, `/artifacts/${appId}/public/data/projects`);
    
    const unsubscribe = onSnapshot(projectsCollectionRef, (snapshot) => {
      const projectsData = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      // You might want to sort by a timestamp field here if you add one
      setProjects(projectsData);
      setLoading(false);
    }, (error) => {
      console.error("Error fetching projects from Firestore:", error);
      setLoading(false);
    });

    // Cleanup subscription on component unmount
    return () => unsubscribe();
  }, [db]); // Re-run effect if the db instance changes

  const filters = ['ALL', '3D', 'VFX', 'MOTION'];
  const filteredProjects = activeFilter === 'ALL' ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <section id="work" className="py-20 bg-gray-950 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="text-cyan-400 font-mono text-sm mb-4">
            <Terminal className="inline w-4 h-4 mr-2" />
            ~/portfolio/showcase
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
            <span className="text-yellow-400">[</span>PROYECTOS<span className="text-yellow-400">]</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto font-mono mb-8">
            <span className="text-yellow-400">&gt;</span> Proyectos que sobrevivieron las guerras del render.
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

        {loading ? (<div className="text-center text-cyan-400 font-mono">Cargando proyectos desde la nube...</div>) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-black/50 backdrop-blur-sm border border-gray-800 hover:border-cyan-400/50 transition-all duration-500 relative overflow-hidden cursor-pointer rounded-2xl"
                onClick={() => onProjectSelect(project)}
              >
                <div className="relative overflow-hidden aspect-video bg-black rounded-t-2xl">
                  <img src={project.media[0]?.url} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4 px-3 py-1 bg-black/80 border border-gray-700 font-mono text-xs text-green-400 rounded-md">
                    {project.status}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-cyan-400 text-black p-4 flex items-center font-mono font-bold rounded-lg">
                      <Eye className="w-5 h-5 mr-2" />
                      VER DETALLES
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-cyan-400 font-mono text-sm font-bold">
                    //{project.category}
                  </div>
                  <h3 className="text-xl font-black text-white mt-3 mb-3 font-mono tracking-wider">{project.title}</h3>
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
