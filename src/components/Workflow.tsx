// src/components/Workflow.tsx

import React from 'react';
import { ClipboardList, Users, CalendarClock, Rocket, Terminal } from 'lucide-react';

const Workflow = () => {
  const workflowSteps = [
    {
      icon: ClipboardList,
      title: "1. Briefing y Alcance",
      description: "Una vez que me contactás, destilamos tu idea o proyecto en un brief claro y conciso. Definimos los objetivos, entregables y las tareas específicas para materializar tu visión.",
      color: "cyan"
    },
    {
      icon: Users,
      title: "2. Definición de Roles",
      description: "Establecemos qué partes del proyecto recaen sobre Valer Studio y cuáles ya están cubiertas por tu equipo, agencia o productora. La colaboración transparente es clave.",
      color: "red"
    },
    {
      icon: CalendarClock,
      title: "3. Plan y Presupuesto",
      description: "Con las tareas y roles definidos, desarrollo un calendario de producción detallado y un presupuesto transparente. Sin sorpresas, solo un plan de acción claro.",
      color: "yellow"
    },
    {
      icon: Rocket,
      title: "4. Ejecución y Entrega",
      description: "Con todo aprobado, me sumerjo en la producción. Mantengo una comunicación fluida sobre los avances hasta la entrega final, asegurando que el resultado supere tus expectativas.",
      color: "green"
    }
  ];

  const colorStyles: { [key: string]: { text: string, border: string } } = {
    cyan: { text: 'text-cyan-400', border: 'border-cyan-400/30' },
    red: { text: 'text-red-400', border: 'border-red-400/30' },
    yellow: { text: 'text-yellow-400', border: 'border-yellow-400/30' },
    green: { text: 'text-green-400', border: 'border-green-400/30' },
  };

  return (
    <section id="workflow" className="py-20 bg-gray-950 relative">
      
      {/* ===== 1. SEPARADOR AÑADIDO AQUÍ ===== */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="text-cyan-400 font-mono text-sm mb-4">
            <Terminal className="inline w-4 h-4 mr-2" />
            ~/metodologia/proceso
          </div>
          {/* ===== 2. TÍTULO CAMBIADO A ESPAÑOL ===== */}
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
            <span className="text-yellow-400">[</span>PROCESO DE TRABAJO<span className="text-yellow-400">]</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto font-mono">
            <span className="text-yellow-400">&gt;</span> Un proceso claro y eficiente, diseñado para la excelencia.
          </p>
        </div>
        
        <div className="relative border-l-2 border-cyan-400/20 ml-6 md:ml-0">
          {workflowSteps.map((step, index) => {
            const Icon = step.icon;
            const style = colorStyles[step.color];
            return (
              <div key={index} className="mb-12 md:flex items-start">
                <div className={`absolute -left-5 md:relative md:left-auto md:-translate-x-1/2 bg-gray-900 border-2 ${style.border} p-3 rounded-full z-10`}>
                  <Icon className={`w-8 h-8 ${style.text}`} />
                </div>
                <div className="ml-12 md:ml-8 w-full">
                  <div className="bg-black/50 backdrop-blur-sm border border-gray-800 p-6 rounded-2xl md:w-3/4">
                    <h3 className={`text-2xl font-black ${style.text} mb-3 font-mono tracking-wider`}>{step.title}</h3>
                    <p className="text-gray-300 font-mono text-base leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Workflow;