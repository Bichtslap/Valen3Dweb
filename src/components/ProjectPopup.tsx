import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// Definimos los tipos para los medios
interface Media {
  type: 'image' | 'video';
  url: string;
}

// Actualizamos el tipo de Proyecto para incluir los nuevos campos
interface Project {
  title: string;
  category: string;
  description: string;
  longDescription?: string;
  tech: string[];
  media: Media[]; // Array de imágenes o videos
}

interface ProjectPopupProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectPopup: React.FC<ProjectPopupProps> = ({ project, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Reiniciar el slide cuando el proyecto cambia
  useEffect(() => {
    setCurrentSlide(0);
  }, [project]);

  if (!project) return null;

  const hasCarousel = project.media.length > 1;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === project.media.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? project.media.length - 1 : prev - 1));
  };

const renderMedia = (mediaItem: Media) => {
    // La clave es envolver todo en el nuevo 'media-container'
    if (mediaItem.type === 'video') {
      return (
        <div className="media-container">
          <iframe
            src={`${mediaItem.url}?autoplay=1&muted=1&loop=1&title=0&byline=0&portrait=0`}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      );
    }
    return (
      <div className="media-container">
        <img src={mediaItem.url} alt={project.title} />
      </div>
    );
};
  
  return (
   <div className="popup-overlay" onClick={onClose}>
  {/* El div de abajo es el que cambia */}
  <div className="popup-content-grid" onClick={(e) => e.stopPropagation()}>
    {/* Columna de Medios (Carrusel o Video único) */}
    <div className="popup-media-area">
      <button onClick={onClose} className="popup-close-button">
        <X size={24} />
      </button>

      <div className="w-full h-full relative overflow-hidden">
        {/* La función renderMedia no cambia, pero ahora vivirá aquí */}
        {renderMedia(project.media[currentSlide])}
      </div>

      {hasCarousel && (
        <>
          <button onClick={prevSlide} className="carousel-nav left-0"><ChevronLeft size={24} /></button>
          <button onClick={nextSlide} className="carousel-nav right-0"><ChevronRight size={24} /></button>
          <div className="carousel-dots">
            {project.media.map((_, index) => (
              <div key={index} className={`dot ${currentSlide === index ? 'active' : ''}`}></div>
            ))}
          </div>
        </>
      )}
    </div>

    {/* Columna de Información */}
    <div className="popup-info-area">
      <div className="text-cyan-400 font-mono text-sm font-bold mb-2">
        //{project.category}
      </div>
      <h2 className="text-3xl font-black text-white mb-4 font-mono tracking-wider glitch-text" data-text={project.title}>
        {project.title}
      </h2>
      
      <div className="text-gray-300 font-mono text-sm leading-relaxed mb-6">
        <p><span className="text-yellow-400">&gt;</span> {project.longDescription || project.description}</p>
      </div>

      <div>
          <div className="text-yellow-400 font-mono text-xs font-bold mb-3">
              // TECH_STACK:
          </div>
          <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, idx) => (
              <span key={idx} className="text-xs bg-gray-900 text-gray-300 px-3 py-1 border border-gray-700 font-mono">
                  {tech}
              </span>
              ))}
          </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default ProjectPopup;