import React from 'react';
import { Instagram, Twitter, Linkedin, Youtube, Terminal } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/valer.studio/', label: 'Instagram', color: 'hover:text-pink-400' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: Youtube, href: '#', label: 'YouTube', color: 'hover:text-red-500' }
  ];

  return (
    <footer className="bg-black border-t border-gray-800 py-12 relative">
      {/* Animated top border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-red-400 to-yellow-400 animate-pulse"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="text-3xl font-black text-white mb-4 font-mono tracking-wider">
              <span className="text-cyan-400">[</span>
              VALER
              <span className="text-cyan-400">]</span>
              <span className="text-xs text-cyan-400 ml-2">v2.0</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md font-mono text-sm leading-relaxed">
              <span className="text-cyan-400">&gt;</span> Digital rebels crafting visual chaos since 2016. 
              We don't just make content - we hack reality and serve it on a silver platter.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className={`bg-gray-900 border border-gray-700 p-3 text-gray-400 ${social.color} transition-all duration-300 hover:border-current`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-white font-black mb-4 font-mono">
              <span className="text-red-400">//</span> ARSENAL
            </h4>
            <ul className="space-y-2 text-gray-400 font-mono text-sm">
              <li><a href="#" className="hover:text-cyan-400 transition-colors duration-300">VFX_MASTERY</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors duration-300">3D_WORLDS</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors duration-300">MOTION_CHAOS</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors duration-300">POST_PRODUCTION</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black mb-4 font-mono">
              <span className="text-yellow-400">//</span> NAVIGATION
            </h4>
            <ul className="space-y-2 text-gray-400 font-mono text-sm">
              <li><a href="#about" className="hover:text-cyan-400 transition-colors duration-300">NOSOTROS</a></li>
              <li><a href="#work" className="hover:text-cyan-400 transition-colors duration-300">DIGITAL_WARFARE</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition-colors duration-300">CONNECT</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors duration-300">JOIN_CREW</a></li>
            </ul>
          </div>
        </div>

        {/* Terminal-style footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="bg-gray-950 border border-gray-800 p-4">
            <div className="flex items-center justify-between text-gray-400 font-mono text-sm">
              <div className="flex items-center space-x-4">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>© 2025 VALER STUDIO. All rights reserved.</span>
              </div>
              <div className="flex space-x-6">
                <a href="#" className="hover:text-cyan-400 transition-colors duration-300">PRIVACY_POLICY</a>
                <a href="#" className="hover:text-cyan-400 transition-colors duration-300">TERMS_OF_SERVICE</a>
              </div>
            </div>
            <div className="mt-2 text-xs text-gray-500 font-mono">
              <span className="text-green-400">Status:</span> ONLINE | 
              <span className="text-cyan-400"> Ready for new missions</span> | 
              <span className="text-yellow-400"> Last updated: {new Date().toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;