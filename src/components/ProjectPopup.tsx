import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface Media {
  type: 'image' | 'video';
  url: string;
}

interface Project {
  title: string;
  category: string;
  description: string;
  longDescription?: string;
  tech: string[];
  media: Media[];
}

interface ProjectPopupProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectPopup: React.FC<ProjectPopupProps> = ({ project, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setCurrentSlide(0);
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [project]);

  if (!project) return null;

  const hasCarousel = project.media.length > 1;

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev === project.media.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev === 0 ? project.media.length - 1 : prev - 1));
  };
useEffect(() => {
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  window.addEventListener('keydown', handleKeyDown);
  return () => {
    window.removeEventListener('keydown', handleKeyDown);
  };
}, [onClose]);
  const renderMedia = (mediaItem: Media) => {
    if (mediaItem.type === 'video') {
      return (
        <iframe
          src={`${mediaItem.url}?autoplay=1&muted=1&loop=1&title=0&byline=0&portrait=0`}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      );
    }
    return <img src={mediaItem.url} alt={project.title} className="w-full h-full object-cover" />;
  };

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content-grid" onClick={(e) => e.stopPropagation()}>
        <div className="popup-media-area">
          <button onClick={onClose} className="popup-close-button">
            <X size={24} />
          </button>
          
          <div className="w-full h-full relative overflow-hidden">
            {renderMedia(project.media[currentSlide])}
          </div>

          {hasCarousel && (
            <>
              <button onClick={prevSlide} className="carousel-nav left-0"><ChevronLeft size={24} /></button>
              <button onClick={nextSlide} className="carousel-nav right-0"><ChevronRight size={24} /></button>
              <div className="carousel-dots">
                {project.media.map((_, index) => (
                  <button key={index} onClick={(e) => { e.stopPropagation(); setCurrentSlide(index); }} className={`dot ${currentSlide === index ? 'active' : ''}`}></button>
                ))}
              </div>
            </>
          )}
        </div>

        <div className="popup-info-area">
          <div className="text-cyan-400 font-mono text-sm font-bold mb-2">
            //{project.category}
          </div>
          <h2 className="text-3xl font-black text-white mb-4 font-mono tracking-wider glitch-text" data-text={project.title}>
            {project.title}
          </h2>
          
          <div className="text-gray-300 font-mono text-sm leading-relaxed mb-8 prose prose-invert prose-p:text-gray-300">
            <p>{project.longDescription || project.description}</p>
          </div>

          <div>
            <div className="text-yellow-400 font-mono text-xs font-bold mb-4">
              // STACK_TECNOLÓGICO:
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