type Props = {
  title: string;
  url: string;
  backSubtitle: string;
}


export const Card = ({title, url, backSubtitle}:Props) => {

    return(
    <div className="group relative h-[429px] w-[241px] [perspective:1000px]">
  <div
    className="absolute duration-1000 w-full h-full [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)]"
  >
    <div
      className="absolute w-full h-full bg-cover bg-no-repeat p-3 text-white [backface-visibility:hidden]"
      style={{ backgroundImage: `url(${url})` }}
    >

      <div className="flex flex-col justify-end h-full gap">
        <div className="">
          <div className="text-[17px] font-bold uppercase">{title}</div>
        </div>
        <div className="mb-12">
          <p className="text-sm opacity-75 ">Saiba mais...</p>
          <div className="w-[220px] h-0.5 bg-white" />

        </div>
      </div>
    </div>

<div className="absolute w-full h-full bg-gradient-to-br from-[#ff00d6] via-[#54c1ff] to-[#6605ff] p-6 text-white [transform:rotateX(180deg)] [backface-visibility:hidden]">

  {/* overlay */}
  <div className="absolute inset-0 bg-black/30  z-0" />

  {/* conteúdo */}
  <div className="relative z-10 flex flex-col h-full">
    <div className="text-2xl font-bold mb-4">{title}</div>
    <div className="flex-grow">
      <p className="text-lg">{backSubtitle}</p>
    </div>
    <div className="flex flex-col justify-between items-center mt-auto gap-2">
      <button className="px-4 py-2 bg-white text-purple-600 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
        Action
      </button>
      <div className="w-full h-0.5 bg-white transition-all duration-2000 group-hover:scale-x-100 origin-left scale-x-0" />
    </div>
  </div>
</div>

  </div>
</div>
)
}