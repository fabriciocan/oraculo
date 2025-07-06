import React from 'react';

const TickerBar = () => {
  return (
    <div className="relative overflow-hidden bg-[#894ce8] h-12 w-full flex items-center">
      <div className="animate-ticker flex whitespace-nowrap">
        {/* Duplicamos o conteúdo para gerar loop contínuo */}
        <div className="flex items-center gap-4">
          {Array.from({ length: 10 }).map((_, i) => (
            <React.Fragment key={i}>
              <p className="text-white font-semibold">Oraculo Mkt</p>
              <div className="h-4 w-4 bg-[#5facfc] rounded-full"></div>
            </React.Fragment>
          ))}
        </div>
        <div className="flex items-center gap-4">
          {Array.from({ length: 10 }).map((_, i) => (
            <React.Fragment key={`clone-${i}`}>
              <p className="text-white font-semibold">Oraculo Mkt</p>
              <div className="h-4 w-4 bg-[#5facfc] rounded-full"></div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TickerBar;
