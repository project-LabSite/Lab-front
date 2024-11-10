const ResearchCard = ({ item }) => {
  return (
    <div className="border-2 w-72 h-80 flex flex-col mb-8 drop-shadow-lg transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="bg-stone-300 w-64 h-72 m-4 mx-auto flex flex-col justify-around">
        <div>
          <img
            className="w-52 h-52 m-5 bg-slate-200"
            src={`${item.imgSrc}`}
            alt="소식 사진"
          />
        </div>
        <div className="font-bold text-xl ml-6 mb-3 overflow-hidden text-ellipsis whitespace-nowrap">
          {item.content}
        </div>
      </div>
    </div>
  );
};

export default ResearchCard;
