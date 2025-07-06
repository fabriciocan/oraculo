export const Phone = () => {
  return (
    <div className="group perspective-1000">
      <div className="w-72 md:w-100 lg:w-[300px] h-[500px] md:h-[400px] bg-zinc-800 flex flex-col justify-between gap-4 border-4 border-zinc-700 rounded-lg animate-fade-in-500 transform transition duration-700 ease-in-out group-hover:rotate-x-3 group-hover:rotate-y-6">
        {/* CAMERA */}
        <div className="bg-zinc-700">
          <div className="flex items-center justify-center m-2 gap-2">
            <div className="h-2 w-2 bg-zinc-900 rounded-full"></div>
            <div className="h-2 w-6 bg-zinc-900 rounded-full"></div>
          </div>

          {/* FOTO/NOME/VISTO POR ULTIMO */}
          <div className="flex items-center justify-start gap-2 w-full border-b border-gray-300/50 p-2 bg-zinc-700">
            <div className="h-6 w-6 bg-black rounded-full"></div>
            <div className="flex flex-col items-start justify-start">
              <p className="text-white text-sm">Ana - Cliente</p>
              <p className="text-white text-xs">Visto por último...</p>
            </div>
          </div>
        </div>

        {/* MENSAGENS */}
        <div className="m-2 flex flex-col justify-between h-full gap-2">
          <div
            className="h-auto max-w-[80%] flex items-center justify-center p-2 bg-white rounded text-black text-sm"
            style={{ animation: 'var(--animate-fade-in-left-500)', animationDelay: '0s', animationFillMode: 'both' }}
          >
            <p>Quero cancelar meu contrato com a Oraculo!!</p>
          </div>

          <div
            className="h-auto max-w-[80%] flex items-center justify-center p-2 bg-white rounded text-black text-sm"
            style={{ animation: 'var(--animate-fade-in-left-500)', animationDelay: '0.5s', animationFillMode: 'both' }}
          >
            <p>Não tenho estoque pra vender tanto 😭</p>
          </div>

          <div
            className="h-auto max-w-[80%] self-end p-2 bg-green-300 rounded text-black text-sm"
            style={{ animation: 'var(--animate-fade-in-right-500)', animationDelay: '1s', animationFillMode: 'both' }}
          >
            <p>Calma Ana!</p>
          </div>

          <div
            className="h-auto max-w-[80%] self-end p-2 bg-green-300 rounded text-black text-sm"
            style={{ animation: 'var(--animate-fade-in-right-500)', animationDelay: '1.5s', animationFillMode: 'both' }}
          >
            <p>Posso colocar a verba da campanha em engajamento 😅</p>
          </div>
        </div>

        {/* BARRA INFERIOR */}
        <div className="flex items-center justify-around gap-2 bg-zinc-700 h-10 w-full mt-2">
          <img src="/imgs/smile.svg" alt="Smile" className="h-4 m-2 stroke-white" />
          <input
            type="text"
            className="border border-gray-400 rounded-full h-6 w-40 md:w-52 px-2 text-black focus:outline-none"
          />
          <img src="/imgs/microphone.svg" alt="Mic" className="h-4 m-2" />
        </div>
      </div>
    </div>
  );
};
