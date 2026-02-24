const Card = () => {
  return (
    <div className="border w-full p-2">
      <img
        src="https://logospng.org/wp-content/uploads/react.png"
        className="w-32 mx-auto"
        alt=""
      />
      <p className="text-[#00A2F7] font-bold text-md mt-2">
        Fundamentos do React.Js
      </p>
      <p className="text-[#00A2F7] text-md mt-1">9H</p>
      <button className="bg-[#00A2F7] text-white w-full py-1 rounded-md cursor-pointer mt-1">
        Inscreva-se
      </button>
    </div>
  );
};

export default Card;
