"use client";

export const ProblemSection = () => {
  return (
    <div className="bg-black min-h-screen w-full px-4 sm:px-8 lg:px-20 xl:px-40 py-12 sm:py-16 lg:py-20 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Título Principal */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white font-bold leading-tight animate-slide-in-top">
            Você sabe que precisa <br className="hidden sm:block" /> 
            investir em{" "}
            <span className="text-[#ff0196] relative">
              marketing
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#ff0196] to-[#ff00d6] rounded-full animate-fade-in-1500"></div>
            </span>
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 py-4 sm:py-6 animate-fade-in-up font-light">
            Mas investir errado é pior do que não investir.
          </p>
        </div>

        {/* Tags de Problemas */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-8 mb-8 sm:mb-12">
          <div className="group">
            <p className="px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-center text-white font-semibold bg-gradient-to-r from-[#ff00d6] to-[#e600c4] rounded-full text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-lg animate-bounce-in cursor-pointer">
              ❌ Anúncios que não geram retorno
            </p>
          </div>
          <div className="group">
            <p className="px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-center text-white font-semibold bg-gradient-to-r from-[#5facfc] to-[#2881b8] rounded-full text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-lg animate-bounce-in cursor-pointer" style={{ animationDelay: '0.2s' }}>
              ❌ Sites que ninguém acessa
            </p>
          </div>
          <div className="group">
            <p className="px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-center text-white font-semibold bg-gradient-to-r from-[#6138ff] to-[#4c2db8] rounded-full text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-lg animate-bounce-in cursor-pointer" style={{ animationDelay: '0.4s' }}>
              ❌ Conteúdo que ninguém lê
            </p>
          </div>
        </div>

        {/* Solução */}
        <div className="relative">
          <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#ff00d6] via-[#54c1ff] to-[#6605ff] rounded-full animate-fade-in-2000"></div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-white font-bold uppercase leading-tight animate-rotate-in pl-8">
            A gente resolve isso com estratégia,
            <br className="hidden sm:block" /> 
            criatividade e foco total em{" "}
            <span className="text-[#54c1ff]">performance</span>.
          </h2>
        </div>

        {/* Estatísticas */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
          <div className="text-center group animate-zoom-in">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#ff00d6] mb-2 group-hover:scale-110 transition-transform duration-300">
              +300%
            </div>
            <p className="text-white/80 text-sm sm:text-base">ROI médio dos nossos clientes</p>
          </div>
          <div className="text-center group animate-zoom-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#54c1ff] mb-2 group-hover:scale-110 transition-transform duration-300">
              98%
            </div>
            <p className="text-white/80 text-sm sm:text-base">Taxa de satisfação</p>
          </div>
          <div className="text-center group animate-zoom-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#6605ff] mb-2 group-hover:scale-110 transition-transform duration-300">
              24h
            </div>
            <p className="text-white/80 text-sm sm:text-base">Tempo de resposta</p>
          </div>
        </div>
      </div>
    </div>
  );
};