import { Search } from "lucide-react";

function Filter() {
  return (
    <div className="flex flex-col items-center mt-10">
      <p className="font-bold text-[#00A2F7] text-xl">
        Busque o conteúdo que deseja assistir hoje
      </p>
      <p className="text-xs text-[#00A2F7]">Conteúdo exclusivo todos os dias</p>

      <div className="flex gap-2 items-center mt-2">
        <input
          type="text"
          placeholder="Curso de React"
          className="bg-white border-[#F2F2F2] rounded-md w-153.75 h-8.75 text-md text-center px-2"
        />

        <div className="h-8.75 w-8.75 flex justify-center items-center rounded-md bg-[#E1F4FF]">
          <Search size={22} className="text-[#00A2F7]" />
        </div>
      </div>
    </div>
  );
}

export default Filter;
