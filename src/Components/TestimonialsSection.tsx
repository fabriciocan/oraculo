"use client";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      company: "Boutique Elegance",
      text: "Em 3 meses, nossas vendas online aumentaram 400%. A Oraculo transformou completamente nosso negócio digital.",
      rating: 5,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "João Santos",
      company: "TechStart Solutions",
      text: "Profissionais excepcionais! Conseguiram gerar mais leads em 1 mês do que tínhamos em 1 ano.",
      rating: 5,
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Ana Costa",
      company: "Clínica Bem Estar",
      text: "ROI de 350% no primeiro trimestre. Recomendo a Oraculo para qualquer empresa que quer crescer de verdade.",
      rating: 5,
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black py-16 sm:py-20 px-4 sm:px-8 lg:px-20 xl:px-40">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 animate-slide-in-top">
            O que nossos{" "}
            <span className="text-[#54c1ff] relative">
              clientes dizem
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#54c1ff] to-[#2881b8] rounded-full"></div>
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-white/80 animate-fade-in-up max-w-3xl mx-auto">
            Histórias reais de transformação e crescimento dos nossos parceiros.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 sm:p-8 hover:border-[#ff00d6]/50 transition-all duration-300 hover:scale-105 animate-flip-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#ff00d6]/30"
                />
                <div>
                  <div className="text-white font-semibold text-base">{testimonial.name}</div>
                  <div className="text-[#54c1ff] text-sm">{testimonial.company}</div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#ff00d6]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 sm:mt-20">
          <div className="text-center animate-zoom-in">
            <div className="text-3xl sm:text-4xl font-bold text-[#ff00d6] mb-2">4.9/5</div>
            <p className="text-white/70">Avaliação média</p>
          </div>
          <div className="text-center animate-zoom-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-3xl sm:text-4xl font-bold text-[#54c1ff] mb-2">100%</div>
            <p className="text-white/70">Recomendação</p>
          </div>
          <div className="text-center animate-zoom-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-3xl sm:text-4xl font-bold text-[#6605ff] mb-2">24h</div>
            <p className="text-white/70">Tempo de resposta</p>
          </div>
        </div>
      </div>
    </div>
  );
};