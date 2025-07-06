"use client";

import { useState } from "react";

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Quanto tempo leva para ver resultados?",
      answer: "Normalmente, nossos clientes começam a ver os primeiros resultados entre 15 a 30 dias. Resultados mais significativos aparecem entre 60 a 90 dias, dependendo do nicho e investimento."
    },
    {
      question: "Qual é o investimento mínimo para começar?",
      answer: "Trabalhamos com diferentes orçamentos. O investimento mínimo varia de acordo com seus objetivos e mercado. Durante nossa consultoria gratuita, definimos a melhor estratégia para seu orçamento."
    },
    {
      question: "Vocês trabalham com que tipos de negócio?",
      answer: "Atendemos diversos segmentos: e-commerce, serviços, clínicas, consultórios, indústrias, startups e muito mais. Nossa metodologia se adapta a qualquer tipo de negócio."
    },
    {
      question: "Como funciona o acompanhamento dos resultados?",
      answer: "Você recebe relatórios detalhados semanalmente e mensalmente, com acesso a dashboard em tempo real. Além disso, fazemos reuniões regulares para alinhar estratégias e otimizações."
    },
    {
      question: "Posso cancelar o serviço a qualquer momento?",
      answer: "Sim! Não trabalhamos com fidelidade. Você pode cancelar quando quiser. Nossa confiança está nos resultados que entregamos, não em contratos longos."
    },
    {
      question: "Vocês garantem resultados?",
      answer: "Garantimos nosso comprometimento e metodologia comprovada. Trabalhamos com metas claras e, se não atingirmos os objetivos acordados, ajustamos a estratégia sem custo adicional."
    }
  ];

  return (
    <div className="bg-black py-16 sm:py-20 px-4 sm:px-8 lg:px-20 xl:px-40">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 animate-slide-in-top">
            Perguntas{" "}
            <span className="text-[#6605ff] relative">
              Frequentes
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#6605ff] to-[#4c2db8] rounded-full"></div>
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-white/80 animate-fade-in-up">
            Tire suas dúvidas sobre nossos serviços e metodologia.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-[#ff00d6]/30 transition-all duration-300 animate-slide-in-bottom"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                className="w-full px-6 sm:px-8 py-6 text-left flex items-center justify-between hover:bg-gray-800/30 transition-colors duration-300"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-lg sm:text-xl font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                <div className={`text-[#ff00d6] text-2xl transition-transform duration-300 ${
                  openIndex === index ? 'rotate-45' : ''
                }`}>
                  +
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 sm:px-8 pb-6">
                  <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-gradient-to-r from-[#ff00d6]/10 to-[#6605ff]/10 backdrop-blur-sm border border-[#ff00d6]/20 rounded-2xl p-8 animate-zoom-in">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-white/80 mb-6">
              Fale conosco e tire todas as suas dúvidas em uma consultoria gratuita.
            </p>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#ff00d6] text-white px-8 py-4 rounded-full font-bold hover:bg-[#e600c4] transition-colors duration-300"
            >
              <span>Falar com Especialista</span>
              <span className="text-xl">💬</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};