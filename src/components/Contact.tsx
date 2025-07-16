import React, { useState } from 'react';
import { Mail, MessageSquare, MapPin, Send, Terminal } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Message transmitted:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'EMAIL',
      content: 'contacto@valerstudio.com.ar',
      link: 'mailto:contacto@valerstudio.com.ar',
      color: 'text-cyan-400'
    },
    {
      icon: MessageSquare,
      title: 'LINEA_DIRECTA',
      content: '+54 (11) 5095-1458',
      link: 'tel:+541150951458',
      color: 'text-red-400'
    },
    {
      icon: MapPin,
      title: 'UBICACION',
      content: 'Buenos Aires, AR',
      link: null,
      color: 'text-yellow-400'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-black relative">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-transparent opacity-20 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-red-400 to-transparent opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="text-cyan-400 font-mono text-sm mb-4">
            <Terminal className="inline w-4 h-4 mr-2" />
            VAMOS A CREAR ALGO GRANDE
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
            <span className="text-green-400">[</span>CONECT<span className="text-green-400">]</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto font-mono">
            <span className="text-green-400">&gt;</span> ¿Tenes una idea o un proyecto en mente? Contáctanos y hagámoslo realidad.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-black text-white mb-8 font-mono">
              <span className="text-cyan-400">//</span> INFORMACIÓN_DE_CONTACTO
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-center space-x-4 group">
                    <div className="bg-gray-900 border border-gray-700 p-3 group-hover:border-cyan-400/50 transition-colors duration-300">
                      <IconComponent className={`w-6 h-6 ${info.color}`} />
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm font-mono">{info.title}</div>
                      {info.link ? (
                        <a href={info.link} className={`${info.color} hover:text-white transition-colors duration-300 font-mono`}>
                          {info.content}
                        </a>
                      ) : (
                        <div className={`${info.color} font-mono`}>{info.content}</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Terminal Window */}
            <div className="bg-gray-950 border border-cyan-400/30 relative">
              <div className="flex items-center border-b border-gray-800 p-3">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-gray-400 text-xs font-mono ml-4">¿POR_QUÉ_NOSOTROS?</div>
              </div>
              
              <div className="p-6 font-mono text-sm">
                <div className="text-green-400 mb-2">$ Ventajas.txt</div>
                <div className="space-y-2 text-gray-300">
                  <div><span className="text-cyan-400">&gt;</span> Experiencia y versatilidad en múltiples estilos.</div>
                  <div><span className="text-red-400">&gt;</span> Pasión por la cultura digital, el cine y la música.</div>
                  <div><span className="text-yellow-400">&gt;</span> Soluciones creativas y personalizadas para cada proyecto.</div>
                  <div><span className="text-green-400">&gt;</span> Comunicación directa rápida y entregas puntuales.</div>
                </div>
                <div className="text-green-400 mt-4 animate-pulse">█</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-gray-950 border border-red-400/30 p-8">
              <div className="flex items-center border-b border-gray-800 pb-4 mb-6">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-gray-400 text-xs font-mono ml-4">message_composer.exe</div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-cyan-400 mb-2 font-mono text-sm">NAME_INPUT:</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black border border-gray-700 text-white focus:outline-none focus:border-cyan-400 transition-colors duration-300 font-mono"
                      placeholder="your_name_here"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-cyan-400 mb-2 font-mono text-sm">EMAIL_ADDRESS:</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black border border-gray-700 text-white focus:outline-none focus:border-cyan-400 transition-colors duration-300 font-mono"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-cyan-400 mb-2 font-mono text-sm">SUBJECT_LINE:</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-gray-700 text-white focus:outline-none focus:border-cyan-400 transition-colors duration-300 font-mono"
                    placeholder="project_brief"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-cyan-400 mb-2 font-mono text-sm">MESSAGE_BODY:</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-gray-700 text-white focus:outline-none focus:border-cyan-400 transition-colors duration-300 resize-none font-mono"
                    placeholder="describe_your_vision..."
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-cyan-400 text-black font-black py-4 hover:bg-cyan-300 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 font-mono tracking-wider"
                >
                  <Send className="w-5 h-5" />
                  <span>[TRANSMIT_MESSAGE]</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;