import React from 'react';

const TickerBar = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-[#894ce8] via-[#6605ff] to-[#894ce8] h-10 sm:h-12 w-full flex items-center shadow-lg">
      <div className="animate-ticker flex whitespace-nowrap">
        {/* Duplicamos o conteúdo para gerar loop contínuo */}
        <div className="flex items-center gap-3 sm:gap-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <React.Fragment key={i}>
              <p className="text-white font-bold text-sm sm:text-base">Oraculo Marketing</p>
              <div className="h-3 w-3 sm:h-4 sm:w-4 bg-gradient-to-r from-[#5facfc] to-[#54c1ff] rounded-full shadow-sm"></div>
              <p className="text-white/90 font-medium text-sm sm:text-base">Resultados Reais</p>
              <div className="h-3 w-3 sm:h-4 sm:w-4 bg-gradient-to-r from-[#ff00d6] to-[#e600c4] rounded-full shadow-sm"></div>
            </React.Fragment>
          ))}
        </div>
        <div className="flex items-center gap-3 sm:gap-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <React.Fragment key={`clone-${i}`}>
              <p className="text-white font-bold text-sm sm:text-base">Oraculo Marketing</p>
              <div className="h-3 w-3 sm:h-4 sm:w-4 bg-gradient-to-r from-[#5facfc] to-[#54c1ff] rounded-full shadow-sm"></div>
              <p className="text-white/90 font-medium text-sm sm:text-base">Resultados Reais</p>
              <div className="h-3 w-3 sm:h-4 sm:w-4 bg-gradient-to-r from-[#ff00d6] to-[#e600c4] rounded-full shadow-sm"></div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TickerBar;