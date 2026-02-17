function Filter() {
  return (
    <div className="flex flex-col items-center">
      <p className="font-bold text-[#00A2F7]">
        Busque o conteúdo que deseja assistir hoje
      </p>
      <p className="text-xs text-[#00A2F7]">Conteúdo exclusivo todos os dias</p>

      <input
        type="text"
        className="bg-white border-[#F2F2F2] rounded-md w-153.75 h-8.75"
      />
    </div>
  );
}

export default Filter;
