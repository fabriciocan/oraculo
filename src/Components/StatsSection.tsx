"use client";

export const StatsSection = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 py-16 sm:py-20 px-4 sm:px-8 lg:px-20 xl:px-40">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 animate-slide-in-top">
            Números que{" "}
            <span className="text-[#ff00d6] relative">
              impressionam
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#ff00d6] to-[#6605ff] rounded-full"></div>
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-white/80 animate-fade-in-up max-w-3xl mx-auto">
            Nossos resultados falam por si só. Veja o que conseguimos para nossos clientes.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          <div className="text-center group animate-bounce-in">
            <div className="relative mb-6">
              <div className="text-5xl sm:text-6xl lg:text-7xl font-black text-transparent bg-gradient-to-r from-[#ff00d6] to-[#e600c4] bg-clip-text group-hover:scale-110 transition-transform duration-300">
                500+
              </div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#ff00d6] rounded-full animate-pulse"></div>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Clientes Ativos</h3>
            <p className="text-white/70 text-sm sm:text-base">Empresas que confiam em nosso trabalho</p>
          </div>

          <div className="text-center group animate-bounce-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative mb-6">
              <div className="text-5xl sm:text-6xl lg:text-7xl font-black text-transparent bg-gradient-to-r from-[#54c1ff] to-[#2881b8] bg-clip-text group-hover:scale-110 transition-transform duration-300">
                R$ 50M+
              </div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#54c1ff] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Faturamento Gerado</h3>
            <p className="text-white/70 text-sm sm:text-base">Em vendas para nossos clientes</p>
          </div>

          <div className="text-center group animate-bounce-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative mb-6">
              <div className="text-5xl sm:text-6xl lg:text-7xl font-black text-transparent bg-gradient-to-r from-[#6605ff] to-[#4c2db8] bg-clip-text group-hover:scale-110 transition-transform duration-300">
                98%
              </div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#6605ff] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Satisfação</h3>
            <p className="text-white/70 text-sm sm:text-base">Taxa de aprovação dos clientes</p>
          </div>

          <div className="text-center group animate-bounce-in" style={{ animationDelay: '0.6s' }}>
            <div className="relative mb-6">
              <div className="text-5xl sm:text-6xl lg:text-7xl font-black text-transparent bg-gradient-to-r from-[#ff00d6] via-[#54c1ff] to-[#6605ff] bg-clip-text group-hover:scale-110 transition-transform duration-300">
                5
              </div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-[#ff00d6] to-[#6605ff] rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Anos no Mercado</h3>
            <p className="text-white/70 text-sm sm:text-base">De experiência comprovada</p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 sm:mt-20">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-[#ff00d6]/10 to-[#6605ff]/10 backdrop-blur-sm border border-[#ff00d6]/20 rounded-full px-8 py-4 animate-fade-in-up">
            <span className="text-white font-semibold">Quer fazer parte dessas estatísticas?</span>
            <a
              href="#cta"
              className="bg-[#ff00d6] text-white px-6 py-2 rounded-full font-bold hover:bg-[#e600c4] transition-colors duration-300"
            >
              Começar Agora
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};