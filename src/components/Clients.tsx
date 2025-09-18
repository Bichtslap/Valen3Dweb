import React from 'react';
import { Terminal } from 'lucide-react';

// 1. He añadido la propiedad "inverted: true" a los logos que son negros.
const clients = [
  { name: 'Netflix', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' },
  { name: 'Coca-Cola', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg' },
  { name: 'Duki', logoUrl: 'https://d2az8otjr0j19j.cloudfront.net/templates/006/384/383/twig/static/images/salinasdukitext.webp' },
  { name: 'Nicki Nicole', logoUrl: '/IMG/lcuho.jpeg', inverted: false },
  { name: 'mir', logoUrl: '/IMG/mir.png' },
  { name: '47 Street', logoUrl: 'https://street47.vtexassets.com/assets/vtex.file-manager-graphql/images/5a31f7ec-a9cd-42a4-a62d-7477f17a432a___fb08622128f153cfddae8eecdce11430.png', inverted: true },
  { name: 'Cazzu', logoUrl: 'https://i.pinimg.com/736x/4d/05/4f/4d054f2d96a99f7692fbb0a4276f2349.jpg', inverted: false },
  { name: 'Anestesia AV', logoUrl: 'https://images.squarespace-cdn.com/content/v1/635ffe1ac495161311764c9f/52535c7e-0106-4f21-80c5-f2dce80bedf4/LOGO-18.png?format=2500w', inverted: false },
  { name: 'Dale Play Records', logoUrl: 'https://daleplayrecords.com/wp-content/uploads/2023/09/dp-records-logo.webp', inverted: false },
  { name: 'Artear', logoUrl: 'https://www.artear.com/assets/v2/images/logo-artear.png', inverted: false },
  { name: 'bani', logoUrl: 'https://bani-vfx.com/wp-content/uploads/2025/03/bani.svg' },
  { name: 'ABSNT', logoUrl: 'https://absntcreative.com/wp-content/uploads/2024/03/logo-absnt.svg', inverted: true },
];

const Clients = () => {
  const extendedClients = [...clients, ...clients];

  return (
    <section id="clients" className="py-20 bg-gray-950 relative overflow-hidden">
       <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-400 to-transparent opacity-50"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="text-cyan-400 font-mono text-sm mb-4">
            <Terminal className="inline w-4 h-4 mr-2" />
            ~/social-proof
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tighter">
            Marcas y artistas que confiaron en mi trabajo
          </h2>
        </div>
      </div>
      
      <div className="w-full inline-flex flex-nowrap">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          {extendedClients.map((client, index) => (
            <li key={`client-${index}`} className="flex-shrink-0">
              {/* 2. Aplico los filtros con clases de Tailwind, incluyendo el 'invert' condicional. */}
              <img 
                src={client.logoUrl} 
                alt={client.name} 
                className={`h-10 md:h-12 object-contain filter grayscale brightness-[2] ${client.inverted ? 'invert' : ''}`} 
              />
            </li>
          ))}
        </ul>
      </div>
       <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-400 to-transparent opacity-50"></div>
    </section>
  );
};

export default Clients;