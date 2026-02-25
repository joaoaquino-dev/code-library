const Info = () => {
  return (
    <div className="mt-6 flex w-full justify-between items-center">
      <div className="flex flex-col gap-2 text-[#00A2F7]">
        <p className="font-bold">Pratique com projetos reais</p>
        <p className="w-175 text-sm">
          Em vez de apenas ensinar teoria, focamos em código e resolução de
          problemas reais para inspirar seu próximo projeto. Aprender não tem
          que ser chato!
        </p>
        <button className="cursor-pointer w-40 h-9 bg-[#00A2F7] text-white font-bold rounded-md">
          Ver biblioteca
        </button>
      </div>
      <div className="flex flex-col gap-2 text-[#00A2F7] bg-white rounded-md p-2">
        <p className="font-bold">Cursos rápidos</p>
        <p className="text-sm">Cursos práticos de curta duração</p>
        <button className="w-37 border rounded-md py-0.5 cursor-pointer hover:bg-[#00A2F7] hover:text-white transition shadow-md hover:shadow-lg">
          Assistir
        </button>
      </div>
    </div>
  );
};

export default Info;
