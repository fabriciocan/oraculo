"use client";

type Props = {
  title: string;
  url: string;
  backSubtitle: string;
}

export const Card = ({ title, url, backSubtitle }: Props) => {
  return (
    <div className="group relative h-[400px] sm:h-[429px] w-full max-w-[280px] sm:w-[241px] [perspective:1000px] mx-auto">
      <div className="absolute duration-1000 w-full h-full [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)]">
        {/* Front Side */}
        <div
          className="absolute w-full h-full bg-cover bg-center bg-no-repeat p-4 sm:p-3 text-white [backface-visibility:hidden] rounded-2xl overflow-hidden shadow-xl"
          style={{ backgroundImage: `url(${url})` }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent rounded-2xl"></div>
          
          <div className="relative z-10 flex flex-col justify-end h-full">
            <div className="mb-4 sm:mb-6">
              <div className="text-lg sm:text-[17px] font-bold uppercase leading-tight mb-3">
                {title}
              </div>
              <div className="group-hover:translate-x-2 transition-transform duration-300">
                <p className="text-sm opacity-75 mb-2">Saiba mais...</p>
                <div className="w-full max-w-[220px] h-0.5 bg-white group-hover:bg-[#ff00d6] transition-colors duration-300" />
              </div>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full bg-gradient-to-br from-[#ff00d6] via-[#54c1ff] to-[#6605ff] p-4 sm:p-6 text-white [transform:rotateX(180deg)] [backface-visibility:hidden] rounded-2xl shadow-xl">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30 rounded-2xl z-0" />

          {/* Content */}
          <div className="relative z-10 flex flex-col h-full">
            <div className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 leading-tight">
              {title}
            </div>
            <div className="flex-grow">
              <p className="text-base sm:text-lg leading-relaxed">
                {backSubtitle}
              </p>
            </div>
            <div className="flex flex-col justify-between items-center mt-auto gap-3 sm:gap-4">
              <button className="w-full px-4 py-3 bg-white/90 text-[#6605ff] rounded-xl font-bold hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg">
                Saiba Mais
              </button>
              <div className="w-full h-0.5 bg-white/50 transition-all duration-500 group-hover:bg-white group-hover:scale-x-100 origin-left scale-x-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};