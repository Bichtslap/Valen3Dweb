import React from 'react';
import { Mail, MessageSquare, MapPin, Send, Terminal } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    { icon: Mail, title: 'EMAIL', content: 'contacto@valerstudio.com.ar', link: 'mailto:valentinmarey@gmail.com', color: 'text-cyan-400'},
    { icon: MessageSquare, title: 'LINEA_DIRECTA', content: '+54 (11) 5095-1458', link: 'tel:+541150951458', color: 'text-red-400'},
    { icon: MapPin, title: 'UBICACION', content: 'Buenos Aires, AR', link: null, color: 'text-yellow-400'}
  ];

  return (
    <section id="contact" className="py-20 bg-black relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="text-cyan-400 font-mono text-sm mb-4">
            <Terminal className="inline w-4 h-4 mr-2" />
            VAMOS A CREAR ALGO GRANDE
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
            <span className="text-green-400">[</span>CONTACTO<span className="text-green-400">]</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto font-mono">
            <span className="text-green-400">&gt;</span> ¿Tenés una idea o un proyecto en mente? Hablemos y hagámoslo realidad.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-400/30 p-8 rounded-2xl">
              <h3 className="text-2xl font-black text-white mb-8 font-mono"><span className="text-cyan-400">//</span> INFO_DE_CONTACTO</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-center space-x-4 group">
                      <div className="bg-gray-900 border border-gray-700 p-3 group-hover:border-cyan-400/50 transition-colors duration-300 rounded-xl">
                        <IconComponent className={`w-6 h-6 ${info.color}`} />
                      </div>
                      <div>
                        <div className="text-gray-400 text-sm font-mono">{info.title}</div>
                        {info.link ? (
                          <a href={info.link} className={`${info.color} hover:text-white transition-colors duration-300 font-mono`}>{info.content}</a>
                        ) : (
                          <div className={`${info.color} font-mono`}>{info.content}</div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-red-400/30 p-8 rounded-2xl">
              {/* ===== INICIO DE CAMBIOS IMPORTANTES ===== */}
              <form 
                name="contact" 
                method="POST" 
                data-netlify="true"
                netlify-honeypot="bot-field"
              >
                {/* Campo oculto para decirle a Netlify el nombre del formulario */}
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Don’t fill this out if you’re human: <input name="bot-field" />
                  </label>
                </p>

                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-cyan-400 mb-2 font-mono text-sm">NOMBRE:</label>
                    <input required type="text" id="name" name="name" className="w-full px-4 py-3 bg-black border border-gray-700 text-white focus:outline-none focus:border-cyan-400 transition-colors duration-300 font-mono rounded-lg" placeholder="Tu nombre"/>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-cyan-400 mb-2 font-mono text-sm">EMAIL:</label>
                    <input required type="email" id="email" name="email" className="w-full px-4 py-3 bg-black border border-gray-700 text-white focus:outline-none focus:border-cyan-400 transition-colors duration-300 font-mono rounded-lg" placeholder="tu@email.com"/>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-cyan-400 mb-2 font-mono text-sm">MENSAJE:</label>
                    <textarea required id="message" name="message" rows={5} className="w-full px-4 py-3 bg-black border border-gray-700 text-white focus:outline-none focus:border-cyan-400 transition-colors duration-300 resize-none font-mono rounded-lg" placeholder="Describí tu visión..."></textarea>
                  </div>
                  <button type="submit" className="w-full bg-cyan-400 text-black font-black py-4 hover:bg-cyan-300 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 font-mono tracking-wider rounded-lg">
                    <Send className="w-5 h-5" />
                    <span>[ENVIAR MENSAJE]</span>
                  </button>
                </div>
              </form>
              {/* ===== FIN DE CAMBIOS IMPORTANTES ===== */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;