"use client";

export const CTASection = () => {
  return (
    <div id="cta" className="bg-gradient-to-br from-[#ff00d6] via-[#54c1ff] to-[#6605ff] min-h-screen flex items-center justify-center px-4 sm:px-8 lg:px-20 xl:px-40 py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Main CTA */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-6 sm:mb-8 animate-fade-in-1000 leading-tight">
            PRONTO PARA TRANSFORMAR
            <br className="hidden sm:block" />
            SEU NEGÓCIO?
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-12 animate-fade-in-up leading-relaxed max-w-3xl mx-auto">
            Não perca mais tempo com estratégias que não funcionam. 
            Vamos criar uma campanha que realmente gera resultados para você.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16">
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white text-[#ff00d6] px-8 sm:px-12 py-4 sm:py-5 rounded-full font-bold text-lg sm:text-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-fade-in-left-1000 flex items-center gap-3"
          >
            <span>FALAR COM ESPECIALISTA</span>
            <div className="w-6 h-6 bg-[#ff00d6] rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <span className="text-white text-sm">→</span>
            </div>
          </a>
          
          <a
            href="#"
            className="group border-2 border-white text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full font-bold text-lg sm:text-xl hover:bg-white hover:text-[#ff00d6] transition-all duration-300 animate-fade-in-right-1000"
          >
            VER CASES DE SUCESSO
          </a>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-white/90">
          <div className="animate-fade-in-up">
            <div className="text-2xl sm:text-3xl font-bold mb-2">📞</div>
            <p className="text-sm sm:text-base">Atendimento 24/7</p>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-2xl sm:text-3xl font-bold mb-2">💬</div>
            <p className="text-sm sm:text-base">Resposta em até 1h</p>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-2xl sm:text-3xl font-bold mb-2">🎯</div>
            <p className="text-sm sm:text-base">Consultoria gratuita</p>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-white/20">
          <p className="text-white/80 text-sm sm:text-base mb-4 animate-fade-in-up">
            Mais de 500 empresas já confiam na Oraculo
          </p>
          <div className="flex justify-center items-center gap-4 sm:gap-8 text-white/60 text-xs sm:text-sm animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <span>✓ Sem fidelidade</span>
            <span>✓ Resultados garantidos</span>
            <span>✓ Suporte premium</span>
          </div>
        </div>
      </div>
    </div>
  );
};