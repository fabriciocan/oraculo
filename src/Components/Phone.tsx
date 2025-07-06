"use client";

export const Phone = () => {
  return (
    <div className="group perspective-1000">
      <div className="w-64 sm:w-72 md:w-80 lg:w-[300px] h-[450px] sm:h-[500px] md:h-[520px] bg-zinc-800 flex flex-col justify-between gap-3 sm:gap-4 border-4 border-zinc-700 rounded-2xl animate-fade-in-500 transform transition duration-700 ease-in-out group-hover:rotate-x-3 group-hover:rotate-y-6 shadow-2xl">
        {/* CAMERA */}
        <div className="bg-zinc-700 rounded-t-xl">
          <div className="flex items-center justify-center m-2 gap-2">
            <div className="h-2 w-2 bg-zinc-900 rounded-full"></div>
            <div className="h-2 w-6 bg-zinc-900 rounded-full"></div>
          </div>

          {/* FOTO/NOME/VISTO POR ULTIMO */}
          <div className="flex items-center justify-start gap-3 w-full border-b border-gray-300/50 p-3 bg-zinc-700">
            <div className="h-8 w-8 bg-gradient-to-br from-[#ff00d6] to-[#6605ff] rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">A</span>
            </div>
            <div className="flex flex-col items-start justify-start">
              <p className="text-white text-sm font-semibold">Ana - Cliente</p>
              <p className="text-green-400 text-xs">● Online agora</p>
            </div>
          </div>
        </div>

        {/* MENSAGENS */}
        <div className="m-3 flex flex-col justify-between h-full gap-3 overflow-hidden">
          <div
            className="h-auto max-w-[85%] flex items-center justify-center p-3 bg-white rounded-2xl rounded-bl-sm text-black text-sm shadow-md"
            style={{ animation: 'var(--animate-fade-in-left-500)', animationDelay: '0s', animationFillMode: 'both' }}
          >
            <p>Quero cancelar meu contrato com a Oraculo!! 😤</p>
          </div>

          <div
            className="h-auto max-w-[85%] flex items-center justify-center p-3 bg-white rounded-2xl rounded-bl-sm text-black text-sm shadow-md"
            style={{ animation: 'var(--animate-fade-in-left-500)', animationDelay: '0.5s', animationFillMode: 'both' }}
          >
            <p>Não tenho estoque pra vender tanto! 😭</p>
          </div>

          <div
            className="h-auto max-w-[85%] self-end p-3 bg-gradient-to-r from-green-400 to-green-500 rounded-2xl rounded-br-sm text-white text-sm shadow-md"
            style={{ animation: 'var(--animate-fade-in-right-500)', animationDelay: '1s', animationFillMode: 'both' }}
          >
            <p>Calma Ana! 😅</p>
          </div>

          <div
            className="h-auto max-w-[85%] self-end p-3 bg-gradient-to-r from-green-400 to-green-500 rounded-2xl rounded-br-sm text-white text-sm shadow-md"
            style={{ animation: 'var(--animate-fade-in-right-500)', animationDelay: '1.5s', animationFillMode: 'both' }}
          >
            <p>Posso pausar a campanha por uns dias! 🎯</p>
          </div>

          <div
            className="h-auto max-w-[85%] flex items-center justify-center p-3 bg-white rounded-2xl rounded-bl-sm text-black text-sm shadow-md"
            style={{ animation: 'var(--animate-fade-in-left-500)', animationDelay: '2s', animationFillMode: 'both' }}
          >
            <p>Vocês são demais! ❤️</p>
          </div>
        </div>

        {/* BARRA INFERIOR */}
        <div className="flex items-center justify-around gap-2 bg-zinc-700 h-12 w-full rounded-b-xl px-3">
          <img src="/imgs/smile.svg" alt="Smile" className="h-5 w-5 opacity-70 hover:opacity-100 transition-opacity cursor-pointer" />
          <input
            type="text"
            placeholder="Digite uma mensagem..."
            className="border border-gray-400 rounded-full h-8 flex-1 px-3 text-black text-sm focus:outline-none focus:border-[#ff00d6] transition-colors"
          />
          <img src="/imgs/microphone.svg" alt="Mic" className="h-5 w-5 opacity-70 hover:opacity-100 transition-opacity cursor-pointer" />
        </div>
      </div>
    </div>
  );
};