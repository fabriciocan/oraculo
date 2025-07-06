"use client";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 py-12 sm:py-16 px-4 sm:px-8 lg:px-20 xl:px-40">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12">
          {/* Company Info */}
          <div className="animate-fade-in-left-500">
            <h3 className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-[#ff00d6] via-[#54c1ff] to-[#6605ff] text-transparent bg-clip-text mb-4">
              ORACULO
            </h3>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6">
              Transformamos negócios através de estratégias de marketing digital inteligentes e focadas em resultados.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-[#ff00d6] to-[#e600c4] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-[#54c1ff] to-[#2881b8] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold">in</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-[#6605ff] to-[#4c2db8] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold">ig</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="animate-fade-in-left-1000">
            <h4 className="text-xl font-bold text-white mb-6">Serviços</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-[#ff00d6] transition-colors duration-300">Marketing Digital</a></li>
              <li><a href="#" className="text-white/70 hover:text-[#ff00d6] transition-colors duration-300">Gestão de Tráfego</a></li>
              <li><a href="#" className="text-white/70 hover:text-[#ff00d6] transition-colors duration-300">Social Media</a></li>
              <li><a href="#" className="text-white/70 hover:text-[#ff00d6] transition-colors duration-300">SEO</a></li>
              <li><a href="#" className="text-white/70 hover:text-[#ff00d6] transition-colors duration-300">Criação de Sites</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="animate-fade-in-left-1500">
            <h4 className="text-xl font-bold text-white mb-6">Empresa</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-[#54c1ff] transition-colors duration-300">Sobre Nós</a></li>
              <li><a href="#" className="text-white/70 hover:text-[#54c1ff] transition-colors duration-300">Cases de Sucesso</a></li>
              <li><a href="#" className="text-white/70 hover:text-[#54c1ff] transition-colors duration-300">Blog</a></li>
              <li><a href="#" className="text-white/70 hover:text-[#54c1ff] transition-colors duration-300">Carreira</a></li>
              <li><a href="#" className="text-white/70 hover:text-[#54c1ff] transition-colors duration-300">Contato</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="animate-fade-in-left-2000">
            <h4 className="text-xl font-bold text-white mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#ff00d6] rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">📞</span>
                </div>
                <span className="text-white/80">(11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#54c1ff] rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✉️</span>
                </div>
                <span className="text-white/80">contato@oraculo.com</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#6605ff] rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">📍</span>
                </div>
                <span className="text-white/80">São Paulo, SP</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2024 Oraculo Marketing Digital. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors duration-300">
                Política de Privacidade
              </a>
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors duration-300">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};