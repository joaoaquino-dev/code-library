type CardProps = {
  title: string;
  img: string;
};

const Card = ({ title, img }: CardProps) => {
  return (
    <div className="border w-full p-4 rounded-md border-[#00A2F7] flex flex-col">
      <div className="flex flex-1 justify-center items-center">
        <img src={img} className="w-32 mx-auto" alt="" />
      </div>
      <p className="text-[#00A2F7] font-bold text-md mt-2 mx-auto">{title}</p>
      <p className="text-[#00A2F7] text-md mt-1 mb-2">9H</p>
      <button className="bg-[#00A2F7] text-white w-full py-1 rounded-md cursor-pointer mt-auto">
        Inscreva-se
      </button>
    </div>
  );
};

export default Card;
