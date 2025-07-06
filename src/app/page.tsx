"use client";

import { Card } from "@/Components/Card";
import { Phone } from "@/Components/Phone";
import TickerBar from "@/Components/TickBar";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-between items-center min-h-screen overflow-y-auto bg-[url(/imgs/fundo.png)]">
        {/* LOGO */}
        <h1 className="self-start text-2xl font-black m-12 bg-gradient-to-r from-[#ff00d6] via-[#54c1ff] to-[#6605ff] text-transparent bg-clip-text animate-wiggle">
          ORACULO
        </h1>
        {/* CONTEÚDO PRINCIPAL */}
        <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-12 lg:gap-[100px] mt-10 mb-16">
          {/* TEXTOS */}
          <div className="flex flex-col items-center lg:items-start justify-center text-center lg:text-left max-w-xl">
            <h1 className="text-4xl lg:text-5xl font-black mb-4 py-2 bg-gradient-to-r from-[#ff00d6] via-[#54c1ff] to-[#6605ff] text-transparent bg-clip-text animate-fade-in-1000">
              SEU CRESCIMENTO
              <br />
              COMEÇA AGORA
            </h1>
            <p className="text-base mb-6 px-2 lg:px-0 animate-fade-in-up text-white">
              Transforme cliques em clientes com campanhas inteligentes e
              marketing de verdade.
            </p>
            <a
              href="#"
              className="py-2 px-6 bg-[#ff00d6] text-white rounded-full font-bold text-base hover:scale-105 transition-transform duration-200 animate-fade-in-1000"
            >
              QUERO IMPULSIONAR MEU NEGÓCIO
            </a>
          </div>
          {/* CELULAR */}
          <div className="relative">
            {/* Glow colorido */}
            <div className="absolute -top-10 -left-10 w-96 h-96 rounded-full bg-gradient-to-br from-[#ff00d6] via-[#54c1ff] to-[#6605ff] blur-3xl opacity-40 z-0"></div>

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

      <div className="bg-black h-auto w-full px-40 py-20">
        <h1 className="text-5xl text-white font-semibold">
          Você sabe que precisa <br /> investir em{" "}
          <span className="text-[#ff0196]">marketing</span>
        </h1>
        <p className="text-2xl text-white py-4">
          Mas investir errado é pior do que não investir.
        </p>
        <div className="flex gap-4 mt-4">
          <p className="px-4 py-4 flex items-center justify-center text-white font-semibold bg-[#ff00d6] rounded-full  text-base">
            Anuncios que não geram retorno
          </p>
          <p className="px-4 py-4 flex items-center justify-center text-white font-semibold bg-[#5facfc] rounded-full  text-base">
            Sites que ninguém acessa
          </p>
          <p className="px-4 py-4 flex items-center justify-center text-white font-semibold bg-[#6138ff] rounded-full  text-base">
            Conteúdo que ninguém lê
          </p>
        </div>
        <h1 className="text-4xl text-white font-semibold uppercase mt-8">
          A gente resolve isso com estratégia,
          <br /> criatividade e foco total em performance.
        </h1>
      </div>
      <div className="bg-black h-auto px-40 py-20">
        <div className="flex gap-8 container">
          <h1 className="text-5xl text-white font-semibold">
            Não vendemos <span className="text-[#2881b8]">promessas</span>
          </h1>
        </div>

        <div className="mt-8">
          <h2 className="text-3xl mb-8 text-white font-semibold">
            Somos especialistas em:
          </h2>
          <div className="flex gap-8 ">
            <Card title="Criaçao de infraestrutura" url="/imgs/7.png" backSubtitle="Colocamos seu negócio no ar com site, CRM, SEO, redes sociais e tudo que você precisa para alavancar seu negócio"  />
            <Card title="Campanhas e social media para captação de leads" url="/imgs/8.png" backSubtitle="Combinamos campanhas e redes sociais pra gerar interesse e atrair possíveis clientes."  />
            <Card title="Construção do funil de vendas de ponta a ponta" url="/imgs/9.png" backSubtitle="Estratégia completa pra transformar interesse em cliente, passo a passo."  />
          </div>

        </div>
      </div>
    </>
  );
}
