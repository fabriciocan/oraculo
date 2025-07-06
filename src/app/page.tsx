"use client";

import { Card } from "@/Components/Card";
import { Phone } from "@/Components/Phone";
import TickerBar from "@/Components/TickBar";
import { ProblemSection } from "@/Components/ProblemSection";
import { SolutionSection } from "@/Components/SolutionSection";
import { CTASection } from "@/Components/CTASection";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <div className="flex flex-col justify-between items-center min-h-screen overflow-y-auto bg-[url(/imgs/fundo.png)] bg-cover bg-center bg-no-repeat">
        {/* LOGO */}
        <h1 className="self-start text-xl sm:text-2xl font-black m-6 sm:m-12 bg-gradient-to-r from-[#ff00d6] via-[#54c1ff] to-[#6605ff] text-transparent bg-clip-text animate-wiggle">
          ORACULO
        </h1>
        
        {/* CONTEÚDO PRINCIPAL */}
        <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-8 lg:gap-[100px] mt-4 sm:mt-10 mb-8 sm:mb-16 px-4 sm:px-8">
          {/* TEXTOS */}
          <div className="flex flex-col items-center lg:items-start justify-center text-center lg:text-left max-w-xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 py-2 bg-gradient-to-r from-[#ff00d6] via-[#54c1ff] to-[#6605ff] text-transparent bg-clip-text animate-fade-in-1000 leading-tight">
              SEU CRESCIMENTO
              <br />
              COMEÇA AGORA
            </h1>
            <p className="text-sm sm:text-base mb-6 px-2 lg:px-0 animate-fade-in-up text-white leading-relaxed">
              Transforme cliques em clientes com campanhas inteligentes e
              marketing de verdade.
            </p>
            <a
              href="#cta"
              className="py-3 px-6 sm:px-8 bg-[#ff00d6] text-white rounded-full font-bold text-sm sm:text-base hover:scale-105 hover:bg-[#e600c4] transition-all duration-300 animate-fade-in-1000 shadow-lg hover:shadow-xl"
            >
              QUERO IMPULSIONAR MEU NEGÓCIO
            </a>
          </div>
          
          {/* CELULAR */}
          <div className="relative">
            {/* Glow colorido */}
            <div className="absolute -top-6 -left-6 sm:-top-10 sm:-left-10 w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-gradient-to-br from-[#ff00d6] via-[#54c1ff] to-[#6605ff] blur-3xl opacity-40 z-0"></div>

            {/* Celular em cima do brilho */}
            <div
              className="relative z-10 transition duration-700 ease-in-out"
              style={{
                transform: "perspective(1000px)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "perspective(1000px) rotateX(3deg) rotateY(6deg)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "perspective(1000px) rotateX(0deg) rotateY(0deg)";
              }}
            >
              <Phone />
            </div>
          </div>
        </div>
        
        {/* TICKER */}
        <TickerBar />
      </div>

      {/* PROBLEM SECTION */}
      <ProblemSection />

      {/* SOLUTION SECTION */}
      <SolutionSection />

      {/* CTA SECTION */}
      <CTASection />
    </>
  );
}