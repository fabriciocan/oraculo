"use client";

import { Card } from "./Card";

export const SolutionSection = () => {
  return (
    <div className="bg-gradient-to-b from-black to-gray-900 min-h-screen px-4 sm:px-8 lg:px-20 xl:px-40 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 mb-12 sm:mb-16">
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white font-bold animate-slide-in-top leading-tight">
              Não vendemos{" "}
              <span className="text-[#2881b8] relative">
                promessas
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#2881b8] to-[#54c1ff] rounded-full animate-fade-in-1500"></div>
              </span>
            </h1>
          </div>
          <div className="flex-1 flex items-end">
            <p className="text-lg sm:text-xl text-white/80 animate-flip-in leading-relaxed">
              Entregamos resultados reais com metodologia comprovada e transparência total.
            </p>
          </div>
        </div>

        {/* Especialidades */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-8 sm:mb-12 text-white font-bold animate-fade-in-up">
            Somos especialistas em:
          </h2>
          
          {/* Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center">
            <div className="animate-flip-in">
              <Card 
                title="Criação de infraestrutura" 
                url="/imgs/7.png" 
                backSubtitle="Colocamos seu negócio no ar com site, CRM, SEO, redes sociais e tudo que você precisa para alavancar seu negócio"  
              />
            </div>
            <div className="animate-flip-in" style={{ animationDelay: '0.2s' }}>
              <Card 
                title="Campanhas e social media para captação de leads" 
                url="/imgs/8.png" 
                backSubtitle="Combinamos campanhas e redes sociais pra gerar interesse e atrair possíveis clientes."  
              />
            </div>
            <div className="animate-flip-in" style={{ animationDelay: '0.4s' }}>
              <Card 
                title="Construção do funil de vendas de ponta a ponta" 
                url="/imgs/9.png" 
                backSubtitle="Estratégia completa pra transformar interesse em cliente, passo a passo."  
              />
            </div>
          </div>
        </div>

        {/* Processo */}
        <div className="mt-16 sm:mt-20">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl text-white font-bold mb-8 sm:mb-12 text-center animate-slide-in-bottom">
            Nosso processo em 4 etapas
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { number: "01", title: "Diagnóstico", desc: "Analisamos seu negócio e identificamos oportunidades" },
              { number: "02", title: "Estratégia", desc: "Criamos um plano personalizado para seus objetivos" },
              { number: "03", title: "Execução", desc: "Implementamos as campanhas com foco em performance" },
              { number: "04", title: "Otimização", desc: "Monitoramos e ajustamos para maximizar resultados" }
            ].map((step, index) => (
              <div 
                key={index}
                className="group relative bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 hover:border-[#ff00d6] transition-all duration-300 hover:scale-105 animate-rotate-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-4xl sm:text-5xl font-bold text-[#ff00d6] mb-4 group-hover:scale-110 transition-transform duration-300">
                  {step.number}
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  {step.title}
                </h4>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                  {step.desc}
                </p>
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#ff00d6]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};